#!/usr/bin/env node
/**
 * IndexNow URL submission script for EvoGuess (https://evoguess.site).
 *
 * Usage:
 *   pnpm indexnow                          # Submit all URLs from local dist/ sitemap
 *   pnpm indexnow --dry-run                # Preview payload without sending requests
 *   pnpm indexnow --remote                 # Fetch URLs from live sitemap instead of dist/
 *   pnpm indexnow --verify                 # Verify live key file is reachable before submitting
 *   pnpm indexnow / /vs/whale-hippo-vs-shark/  # Submit specific paths or full URLs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const DEFAULT_SITE = 'https://evoguess.site';
const DEFAULT_KEY = 'e1c28cf0f6339e67b5297aee71e97f00';
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
const MAX_URLS_PER_BATCH = 10000;

const SITE_URL = (process.env.INDEXNOW_SITE || DEFAULT_SITE).replace(/\/+$/, '');
const HOST = new URL(SITE_URL).host;
const KEY = (process.env.INDEXNOW_KEY || DEFAULT_KEY).trim();
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

function parseArgs(argv) {
  const flags = {
    dryRun: false,
    remote: false,
    verify: false,
    help: false,
  };
  const targets = [];

  for (const arg of argv) {
    if (arg === '--dry-run' || arg === '-n') {
      flags.dryRun = true;
    } else if (arg === '--remote' || arg === '-r') {
      flags.remote = true;
    } else if (arg === '--verify') {
      flags.verify = true;
    } else if (arg === '--help' || arg === '-h') {
      flags.help = true;
    } else if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      targets.push(arg);
    }
  }

  return { flags, targets };
}

function printHelp() {
  console.log(`IndexNow submission tool for ${SITE_URL}

Usage:
  node scripts/indexnow.mjs [options] [urlOrPath...]

Options:
  --dry-run, -n   Print the payload without sending HTTP requests
  --remote, -r    Read URLs from live ${SITE_URL}/sitemap-index.xml instead of local dist/
  --verify        Verify ${KEY_LOCATION} returns HTTP 200 with matching key before submitting
  --help, -h      Show this help message

Environment variables:
  INDEXNOW_KEY       Override IndexNow API key (default: ${DEFAULT_KEY})
  INDEXNOW_SITE      Override site origin (default: ${DEFAULT_SITE})
  INDEXNOW_ENDPOINT  Override IndexNow endpoint (default: https://api.indexnow.org/indexnow)
`);
}

function extractLocs(xml) {
  const locs = [];
  const regex = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    locs.push(match[1].trim());
  }
  return locs;
}

function normalizeUrl(input) {
  if (/^https?:\/\//i.test(input)) {
    const parsed = new URL(input);
    if (parsed.host !== HOST) {
      throw new Error(`URL host mismatch: expected "${HOST}", got "${parsed.host}" (${input})`);
    }
    return parsed.toString();
  }
  const cleanPath = input.startsWith('/') ? input : `/${input}`;
  return new URL(cleanPath, `${SITE_URL}/`).toString();
}

function readLocalSitemapUrls() {
  const indexPath = path.join(DIST_DIR, 'sitemap-index.xml');
  if (!fs.existsSync(indexPath)) {
    throw new Error(
      `Local sitemap not found at ${indexPath}. Run "pnpm build" first or pass "--remote".`,
    );
  }

  const indexXml = fs.readFileSync(indexPath, 'utf8');
  const sitemapLocs = extractLocs(indexXml);
  if (sitemapLocs.length === 0) {
    throw new Error(`No child sitemaps found in ${indexPath}`);
  }

  const urls = [];
  for (const sitemapLoc of sitemapLocs) {
    const sitemapPathname = new URL(sitemapLoc).pathname.replace(/^\/+/, '');
    const localSitemapPath = path.join(DIST_DIR, sitemapPathname);
    if (!fs.existsSync(localSitemapPath)) {
      throw new Error(`Referenced sitemap file not found: ${localSitemapPath}`);
    }
    const sitemapXml = fs.readFileSync(localSitemapPath, 'utf8');
    urls.push(...extractLocs(sitemapXml));
  }

  return urls;
}

async function fetchRemoteSitemapUrls() {
  const indexUrl = `${SITE_URL}/sitemap-index.xml`;
  const indexRes = await fetch(indexUrl);
  if (!indexRes.ok) {
    throw new Error(`Failed to fetch ${indexUrl}: HTTP ${indexRes.status}`);
  }
  const indexXml = await indexRes.text();
  const sitemapLocs = extractLocs(indexXml);
  if (sitemapLocs.length === 0) {
    throw new Error(`No child sitemaps found in ${indexUrl}`);
  }

  const urls = [];
  for (const sitemapUrl of sitemapLocs) {
    const res = await fetch(sitemapUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${sitemapUrl}: HTTP ${res.status}`);
    }
    const xml = await res.text();
    urls.push(...extractLocs(xml));
  }

  return urls;
}

function verifyLocalKeyFile() {
  const keyFilePath = path.join(PUBLIC_DIR, `${KEY}.txt`);
  if (!fs.existsSync(keyFilePath)) {
    throw new Error(`Key verification file missing: ${keyFilePath}`);
  }
  const content = fs.readFileSync(keyFilePath, 'utf8').trim();
  if (content !== KEY) {
    throw new Error(`Key file ${keyFilePath} content does not match key "${KEY}"`);
  }
}

async function verifyRemoteKeyFile() {
  const res = await fetch(KEY_LOCATION);
  if (!res.ok) {
    throw new Error(
      `Remote key file check failed: ${KEY_LOCATION} returned HTTP ${res.status}. Deploy the site before submitting to IndexNow.`,
    );
  }
  const content = (await res.text()).trim();
  if (content !== KEY) {
    throw new Error(
      `Remote key file content mismatch at ${KEY_LOCATION}: expected "${KEY}", got "${content.slice(0, 64)}"`,
    );
  }
  console.log(`Verified remote key file: ${KEY_LOCATION}`);
}

function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

async function submitBatch(urlList, batchIndex, totalBatches) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await res.text();
  const label = totalBatches > 1 ? ` (batch ${batchIndex + 1}/${totalBatches})` : '';

  if (res.status === 200 || res.status === 202) {
    const statusNote =
      res.status === 200
        ? 'OK (URLs submitted)'
        : 'Accepted (URLs received; key validation pending)';
    console.log(`IndexNow ${res.status} ${statusNote}${label}: ${urlList.length} URL(s)`);
    return;
  }

  throw new Error(
    `IndexNow submission failed${label}: HTTP ${res.status} ${res.statusText}${bodyText ? ` - ${bodyText}` : ''}`,
  );
}

async function main() {
  const { flags, targets } = parseArgs(process.argv.slice(2));
  if (flags.help) {
    printHelp();
    return;
  }

  verifyLocalKeyFile();

  let rawUrls;
  if (targets.length > 0) {
    rawUrls = targets.map(normalizeUrl);
  } else if (flags.remote) {
    rawUrls = await fetchRemoteSitemapUrls();
  } else {
    rawUrls = readLocalSitemapUrls();
  }

  const uniqueUrls = [...new Set(rawUrls.map(normalizeUrl))];
  if (uniqueUrls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }

  if (flags.dryRun) {
    console.log(
      JSON.stringify(
        {
          endpoint: INDEXNOW_ENDPOINT,
          host: HOST,
          key: KEY,
          keyLocation: KEY_LOCATION,
          urlCount: uniqueUrls.length,
          urlList: uniqueUrls,
        },
        null,
        2,
      ),
    );
    return;
  }

  if (flags.verify) {
    await verifyRemoteKeyFile();
  }

  const batches = chunkArray(uniqueUrls, MAX_URLS_PER_BATCH);
  for (let i = 0; i < batches.length; i++) {
    await submitBatch(batches[i], i, batches.length);
  }
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
