export type Locale = 'en' | 'zh';
export type CategoryId = 'mammals' | 'marine' | 'dinosaurs-birds' | 'insects-plants';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface SpeciesInfo {
  name: LocalizedText;
  scientific: string;
  emoji: string;
  group: LocalizedText;
  accent: string;
}

export interface EvoPuzzle {
  id: string;
  category: CategoryId;
  difficulty: 'easy' | 'medium' | 'hard';
  target: SpeciesInfo;
  closer: SpeciesInfo;
  farther: SpeciesInfo;
  closeMrca: {
    clade: LocalizedText;
    mya: number;
  };
  farMrca: {
    clade: LocalizedText;
    mya: number;
  };
  fact: LocalizedText;
  seoQuestion: LocalizedText;
}

export interface CategoryMeta {
  id: CategoryId;
  slug: string;
  emoji: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  description: LocalizedText;
  seoTitle: string;
  seoDescription: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'mammals',
    slug: 'mammals',
    emoji: '🐘',
    title: { en: 'Mammals Evolution Quiz', zh: '哺乳动物进化树挑战' },
    shortTitle: { en: 'Mammals', zh: '哺乳动物' },
    description: {
      en: 'Discover shocking mammalian family ties — from hyraxes and elephants to pangolins and wolves.',
      zh: '探索颠覆认知的哺乳动物血缘：蹄兔与大象、穿山甲与灰狼谁更亲近？',
    },
    seoTitle: 'Mammals Evolution Quiz — Play Free Phylogenetic Game | EvoGuess',
    seoDescription:
      'Test your mammal taxonomy knowledge! Guess which mammals share a more recent common ancestor in this free browser evolution game.',
  },
  {
    id: 'marine',
    slug: 'marine',
    emoji: '🐋',
    title: { en: 'Marine Life Evolution Quiz', zh: '海洋生物亲缘猜谜' },
    shortTitle: { en: 'Marine Life', zh: '海洋生物' },
    description: {
      en: 'Whales, sharks, starfish, and lobe-finned fish — separate convergent evolution from real ancestry.',
      zh: '鲸鱼、鲨鱼、海星与腔棘鱼——分清趋同进化与真实血缘关系。',
    },
    seoTitle: 'Marine Life Evolution Quiz — Ocean Species Tree Game | EvoGuess',
    seoDescription:
      'Are whales closer to hippos or sharks? Play our free marine biology evolution trivia game and explore the ocean tree of life.',
  },
  {
    id: 'dinosaurs-birds',
    slug: 'dinosaurs-birds',
    emoji: '🦖',
    title: { en: 'Dinosaurs, Birds & Reptiles Quiz', zh: '恐龙、鸟类与爬行动物' },
    shortTitle: { en: 'Dinos & Birds', zh: '恐龙与鸟类' },
    description: {
      en: 'Trace the archosaur family tree from T. rex and crocodiles to falcons, flamingos, and parrots.',
      zh: '追溯主龙类进化树：从霸王龙、鳄鱼到游隼、火烈鸟与鹦鹉。',
    },
    seoTitle: 'Dinosaurs & Birds Evolution Quiz — Tree of Life Game | EvoGuess',
    seoDescription:
      'Is T. rex closer to a chicken or a Triceratops? Play the free dinosaur and bird evolutionary tree game online.',
  },
  {
    id: 'insects-plants',
    slug: 'insects-plants',
    emoji: '🍄',
    title: { en: 'Invertebrates, Fungi & Plants Quiz', zh: '无脊椎动物、真菌与植物' },
    shortTitle: { en: 'Wild Relatives', zh: '奇异近亲' },
    description: {
      en: 'Mushrooms, horseshoe crabs, pill bugs, and strawberries — the wildest branches on the tree of life.',
      zh: '蘑菇、鲎、鼠妇与草莓——生命之树上最令人意想不到的分支。',
    },
    seoTitle: 'Invertebrates, Fungi & Plants Evolution Quiz | EvoGuess',
    seoDescription:
      'Are mushrooms closer to humans or oak trees? Challenge your biology intuition with surprising relatives across the tree of life.',
  },
];

export const PUZZLES: EvoPuzzle[] = [
  {
    id: 'whale-hippo-vs-shark',
    category: 'marine',
    difficulty: 'easy',
    target: {
      name: { en: 'Blue Whale', zh: '蓝鲸' },
      scientific: 'Balaenoptera musculus',
      emoji: '🐋',
      group: { en: 'Cetacean Mammal', zh: '鲸类哺乳动物' },
      accent: '#0284c7',
    },
    closer: {
      name: { en: 'Hippopotamus', zh: '河马' },
      scientific: 'Hippopotamus amphibius',
      emoji: '🦛',
      group: { en: 'Even-toed Ungulate', zh: '偶蹄目' },
      accent: '#7c3aed',
    },
    farther: {
      name: { en: 'Great White Shark', zh: '大白鲨' },
      scientific: 'Carcharodon carcharias',
      emoji: '🦈',
      group: { en: 'Cartilaginous Fish', zh: '软骨鱼纲' },
      accent: '#475569',
    },
    closeMrca: {
      clade: { en: 'Whippomorpha', zh: '鲸河马亚目 (Whippomorpha)' },
      mya: 55,
    },
    farMrca: {
      clade: { en: 'Gnathostomata (Jawed Vertebrates)', zh: '有颌下门' },
      mya: 450,
    },
    fact: {
      en: 'Whales evolved from four-legged land mammals related to hippos around 50 million years ago. Their streamlined bodies resemble sharks purely through convergent evolution.',
      zh: '鲸鱼大约在 5000 万年前由与河马同源的陆生偶蹄哺乳动物演化而来；它们与鲨鱼相似的流线体型只是趋同进化的结果。',
    },
    seoQuestion: {
      en: 'Are whales more closely related to hippos or sharks?',
      zh: '蓝鲸在进化上与河马更近，还是与大白鲨更近？',
    },
  },
  {
    id: 'crocodile-eagle-vs-iguana',
    category: 'dinosaurs-birds',
    difficulty: 'easy',
    target: {
      name: { en: 'Saltwater Crocodile', zh: '湾鳄' },
      scientific: 'Crocodylus porosus',
      emoji: '🐊',
      group: { en: 'Crocodilian', zh: '鳄目' },
      accent: '#15803d',
    },
    closer: {
      name: { en: 'Bald Eagle', zh: '白头海雕' },
      scientific: 'Haliaeetus leucocephalus',
      emoji: '🦅',
      group: { en: 'Bird (Avian Dinosaur)', zh: '鸟纲（现生恐龙）' },
      accent: '#b45309',
    },
    farther: {
      name: { en: 'Green Iguana', zh: '绿鬣蜥' },
      scientific: 'Iguana iguana',
      emoji: '🦎',
      group: { en: 'Squamate Lizard', zh: '有鳞目蜥蜴' },
      accent: '#0d9488',
    },
    closeMrca: {
      clade: { en: 'Archosauria', zh: '主龙类 (Archosauria)' },
      mya: 240,
    },
    farMrca: {
      clade: { en: 'Sauria (All Reptiles & Birds)', zh: '蜥形类 (Sauria)' },
      mya: 280,
    },
    fact: {
      en: 'Crocodiles and birds are the only living archosaurs — sharing a four-chambered heart and nesting care — while lizards split onto the lepidosaur branch much earlier.',
      zh: '鳄鱼和鸟类是现存唯二的主龙类（共有四腔室心脏与护巢行为），而蜥蜴早在约 2.8 亿年前就分化到了鳞龙类分支。',
    },
    seoQuestion: {
      en: 'Are crocodiles more closely related to birds or lizards?',
      zh: '鳄鱼在进化上与鸟类更近，还是与蜥蜴更近？',
    },
  },
  {
    id: 'hyrax-elephant-vs-guinea-pig',
    category: 'mammals',
    difficulty: 'medium',
    target: {
      name: { en: 'Rock Hyrax', zh: '岩蹄兔' },
      scientific: 'Procavia capensis',
      emoji: '🐹',
      group: { en: 'Hyracoidea', zh: '蹄兔目' },
      accent: '#a16207',
    },
    closer: {
      name: { en: 'African Elephant', zh: '非洲象' },
      scientific: 'Loxodonta africana',
      emoji: '🐘',
      group: { en: 'Proboscidea', zh: '长鼻目' },
      accent: '#4b5563',
    },
    farther: {
      name: { en: 'Guinea Pig', zh: '豚鼠' },
      scientific: 'Cavia porcellus',
      emoji: '🐭',
      group: { en: 'Rodentia', zh: '啮齿目' },
      accent: '#d97706',
    },
    closeMrca: {
      clade: { en: 'Paenungulata', zh: '近蹄类 (Paenungulata)' },
      mya: 62,
    },
    farMrca: {
      clade: { en: 'Placentalia', zh: '真兽下纲（胎盘动物）' },
      mya: 100,
    },
    fact: {
      en: 'Despite looking like a plump rodent, the rock hyrax is an African afrothere with tiny tusk-like incisors and flat hoof-like nails — making it one of the elephant’s closest living relatives.',
      zh: '别看岩蹄兔长得像肥硕的啮齿动物，它与大象同属非洲兽总目，甚至拥有微缩象牙般的门齿和蹄状指甲！',
    },
    seoQuestion: {
      en: 'Is a rock hyrax more closely related to an elephant or a guinea pig?',
      zh: '岩蹄兔与非洲象更亲近，还是与豚鼠更亲近？',
    },
  },
  {
    id: 'trex-chicken-vs-triceratops',
    category: 'dinosaurs-birds',
    difficulty: 'easy',
    target: {
      name: { en: 'Tyrannosaurus rex', zh: '霸王龙' },
      scientific: 'Tyrannosaurus rex',
      emoji: '🦖',
      group: { en: 'Theropod Dinosaur', zh: '兽脚亚目恐龙' },
      accent: '#dc2626',
    },
    closer: {
      name: { en: 'Domestic Chicken', zh: '家鸡' },
      scientific: 'Gallus gallus',
      emoji: '🐔',
      group: { en: 'Avian Theropod', zh: '鸟纲（兽脚类）' },
      accent: '#ea580c',
    },
    farther: {
      name: { en: 'Triceratops', zh: '三角龙' },
      scientific: 'Triceratops horridus',
      emoji: '🦕',
      group: { en: 'Ornithischian Dinosaur', zh: '鸟臀目恐龙' },
      accent: '#059669',
    },
    closeMrca: {
      clade: { en: 'Coelurosauria', zh: '虚骨龙类 (Coelurosauria)' },
      mya: 165,
    },
    farMrca: {
      clade: { en: 'Dinosauria', zh: '恐龙总目 (Dinosauria)' },
      mya: 235,
    },
    fact: {
      en: 'Both T. rex and chickens are coelurosaurian theropods. Triceratops belongs to the completely separate ornithischian (“bird-hipped”) branch that diverged ~70 million years earlier.',
      zh: '霸王龙和鸡同属兽脚亚目的虚骨龙类；而三角龙属于鸟臀目恐龙，早在约 2.35 亿年前就与霸王龙分道扬镳。',
    },
    seoQuestion: {
      en: 'Is T. rex more closely related to a chicken or a Triceratops?',
      zh: '霸王龙在进化上与鸡更近，还是与三角龙更近？',
    },
  },
  {
    id: 'mushroom-chimp-vs-oak',
    category: 'insects-plants',
    difficulty: 'medium',
    target: {
      name: { en: 'Fly Agaric Mushroom', zh: '毒蝇伞（蘑菇）' },
      scientific: 'Amanita muscaria',
      emoji: '🍄',
      group: { en: 'Kingdom Fungi', zh: '真菌界' },
      accent: '#e11d48',
    },
    closer: {
      name: { en: 'Chimpanzee', zh: '黑猩猩' },
      scientific: 'Pan troglodytes',
      emoji: '🐒',
      group: { en: 'Kingdom Animalia', zh: '动物界' },
      accent: '#92400e',
    },
    farther: {
      name: { en: 'English Oak Tree', zh: '英国橡树' },
      scientific: 'Quercus robur',
      emoji: '🌳',
      group: { en: 'Kingdom Plantae', zh: '植物界' },
      accent: '#16a34a',
    },
    closeMrca: {
      clade: { en: 'Opisthokonta', zh: '后鞭毛生物 (Opisthokonta)' },
      mya: 1050,
    },
    farMrca: {
      clade: { en: 'Eukaryota', zh: '真核生物域' },
      mya: 1600,
    },
    fact: {
      en: 'Fungi and animals are sister kingdoms within Opisthokonta! Like animals, mushrooms digest organic food externally and store energy as glycogen rather than starch.',
      zh: '真菌界与动物界同属“后鞭毛生物”姐妹群！蘑菇与动物一样储存糖原而非淀粉，与植物反而是远亲。',
    },
    seoQuestion: {
      en: 'Are mushrooms more closely related to animals or plants?',
      zh: '蘑菇（真菌）在进化上与黑猩猩更近，还是与橡树更近？',
    },
  },
  {
    id: 'coelacanth-human-vs-salmon',
    category: 'marine',
    difficulty: 'hard',
    target: {
      name: { en: 'Coelacanth', zh: '腔棘鱼' },
      scientific: 'Latimeria chalumnae',
      emoji: '🐟',
      group: { en: 'Lobe-finned Fish', zh: '肉鳍鱼纲' },
      accent: '#1d4ed8',
    },
    closer: {
      name: { en: 'Human', zh: '人类' },
      scientific: 'Homo sapiens',
      emoji: '🧑',
      group: { en: 'Tetrapod Mammal', zh: '四足动物' },
      accent: '#be185d',
    },
    farther: {
      name: { en: 'Atlantic Salmon', zh: '大西洋鲑' },
      scientific: 'Salmo salar',
      emoji: '🐠',
      group: { en: 'Ray-finned Fish', zh: '辐鳍鱼纲' },
      accent: '#0891b2',
    },
    closeMrca: {
      clade: { en: 'Sarcopterygii (Lobe-finned Vertebrates)', zh: '肉鳍总纲' },
      mya: 415,
    },
    farMrca: {
      clade: { en: 'Osteichthyes (Bony Vertebrates)', zh: '硬骨鱼高纲' },
      mya: 430,
    },
    fact: {
      en: 'Cladistically, “fish” is not a single family! Humans and all land vertebrates evolved from lobe-finned fish, making a coelacanth closer to you than to a salmon or tuna.',
      zh: '在支序分类学中，人类等四足动物都演化自肉鳍鱼，因此腔棘鱼在血缘上离人类比离三文鱼（辐鳍鱼）更近！',
    },
    seoQuestion: {
      en: 'Is a coelacanth more closely related to a human or a salmon?',
      zh: '腔棘鱼与人类更亲近，还是与大西洋鲑更亲近？',
    },
  },
  {
    id: 'giant-panda-polar-bear-vs-red-panda',
    category: 'mammals',
    difficulty: 'easy',
    target: {
      name: { en: 'Giant Panda', zh: '大熊猫' },
      scientific: 'Ailuropoda melanoleuca',
      emoji: '🐼',
      group: { en: 'Ursidae (Bear)', zh: '熊科' },
      accent: '#1e293b',
    },
    closer: {
      name: { en: 'Polar Bear', zh: '北极熊' },
      scientific: 'Ursus maritimus',
      emoji: '🐻‍❄️',
      group: { en: 'Ursidae (Bear)', zh: '熊科' },
      accent: '#0ea5e9',
    },
    farther: {
      name: { en: 'Red Panda', zh: '小熊猫' },
      scientific: 'Ailurus fulgens',
      emoji: '🦊',
      group: { en: 'Ailuridae', zh: '小熊猫科' },
      accent: '#ea580c',
    },
    closeMrca: {
      clade: { en: 'Ursidae (True Bears)', zh: '熊科 (Ursidae)' },
      mya: 19,
    },
    farMrca: {
      clade: { en: 'Arctoidea', zh: '熊形下目 (Arctoidea)' },
      mya: 40,
    },
    fact: {
      en: 'Giant pandas are true bears! Both giant and red pandas independently evolved a “false thumb” wrist bone to grip bamboo — a textbook case of convergent evolution.',
      zh: '大熊猫是正宗熊科成员，而小熊猫属于独立的小熊猫科；两者为了吃竹子各自独立演化出了“伪拇指”。',
    },
    seoQuestion: {
      en: 'Is a giant panda more closely related to a polar bear or a red panda?',
      zh: '大熊猫与北极熊更亲近，还是与小熊猫更亲近？',
    },
  },
  {
    id: 'horseshoe-crab-scorpion-vs-crab',
    category: 'insects-plants',
    difficulty: 'medium',
    target: {
      name: { en: 'Horseshoe Crab', zh: '马蹄蟹（鲎）' },
      scientific: 'Limulus polyphemus',
      emoji: '🦀',
      group: { en: 'Xiphosura', zh: '剑尾目' },
      accent: '#0369a1',
    },
    closer: {
      name: { en: 'Emperor Scorpion', zh: '帝王蝎' },
      scientific: 'Pandinus imperator',
      emoji: '🦂',
      group: { en: 'Arachnid', zh: '蛛形纲' },
      accent: '#7e22ce',
    },
    farther: {
      name: { en: 'Blue Crab', zh: '蓝蟹' },
      scientific: 'Callinectes sapidus',
      emoji: '🦞',
      group: { en: 'Crustacean', zh: '甲壳亚门' },
      accent: '#dc2626',
    },
    closeMrca: {
      clade: { en: 'Chelicerata', zh: '螯肢亚门 (Chelicerata)' },
      mya: 480,
    },
    farMrca: {
      clade: { en: 'Arthropoda', zh: '节肢动物门' },
      mya: 540,
    },
    fact: {
      en: 'Horseshoe crabs are not true crabs at all — they are chelicerates closely allied with spiders and scorpions, lacking antennae and using pincer-like chelicerae to feed.',
      zh: '鲎虽然英文名叫“马蹄蟹”，却不是真正的螃蟹，而是与蜘蛛、蝎子同属螯肢亚门的远古近亲。',
    },
    seoQuestion: {
      en: 'Are horseshoe crabs more closely related to scorpions or crabs?',
      zh: '鲎（马蹄蟹）与蝎子更亲近，还是与真螃蟹更亲近？',
    },
  },
  {
    id: 'falcon-parrot-vs-eagle',
    category: 'dinosaurs-birds',
    difficulty: 'hard',
    target: {
      name: { en: 'Peregrine Falcon', zh: '游隼' },
      scientific: 'Falco peregrinus',
      emoji: '🦅',
      group: { en: 'Falconiformes', zh: '隼形目' },
      accent: '#334155',
    },
    closer: {
      name: { en: 'Scarlet Macaw', zh: '绯红金刚鹦鹉' },
      scientific: 'Ara macao',
      emoji: '🦜',
      group: { en: 'Psittaciformes', zh: '鹦形目' },
      accent: '#ef4444',
    },
    farther: {
      name: { en: 'Golden Eagle', zh: '金雕' },
      scientific: 'Aquila chrysaetos',
      emoji: '🦉',
      group: { en: 'Accipitriformes', zh: '鹰形目' },
      accent: '#92400e',
    },
    closeMrca: {
      clade: { en: 'Australaves', zh: '南鸟类 (Australaves)' },
      mya: 60,
    },
    farMrca: {
      clade: { en: 'Telluraves (Core Landbirds)', zh: '陆鸟类 (Telluraves)' },
      mya: 68,
    },
    fact: {
      en: 'DNA sequencing shocked ornithologists by revealing that falcons are closer to parrots and songbirds than to hawks or eagles! Both eagles and falcons evolved hooked beaks independently.',
      zh: '现代基因组测序震惊了鸟类学界：游隼的近亲其实是鹦鹉和鸣禽，而与老鹰、金雕反而属于不同演化支！',
    },
    seoQuestion: {
      en: 'Are falcons more closely related to parrots or eagles?',
      zh: '游隼在进化上与鹦鹉更近，还是与金雕更近？',
    },
  },
  {
    id: 'termite-cockroach-vs-ant',
    category: 'insects-plants',
    difficulty: 'easy',
    target: {
      name: { en: 'Subterranean Termite', zh: '白蚁' },
      scientific: 'Reticulitermes flavipes',
      emoji: '🪲',
      group: { en: 'Blattodea (Isoptera)', zh: '蜚蠊目（等翅下目）' },
      accent: '#b45309',
    },
    closer: {
      name: { en: 'American Cockroach', zh: '美洲大蠊（蟑螂）' },
      scientific: 'Periplaneta americana',
      emoji: '🪳',
      group: { en: 'Blattodea', zh: '蜚蠊目' },
      accent: '#78350f',
    },
    farther: {
      name: { en: 'Red Fire Ant', zh: '红火蚁' },
      scientific: 'Solenopsis invicta',
      emoji: '🐜',
      group: { en: 'Hymenoptera', zh: '膜翅目' },
      accent: '#dc2626',
    },
    closeMrca: {
      clade: { en: 'Blattodea', zh: '蜚蠊目 (Blattodea)' },
      mya: 150,
    },
    farMrca: {
      clade: { en: 'Neoptera (Winged Insects)', zh: '新翅下纲' },
      mya: 350,
    },
    fact: {
      en: 'Termites are literally social, wood-eating cockroaches! Despite being called “white ants,” ants are actually closer to wasps and bees.',
      zh: '白蚁本质上是群居、吃木头的蟑螂（同属蜚蠊目）；而蚂蚁其实是黄蜂和蜜蜂的近亲。',
    },
    seoQuestion: {
      en: 'Are termites more closely related to cockroaches or ants?',
      zh: '白蚁在进化上与蟑螂更近，还是与蚂蚁更近？',
    },
  },
  {
    id: 'manatee-elephant-vs-seal',
    category: 'marine',
    difficulty: 'medium',
    target: {
      name: { en: 'West Indian Manatee', zh: '西印度海牛' },
      scientific: 'Trichechus manatus',
      emoji: '🦭',
      group: { en: 'Sirenia', zh: '海牛目' },
      accent: '#0f766e',
    },
    closer: {
      name: { en: 'Asian Elephant', zh: '亚洲象' },
      scientific: 'Elephas maximus',
      emoji: '🐘',
      group: { en: 'Proboscidea', zh: '长鼻目' },
      accent: '#64748b',
    },
    farther: {
      name: { en: 'Harbor Seal', zh: '港海豹' },
      scientific: 'Phoca vitulina',
      emoji: '🦦',
      group: { en: 'Carnivora (Pinniped)', zh: '食肉目鳍足类' },
      accent: '#3b82f6',
    },
    closeMrca: {
      clade: { en: 'Tethytheria', zh: '特提斯兽类 (Tethytheria)' },
      mya: 60,
    },
    farMrca: {
      clade: { en: 'Placentalia', zh: '真兽下纲' },
      mya: 100,
    },
    fact: {
      en: 'Manatees and elephants share a clade called Tethytheria — both have continuously replaced molar teeth and tiny toenails on their flippers/feet. Seals are marine carnivores related to bears and weasels.',
      zh: '海牛和大象同属特提斯兽类，海牛的鳍肢末端甚至保留着类似象脚的指甲；而海豹是与熊和鼬更近的食肉目。',
    },
    seoQuestion: {
      en: 'Are manatees more closely related to elephants or seals?',
      zh: '海牛与大象更亲近，还是与海豹更亲近？',
    },
  },
  {
    id: 'pangolin-wolf-vs-armadillo',
    category: 'mammals',
    difficulty: 'medium',
    target: {
      name: { en: 'Sunda Pangolin', zh: '马来穿山甲' },
      scientific: 'Manis javanica',
      emoji: '🦔',
      group: { en: 'Pholidota', zh: '鳞甲目' },
      accent: '#9a3412',
    },
    closer: {
      name: { en: 'Gray Wolf', zh: '灰狼' },
      scientific: 'Canis lupus',
      emoji: '🐺',
      group: { en: 'Carnivora', zh: '食肉目' },
      accent: '#475569',
    },
    farther: {
      name: { en: 'Nine-banded Armadillo', zh: '九带犰狳' },
      scientific: 'Dasypus novemcinctus',
      emoji: '🦡',
      group: { en: 'Xenarthra', zh: '异关节总目' },
      accent: '#854d0e',
    },
    closeMrca: {
      clade: { en: 'Ferae', zh: '猛兽类 (Ferae)' },
      mya: 78,
    },
    farMrca: {
      clade: { en: 'Placentalia', zh: '真兽下纲' },
      mya: 100,
    },
    fact: {
      en: 'Pangolins and armadillos both curl into armored balls and eat ants, yet pangolins are actually sister to Carnivora (wolves, cats, bears) within the clade Ferae!',
      zh: '穿山甲和犰狳都会缩成装甲球吃蚂蚁，但基因证明穿山甲是食肉目（狼、猫、熊）的直系姐妹群！',
    },
    seoQuestion: {
      en: 'Are pangolins more closely related to wolves or armadillos?',
      zh: '穿山甲与灰狼更亲近，还是与犰狳更亲近？',
    },
  },
  {
    id: 'starfish-human-vs-bee',
    category: 'marine',
    difficulty: 'hard',
    target: {
      name: { en: 'Common Starfish', zh: '海星' },
      scientific: 'Asterias rubens',
      emoji: '⭐',
      group: { en: 'Echinodermata', zh: '棘皮动物门' },
      accent: '#f59e0b',
    },
    closer: {
      name: { en: 'Human', zh: '人类' },
      scientific: 'Homo sapiens',
      emoji: '🧑',
      group: { en: 'Chordata', zh: '脊索动物门' },
      accent: '#ec4899',
    },
    farther: {
      name: { en: 'Western Honeybee', zh: '西方蜜蜂' },
      scientific: 'Apis mellifera',
      emoji: '🐝',
      group: { en: 'Arthropoda', zh: '节肢动物门' },
      accent: '#eab308',
    },
    closeMrca: {
      clade: { en: 'Deuterostomia', zh: '后口动物总门 (Deuterostomia)' },
      mya: 580,
    },
    farMrca: {
      clade: { en: 'Bilateria', zh: '两侧对称动物' },
      mya: 610,
    },
    fact: {
      en: 'Starfish and humans are both deuterostomes (sharing the same early embryonic body-opening development), whereas insects like bees are protostomes on a separate ancient branch.',
      zh: '海星和人类同属后口动物总门（早期胚胎发育方式一致），而蜜蜂等节肢动物属于原口动物分支。',
    },
    seoQuestion: {
      en: 'Are starfish more closely related to humans or insects?',
      zh: '海星在进化上与人类更近，还是与蜜蜂更近？',
    },
  },
  {
    id: 'cat-hyena-vs-fox',
    category: 'mammals',
    difficulty: 'medium',
    target: {
      name: { en: 'Domestic Cat', zh: '家猫' },
      scientific: 'Felis catus',
      emoji: '🐱',
      group: { en: 'Felidae', zh: '猫科' },
      accent: '#f97316',
    },
    closer: {
      name: { en: 'Spotted Hyena', zh: '斑鬣狗' },
      scientific: 'Crocuta crocuta',
      emoji: '🦁',
      group: { en: 'Hyaenidae (Feliformia)', zh: '鬣狗科（猫型亚目）' },
      accent: '#a16207',
    },
    farther: {
      name: { en: 'Red Fox', zh: '赤狐' },
      scientific: 'Vulpes vulpes',
      emoji: '🦊',
      group: { en: 'Canidae (Caniformia)', zh: '犬科（犬型亚目）' },
      accent: '#dc2626',
    },
    closeMrca: {
      clade: { en: 'Feliformia (Cat-like Carnivores)', zh: '猫型亚目 (Feliformia)' },
      mya: 40,
    },
    farMrca: {
      clade: { en: 'Carnivora', zh: '食肉目' },
      mya: 54,
    },
    fact: {
      en: 'Hyenas look and hunt like dogs, but they belong to Feliformia — the cat-like side of Carnivora alongside lions, mongooses, and civets.',
      zh: '斑鬣狗外形和捕猎方式酷似犬科，但分类学上它属于猫型亚目，是猫、狮子和猫鼬的近亲！',
    },
    seoQuestion: {
      en: 'Are hyenas more closely related to cats or dogs?',
      zh: '家猫与斑鬣狗更亲近，还是与赤狐更亲近？',
    },
  },
  {
    id: 'pillbug-lobster-vs-beetle',
    category: 'insects-plants',
    difficulty: 'medium',
    target: {
      name: { en: 'Pill Bug (Roly-Poly)', zh: '鼠妇（西瓜虫）' },
      scientific: 'Armadillidium vulgare',
      emoji: '🐛',
      group: { en: 'Isopod Crustacean', zh: '等足目甲壳动物' },
      accent: '#64748b',
    },
    closer: {
      name: { en: 'American Lobster', zh: '美洲螯龙虾' },
      scientific: 'Homarus americanus',
      emoji: '🦞',
      group: { en: 'Decapod Crustacean', zh: '十足目甲壳动物' },
      accent: '#dc2626',
    },
    farther: {
      name: { en: 'Ladybug Beetle', zh: '七星瓢虫' },
      scientific: 'Coccinella septempunctata',
      emoji: '🐞',
      group: { en: 'Insecta (Hexapoda)', zh: '昆虫纲' },
      accent: '#e11d48',
    },
    closeMrca: {
      clade: { en: 'Malacostraca', zh: '软甲纲 (Malacostraca)' },
      mya: 380,
    },
    farMrca: {
      clade: { en: 'Pancrustacea', zh: '泛甲壳动物' },
      mya: 500,
    },
    fact: {
      en: 'Backyard pill bugs are terrestrial crustaceans that still breathe through gill-like structures! They belong to Malacostraca right alongside lobsters, crabs, and shrimp.',
      zh: '花盆底下的西瓜虫（鼠妇）其实是陆生甲壳动物，至今仍靠类似鳃的结构呼吸，和龙虾、螃蟹同属软甲纲。',
    },
    seoQuestion: {
      en: 'Are pill bugs more closely related to lobsters or beetles?',
      zh: '鼠妇（西瓜虫）与龙虾更亲近，还是与瓢虫更亲近？',
    },
  },
  {
    id: 'cow-dolphin-vs-horse',
    category: 'mammals',
    difficulty: 'medium',
    target: {
      name: { en: 'Domestic Cow', zh: '家牛' },
      scientific: 'Bos taurus',
      emoji: '🐄',
      group: { en: 'Artiodactyla', zh: '偶蹄目' },
      accent: '#475569',
    },
    closer: {
      name: { en: 'Bottlenose Dolphin', zh: '宽吻海豚' },
      scientific: 'Tursiops truncatus',
      emoji: '🐬',
      group: { en: 'Cetacea (Artiodactyla)', zh: '鲸类（鲸偶蹄目）' },
      accent: '#0284c7',
    },
    farther: {
      name: { en: 'Wild Horse', zh: '野马' },
      scientific: 'Equus ferus',
      emoji: '🐴',
      group: { en: 'Perissodactyla', zh: '奇蹄目' },
      accent: '#92400e',
    },
    closeMrca: {
      clade: { en: 'Artiodactyla (Even-toed Ungulates)', zh: '鲸偶蹄目 (Artiodactyla)' },
      mya: 58,
    },
    farMrca: {
      clade: { en: 'Ferungulata', zh: '猛兽有蹄类' },
      mya: 78,
    },
    fact: {
      en: 'Cows and dolphins both sit inside Artiodactyla (even-toed ungulates), whereas horses are odd-toed ungulates (Perissodactyla) closer to rhinos and tapirs.',
      zh: '牛和海豚同属鲸偶蹄目；而马属于奇蹄目（与犀牛、貘更近），早在约 7800 万年前就与牛分化了。',
    },
    seoQuestion: {
      en: 'Are cows more closely related to dolphins or horses?',
      zh: '牛在进化上与海豚更近，还是与马更近？',
    },
  },
  {
    id: 'flamingo-grebe-vs-heron',
    category: 'dinosaurs-birds',
    difficulty: 'hard',
    target: {
      name: { en: 'Greater Flamingo', zh: '大火烈鸟' },
      scientific: 'Phoenicopterus roseus',
      emoji: '🦩',
      group: { en: 'Phoenicopteriformes', zh: '红鹳目' },
      accent: '#ec4899',
    },
    closer: {
      name: { en: 'Great Crested Grebe', zh: '凤头䴙䴘' },
      scientific: 'Podiceps cristatus',
      emoji: '🦆',
      group: { en: 'Podicipediformes', zh: '䴙䴘目' },
      accent: '#0d9488',
    },
    farther: {
      name: { en: 'Great Blue Heron', zh: '大蓝鹭' },
      scientific: 'Ardea herodias',
      emoji: '🦢',
      group: { en: 'Pelecaniformes', zh: '鹈形目' },
      accent: '#3b82f6',
    },
    closeMrca: {
      clade: { en: 'Mirandornithes', zh: '奇迹鸟类 (Mirandornithes)' },
      mya: 40,
    },
    farMrca: {
      clade: { en: 'Neoaves', zh: '新鸟小纲 (Neoaves)' },
      mya: 66,
    },
    fact: {
      en: 'Flamingos look like long-legged herons or storks, yet genetics revealed their closest relatives are stubby, diving grebes — grouped together in Mirandornithes (“miraculous birds”).',
      zh: '火烈鸟虽有长腿像鹭和鹳，但基因发现它最近的亲戚竟然是短腿潜水的䴙䴘，合称“奇迹鸟类”！',
    },
    seoQuestion: {
      en: 'Are flamingos more closely related to grebes or herons?',
      zh: '火烈鸟与凤头䴙䴘更亲近，还是与大蓝鹭更亲近？',
    },
  },
  {
    id: 'strawberry-rose-vs-blueberry',
    category: 'insects-plants',
    difficulty: 'easy',
    target: {
      name: { en: 'Garden Strawberry', zh: '草莓' },
      scientific: 'Fragaria × ananassa',
      emoji: '🍓',
      group: { en: 'Rosaceae', zh: '蔷薇科' },
      accent: '#e11d48',
    },
    closer: {
      name: { en: 'Dog Rose', zh: '犬蔷薇（玫瑰）' },
      scientific: 'Rosa canina',
      emoji: '🌹',
      group: { en: 'Rosaceae', zh: '蔷薇科' },
      accent: '#be123c',
    },
    farther: {
      name: { en: 'Highbush Blueberry', zh: '蓝莓' },
      scientific: 'Vaccinium corymbosum',
      emoji: '🫐',
      group: { en: 'Ericaceae', zh: '杜鹃花科' },
      accent: '#4338ca',
    },
    closeMrca: {
      clade: { en: 'Rosaceae (Rose Family)', zh: '蔷薇科 (Rosaceae)' },
      mya: 70,
    },
    farMrca: {
      clade: { en: 'Core Eudicots', zh: '核心真双子叶植物' },
      mya: 115,
    },
    fact: {
      en: 'Strawberries, roses, apples, and almonds are all members of the rose family (Rosaceae). Blueberries belong to the heather/azalea family (Ericaceae).',
      zh: '草莓、玫瑰、苹果和杏仁都属于蔷薇科；而蓝莓属于杜鹃花科，与草莓相隔上亿年的演化距离。',
    },
    seoQuestion: {
      en: 'Are strawberries more closely related to roses or blueberries?',
      zh: '草莓在进化上与玫瑰更近，还是与蓝莓更近？',
    },
  },
  {
    id: 'orca-giraffe-vs-walrus',
    category: 'marine',
    difficulty: 'medium',
    target: {
      name: { en: 'Orca (Killer Whale)', zh: '虎鲸' },
      scientific: 'Orcinus orca',
      emoji: '🐋',
      group: { en: 'Oceanic Dolphin', zh: '海豚科' },
      accent: '#0f172a',
    },
    closer: {
      name: { en: 'Giraffe', zh: '长颈鹿' },
      scientific: 'Giraffa camelopardalis',
      emoji: '🦒',
      group: { en: 'Artiodactyla', zh: '偶蹄目' },
      accent: '#d97706',
    },
    farther: {
      name: { en: 'Walrus', zh: '海象' },
      scientific: 'Odobenus rosmarus',
      emoji: '🦭',
      group: { en: 'Carnivora', zh: '食肉目' },
      accent: '#6b7280',
    },
    closeMrca: {
      clade: { en: 'Artiodactyla', zh: '鲸偶蹄目' },
      mya: 60,
    },
    farMrca: {
      clade: { en: 'Laurasiatheria', zh: '劳亚兽总目' },
      mya: 78,
    },
    fact: {
      en: 'Even though orcas and walruses share icy oceans and blubber, orcas are cetaceans nested inside even-toed ungulates alongside giraffes and deer.',
      zh: '虽然虎鲸和海象都生活在冰冷海洋中，但虎鲸属于鲸偶蹄目，与长颈鹿和鹿的亲缘比与海象（食肉目）更近！',
    },
    seoQuestion: {
      en: 'Are orcas more closely related to giraffes or walruses?',
      zh: '虎鲸与长颈鹿更亲近，还是与海象更亲近？',
    },
  },
  {
    id: 'platypus-kangaroo-vs-duck',
    category: 'mammals',
    difficulty: 'easy',
    target: {
      name: { en: 'Platypus', zh: '鸭嘴兽' },
      scientific: 'Ornithorhynchus anatinus',
      emoji: '🦫',
      group: { en: 'Monotreme Mammal', zh: '单孔目哺乳动物' },
      accent: '#7c2d12',
    },
    closer: {
      name: { en: 'Red Kangaroo', zh: '红袋鼠' },
      scientific: 'Osphranter rufus',
      emoji: '🦘',
      group: { en: 'Marsupial Mammal', zh: '有袋类哺乳动物' },
      accent: '#b45309',
    },
    farther: {
      name: { en: 'Mallard Duck', zh: '绿头鸭' },
      scientific: 'Anas platyrhynchos',
      emoji: '🦆',
      group: { en: 'Bird (Aves)', zh: '鸟纲' },
      accent: '#15803d',
    },
    closeMrca: {
      clade: { en: 'Mammalia', zh: '哺乳纲 (Mammalia)' },
      mya: 180,
    },
    farMrca: {
      clade: { en: 'Amniota', zh: '羊膜动物' },
      mya: 315,
    },
    fact: {
      en: 'Despite its duck-like bill and egg-laying habit, the platypus has fur, produces milk, and has three middle-ear bones — making it a true mammal far closer to kangaroos than to any bird.',
      zh: '尽管有鸭嘴且会下蛋，但鸭嘴兽长有毛发并能分泌乳汁，是货真价实的哺乳动物，与袋鼠比与鸭子亲近得多。',
    },
    seoQuestion: {
      en: 'Is a platypus more closely related to a kangaroo or a duck?',
      zh: '鸭嘴兽与袋鼠更亲近，还是与绿头鸭更亲近？',
    },
  },
  {
    id: 'red-panda-raccoon-vs-giant-panda',
    category: 'mammals',
    difficulty: 'medium',
    target: {
      name: { en: 'Red Panda', zh: '小熊猫' },
      scientific: 'Ailurus fulgens',
      emoji: '🦊',
      group: { en: 'Ailuridae', zh: '小熊猫科' },
      accent: '#ea580c',
    },
    closer: {
      name: { en: 'Common Raccoon', zh: '北美浣熊' },
      scientific: 'Procyon lotor',
      emoji: '🦝',
      group: { en: 'Procyonidae', zh: '浣熊科' },
      accent: '#475569',
    },
    farther: {
      name: { en: 'Giant Panda', zh: '大熊猫' },
      scientific: 'Ailuropoda melanoleuca',
      emoji: '🐼',
      group: { en: 'Ursidae (Bear)', zh: '熊科' },
      accent: '#0f172a',
    },
    closeMrca: {
      clade: { en: 'Musteloidea', zh: '鼬超科 (Musteloidea)' },
      mya: 30,
    },
    farMrca: {
      clade: { en: 'Arctoidea', zh: '熊形下目' },
      mya: 40,
    },
    fact: {
      en: 'Red pandas sit inside Musteloidea alongside raccoons, weasels, and skunks. In fact, the word “panda” originally belonged to the red panda before giant pandas were named!',
      zh: '小熊猫与浣熊、鼬、臭鼬同属鼬超科。有趣的是，英文“panda”一词最初指的正是小熊猫！',
    },
    seoQuestion: {
      en: 'Is a red panda more closely related to a raccoon or a giant panda?',
      zh: '小熊猫与浣熊更亲近，还是与大熊猫更亲近？',
    },
  },
  {
    id: 'seahorse-tuna-vs-manta-ray',
    category: 'marine',
    difficulty: 'easy',
    target: {
      name: { en: 'Lined Seahorse', zh: '海马' },
      scientific: 'Hippocampus erectus',
      emoji: '🐴',
      group: { en: 'Ray-finned Fish', zh: '辐鳍鱼纲' },
      accent: '#d97706',
    },
    closer: {
      name: { en: 'Bluefin Tuna', zh: '蓝鳍金枪鱼' },
      scientific: 'Thunnus thynnus',
      emoji: '🐟',
      group: { en: 'Ray-finned Fish', zh: '辐鳍鱼纲' },
      accent: '#0284c7',
    },
    farther: {
      name: { en: 'Giant Manta Ray', zh: '巨型蝠鲼' },
      scientific: 'Mobula birostris',
      emoji: '🦈',
      group: { en: 'Cartilaginous Fish', zh: '软骨鱼纲' },
      accent: '#334155',
    },
    closeMrca: {
      clade: { en: 'Percomorpha (Bony Fish)', zh: '鲈形总目（硬骨鱼）' },
      mya: 105,
    },
    farMrca: {
      clade: { en: 'Gnathostomata', zh: '有颌下门' },
      mya: 450,
    },
    fact: {
      en: 'Seahorses are highly specialized bony fishes inside Percomorpha — closely allied with tunas and pipefishes — whereas manta rays are cartilaginous relatives of sharks.',
      zh: '海马是高度特化的硬骨鱼，与金枪鱼同属鲈形总目；而蝠鲼是与鲨鱼同源的软骨鱼。',
    },
    seoQuestion: {
      en: 'Are seahorses more closely related to tuna or manta rays?',
      zh: '海马与蓝鳍金枪鱼更亲近，还是与蝠鲼更亲近？',
    },
  },
  {
    id: 'aardvark-elephant-vs-anteater',
    category: 'mammals',
    difficulty: 'hard',
    target: {
      name: { en: 'Aardvark', zh: '土豚' },
      scientific: 'Orycteropus afer',
      emoji: '🐽',
      group: { en: 'Tubulidentata', zh: '管齿目' },
      accent: '#a16207',
    },
    closer: {
      name: { en: 'African Elephant', zh: '非洲象' },
      scientific: 'Loxodonta africana',
      emoji: '🐘',
      group: { en: 'Afrotheria', zh: '非洲兽总目' },
      accent: '#475569',
    },
    farther: {
      name: { en: 'Giant Anteater', zh: '大食蚁兽' },
      scientific: 'Myrmecophaga tridactyla',
      emoji: '🦥',
      group: { en: 'Xenarthra', zh: '异关节总目' },
      accent: '#78350f',
    },
    closeMrca: {
      clade: { en: 'Afrotheria', zh: '非洲兽总目 (Afrotheria)' },
      mya: 75,
    },
    farMrca: {
      clade: { en: 'Placentalia', zh: '真兽下纲' },
      mya: 100,
    },
    fact: {
      en: 'Aardvarks (Africa) and giant anteaters (South America) both evolved long snouts and sticky tongues for eating termites, yet aardvarks belong to the elephant clade Afrotheria!',
      zh: '非洲的土豚和南美的食蚁兽都为吃白蚁演化出了长吻与粘舌，但土豚属于非洲兽总目，和大象才是亲戚！',
    },
    seoQuestion: {
      en: 'Is an aardvark more closely related to an elephant or an anteater?',
      zh: '土豚与非洲象更亲近，还是与大食蚁兽更亲近？',
    },
  },
  {
    id: 'octopus-snail-vs-jellyfish',
    category: 'marine',
    difficulty: 'easy',
    target: {
      name: { en: 'Common Octopus', zh: '章鱼' },
      scientific: 'Octopus vulgaris',
      emoji: '🐙',
      group: { en: 'Cephalopod Mollusk', zh: '头足纲软体动物' },
      accent: '#9333ea',
    },
    closer: {
      name: { en: 'Garden Snail', zh: '花园蜗牛' },
      scientific: 'Cornu aspersum',
      emoji: '🐌',
      group: { en: 'Gastropod Mollusk', zh: '腹足纲软体动物' },
      accent: '#65a30d',
    },
    farther: {
      name: { en: 'Moon Jellyfish', zh: '海月水母' },
      scientific: 'Aurelia aurita',
      emoji: '🪼',
      group: { en: 'Cnidaria', zh: '刺胞动物门' },
      accent: '#06b6d4',
    },
    closeMrca: {
      clade: { en: 'Mollusca', zh: '软体动物门 (Mollusca)' },
      mya: 530,
    },
    farMrca: {
      clade: { en: 'Eumetazoa', zh: '真后生动物' },
      mya: 680,
    },
    fact: {
      en: 'Brilliant, shell-less octopuses are mollusks — sharing a muscular foot (modified into arms) and a rasping tongue (radula) with snails and clams.',
      zh: '聪明的章鱼其实属于软体动物门，与蜗牛、蛤蜊共享齿舌结构，它的触手正是特化后的“腹足”。',
    },
    seoQuestion: {
      en: 'Are octopuses more closely related to snails or jellyfish?',
      zh: '章鱼与蜗牛更亲近，还是与水母更亲近？',
    },
  },
  {
    id: 'slow-worm-komodo-vs-cobra',
    category: 'dinosaurs-birds',
    difficulty: 'medium',
    target: {
      name: { en: 'Slow Worm (Legless Lizard)', zh: '脆蛇蜥（无足蜥蜴）' },
      scientific: 'Anguis fragilis',
      emoji: '🦎',
      group: { en: 'Anguidae Lizard', zh: '蛇蜥科' },
      accent: '#65a30d',
    },
    closer: {
      name: { en: 'Komodo Dragon', zh: '科莫多巨蜥' },
      scientific: 'Varanus komodoensis',
      emoji: '🐊',
      group: { en: 'Varanidae Lizard', zh: '巨蜥科' },
      accent: '#4d7c0f',
    },
    farther: {
      name: { en: 'King Cobra', zh: '眼镜王蛇' },
      scientific: 'Ophiophagus hannah',
      emoji: '🐍',
      group: { en: 'Serpentes (Snake)', zh: '蛇亚目' },
      accent: '#b45309',
    },
    closeMrca: {
      clade: { en: 'Anguimorpha', zh: '蛇蜥形类 (Anguimorpha)' },
      mya: 100,
    },
    farMrca: {
      clade: { en: 'Toxicofera', zh: '有毒类 (Toxicofera)' },
      mya: 160,
    },
    fact: {
      en: 'Leglessness evolved independently more than 25 times in lizards! Unlike snakes, slow worms still have blinking eyelids and external ear openings — and are close cousins of monitor lizards.',
      zh: '蜥蜴在演化中独立丢失四肢超过 25 次！脆蛇蜥虽然没腿，但会眨眼、有外耳孔，和科莫多巨蜥才是近亲。',
    },
    seoQuestion: {
      en: 'Is a slow worm more closely related to a Komodo dragon or a cobra?',
      zh: '脆蛇蜥与科莫多巨蜥更亲近，还是与眼镜王蛇更亲近？',
    },
  },
  {
    id: 'hedgehog-bat-vs-porcupine',
    category: 'mammals',
    difficulty: 'hard',
    target: {
      name: { en: 'European Hedgehog', zh: '欧洲刺猬' },
      scientific: 'Erinaceus europaeus',
      emoji: '🦔',
      group: { en: 'Eulipotyphla', zh: '真盲缺目' },
      accent: '#78716c',
    },
    closer: {
      name: { en: 'Fruit Bat', zh: '狐蝠（蝙蝠）' },
      scientific: 'Pteropus vampyrus',
      emoji: '🦇',
      group: { en: 'Chiroptera', zh: '翼手目' },
      accent: '#4c1d95',
    },
    farther: {
      name: { en: 'Crested Porcupine', zh: '冠豪猪' },
      scientific: 'Hystrix cristata',
      emoji: '🐀',
      group: { en: 'Rodentia', zh: '啮齿目' },
      accent: '#92400e',
    },
    closeMrca: {
      clade: { en: 'Laurasiatheria', zh: '劳亚兽总目' },
      mya: 80,
    },
    farMrca: {
      clade: { en: 'Boreoeutheria', zh: '北方真兽高目' },
      mya: 94,
    },
    fact: {
      en: 'Spines evolved separately in hedgehogs and porcupines. Hedgehogs are laurasiatherians allied with shrews, moles, and bats, whereas porcupines are large rodents.',
      zh: '刺猬和豪猪身上的刺是各自独立演化出来的：刺猬与蝙蝠、鼩鼱同属劳亚兽总目，而豪猪是大型啮齿动物。',
    },
    seoQuestion: {
      en: 'Are hedgehogs more closely related to bats or porcupines?',
      zh: '刺猬与蝙蝠更亲近，还是与豪猪更亲近？',
    },
  },
  {
    id: 'koala-wombat-vs-bear',
    category: 'mammals',
    difficulty: 'easy',
    target: {
      name: { en: 'Koala', zh: '考拉（树袋熊）' },
      scientific: 'Phascolarctos cinereus',
      emoji: '🐨',
      group: { en: 'Diprotodontia Marsupial', zh: '双门齿目有袋类' },
      accent: '#64748b',
    },
    closer: {
      name: { en: 'Common Wombat', zh: '袋熊' },
      scientific: 'Vombatus ursinus',
      emoji: '🦫',
      group: { en: 'Vombatidae Marsupial', zh: '袋熊科有袋类' },
      accent: '#78350f',
    },
    farther: {
      name: { en: 'Grizzly Bear', zh: '灰熊' },
      scientific: 'Ursus arctos',
      emoji: '🐻',
      group: { en: 'Ursidae Placental', zh: '熊科胎盘哺乳动物' },
      accent: '#92400e',
    },
    closeMrca: {
      clade: { en: 'Vombatiformes', zh: '袋熊亚目 (Vombatiformes)' },
      mya: 35,
    },
    farMrca: {
      clade: { en: 'Theria', zh: '兽亚纲' },
      mya: 160,
    },
    fact: {
      en: 'Koalas are not bears! Their closest living relatives are wombats — both share backward-facing pouches and belong to the Australian marsupial suborder Vombatiformes.',
      zh: '考拉虽然常被称为“树袋熊”，但和熊科相隔 1.6 亿年；它真正的近亲是同样拥有朝后育儿袋的袋熊！',
    },
    seoQuestion: {
      en: 'Are koalas more closely related to wombats or bears?',
      zh: '考拉与袋熊更亲近，还是与灰熊更亲近？',
    },
  },
  {
    id: 'camel-dolphin-vs-horse',
    category: 'mammals',
    difficulty: 'medium',
    target: {
      name: { en: 'Bactrian Camel', zh: '双峰骆驼' },
      scientific: 'Camelus bactrianus',
      emoji: '🐫',
      group: { en: 'Artiodactyla', zh: '偶蹄目' },
      accent: '#d97706',
    },
    closer: {
      name: { en: 'Bottlenose Dolphin', zh: '宽吻海豚' },
      scientific: 'Tursiops truncatus',
      emoji: '🐬',
      group: { en: 'Cetacea (Artiodactyla)', zh: '鲸偶蹄目' },
      accent: '#0284c7',
    },
    farther: {
      name: { en: 'Arabian Horse', zh: '阿拉伯马' },
      scientific: 'Equus ferus caballus',
      emoji: '🐎',
      group: { en: 'Perissodactyla', zh: '奇蹄目' },
      accent: '#7c2d12',
    },
    closeMrca: {
      clade: { en: 'Artiodactyla', zh: '鲸偶蹄目' },
      mya: 64,
    },
    farMrca: {
      clade: { en: 'Ferungulata', zh: '猛兽有蹄类' },
      mya: 78,
    },
    fact: {
      en: 'Desert camels and ocean dolphins are both even-toed ungulates (Artiodactyla), while horses sit on the odd-toed Perissodactyla branch!',
      zh: '沙漠里的骆驼和大海里的海豚同属鲸偶蹄目，而同样擅长奔跑的马却属于奇蹄目！',
    },
    seoQuestion: {
      en: 'Are camels more closely related to dolphins or horses?',
      zh: '骆驼与海豚更亲近，还是与马更亲近？',
    },
  },
];

export function getPuzzlesByCategory(category: CategoryId): EvoPuzzle[] {
  return PUZZLES.filter((p) => p.category === category);
}

export function getPuzzleById(id: string): EvoPuzzle | undefined {
  return PUZZLES.find((p) => p.id === id);
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
