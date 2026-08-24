export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'smartphones' | 'audio' | 'watches' | 'tvs' | 'appliances' | 'gadgets';
  image: string;
  rating: number;
  reviewsCount: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  tag?: string;
  tagColor?: string;
  specs: string[];
  colors?: { name: string; hex: string }[];
  storageVariants?: string[];
  emiStarting?: number;
  inStock: boolean;
  isMegaSale?: boolean;
  isBestSeller?: boolean;
  isNewTrending?: boolean;
  isDealOfDay?: boolean;
  inclusiveOfferText?: string;
  description?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  popularModel: string;
  badge?: string;
}

export interface BannerSlide {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  highlight: string;
  subtitle: string;
  offerText: string;
  priceText: string;
  ctaText: string;
  image: string;
  bgGradient: string;
  theme: 'dark' | 'light';
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  count: string;
  image: string;
  popularBrands: string[];
}

export interface NonPhoneCategory {
  id: string;
  name: string;
  iconName: string;
  badge?: string;
  image: string;
}

export const HERO_BANNERS: BannerSlide[] = [
  {
    id: 'banner-1',
    badge: 'FLAGSHIP LAUNCH 2024',
    badgeColor: 'bg-amber-400 text-slate-950',
    title: 'All-New iPhone 17 Series',
    highlight: 'A19 Pro Chip • Titanium Frame',
    subtitle: 'Next-Generation Camera with 5x Optical Zoom & Dynamic Island Pro',
    offerText: 'Flat ₹5,000 Instant Discount with HDFC & ICICI Cards + No Cost EMI from ₹3,499/mo',
    priceText: 'Starting from ₹79,900',
    ctaText: 'Pre-Order Now',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
    bgGradient: 'from-slate-900 via-indigo-950 to-slate-900',
    theme: 'dark'
  },
  {
    id: 'banner-2',
    badge: 'SHREE BALAJI GRAND FESTIVAL SALE',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Mega Tech Fest',
    highlight: 'Up to 50% Off on Top Smartphones',
    subtitle: 'Extra ₹10,000 Exchange Bonus + Free 1-Year Screen Protection Plan',
    offerText: 'Guaranteed 2-Hour Delivery in Bengaluru, Chennai, Hyderabad & 15+ Cities',
    priceText: 'Deals from ₹8,999',
    ctaText: 'Explore Festival Deals',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80',
    bgGradient: 'from-amber-950 via-orange-900 to-slate-900',
    theme: 'dark'
  },
  {
    id: 'banner-3',
    badge: 'GALAXY AI DAYS',
    badgeColor: 'bg-cyan-400 text-slate-950',
    title: 'Samsung Galaxy S25 Ultra',
    highlight: 'Galaxy AI 2.0 • 200MP Quad Tele',
    subtitle: 'Experience Live Call Translate, Circle to Search & Armor Aluminum chassis',
    offerText: 'Free Galaxy Watch6 + 24 Months No Cost EMI starting at ₹4,999/mo',
    priceText: 'From ₹1,19,999',
    ctaText: 'Buy with AI Perks',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
    bgGradient: 'from-slate-900 via-blue-950 to-slate-900',
    theme: 'dark'
  },
  {
    id: 'banner-4',
    badge: 'NEVER SETTLE',
    badgeColor: 'bg-red-500 text-white',
    title: 'OnePlus 13 & Nord Series',
    highlight: '100W SUPERVOOC • Snapdragon 8 Elite',
    subtitle: 'Sony LYT-808 Camera & 120Hz ProXDR 2K Display',
    offerText: 'Instant ₹3,000 Bank Off + Free OnePlus Bullets Wireless Z3',
    priceText: 'Starting from ₹29,999',
    ctaText: 'Grab OnePlus Deal',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
    bgGradient: 'from-slate-900 via-red-950 to-slate-900',
    theme: 'dark'
  }
];

export const TOP_CATEGORIES: CategoryItem[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    iconName: 'Smartphone',
    count: '350+ Models',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80',
    popularBrands: ['Apple', 'Samsung', 'OnePlus', 'Vivo']
  },
  {
    id: 'watches',
    name: 'Smart Watches',
    iconName: 'Watch',
    count: '120+ Models',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80',
    popularBrands: ['Apple', 'Samsung', 'Noise', 'Fire-Boltt']
  },
  {
    id: 'tvs',
    name: 'Smart TVs',
    iconName: 'Tv',
    count: '80+ Models',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=300&q=80',
    popularBrands: ['Sony', 'Samsung', 'LG', 'Xiaomi']
  },
  {
    id: 'audio',
    name: 'Audio Store',
    iconName: 'Headphones',
    count: '200+ Models',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
    popularBrands: ['Boat', 'Sony', 'JBL', 'Bose']
  },
  {
    id: 'appliances',
    name: 'Home Appliances',
    iconName: 'Home',
    count: '150+ Models',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=300&q=80',
    popularBrands: ['Dyson', 'LG', 'Samsung', 'Philips']
  }
];

export const BRANDS_LIST: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=300&q=80',
    tagline: 'iPhone, Watch, AirPods & Mac',
    popularModel: 'iPhone 17 Pro Max',
    badge: 'Authorized Reseller'
  },
  {
    id: 'samsung',
    name: 'Samsung',
    logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=300&q=80',
    tagline: 'Galaxy AI & Foldables',
    popularModel: 'Galaxy S25 Ultra 5G',
    badge: 'Diamond Partner'
  },
  {
    id: 'google-pixel',
    name: 'Google Pixel',
    logo: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80',
    tagline: 'Magic AI Photography',
    popularModel: 'Pixel 10 Pro & 10a',
    badge: 'Official Dealer'
  },
  {
    id: 'nothing',
    name: 'Nothing',
    logo: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=300&q=80',
    tagline: 'Glyph Design & Nothing OS',
    popularModel: 'Phone (2a) Plus',
    badge: 'Trending'
  },
  {
    id: 'oppo',
    name: 'Oppo',
    logo: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
    tagline: 'Portrait Expert & SuperVOOC',
    popularModel: 'Reno 12 Pro 5G',
    badge: 'Top Camera'
  },
  {
    id: 'vivo',
    name: 'Vivo',
    logo: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=300&q=80',
    tagline: 'ZEISS Co-engineered Camera',
    popularModel: 'Vivo V40 Pro & Y21',
    badge: 'Best Seller'
  },
  {
    id: 'realme',
    name: 'Realme',
    logo: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80',
    tagline: 'Next-Gen Power & Speed',
    popularModel: 'GT 6T 5G',
    badge: 'Value Flagship'
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    logo: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=300&q=80',
    tagline: 'HyperOS & Leica Imaging',
    popularModel: 'Redmi Note 17 Pro+',
    badge: 'Mega Value'
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    logo: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=300&q=80',
    tagline: 'Fast & Smooth Flagship',
    popularModel: 'OnePlus Nord 4 & 13',
    badge: 'Customer Choice'
  },
  {
    id: 'poco',
    name: 'POCO',
    logo: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
    tagline: 'Extreme Gaming Beast',
    popularModel: 'POCO X7 Pro 5G',
    badge: 'High Performance'
  }
];

export const NON_PHONE_CATEGORIES: NonPhoneCategory[] = [
  {
    id: 'vacuum',
    name: 'Vacuum Cleaners',
    iconName: 'Sparkles',
    badge: 'Smart Robot & Cordless',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'dashcams',
    name: 'Dashcams',
    iconName: 'Camera',
    badge: '4K Ultra HD & Night Vision',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    iconName: 'Waves',
    badge: 'AI DirectDrive & Steam',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'air-conditioners',
    name: 'Air Conditioners',
    iconName: 'Wind',
    badge: 'Inverter 5-Star Split AC',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'audio-store',
    name: 'Audio Store',
    iconName: 'Volume2',
    badge: 'Soundbars & TWS Buds',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'massagers',
    name: 'Massagers',
    iconName: 'Activity',
    badge: 'Gun & Neck Relief',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'smart-gadgets',
    name: 'Smart Gadgets',
    iconName: 'Cpu',
    badge: 'Smart Plugs & Sensors',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80'
  }
];

export const PRODUCTS: Product[] = [
  // 1. MEGA SALE PRODUCTS (Section 3)
  {
    id: 'ms-1',
    name: 'Apple iPhone 17 256GB (Natural Titanium)',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 3420,
    originalPrice: 89900,
    discountedPrice: 74900,
    discountPercentage: 17,
    tag: 'MEGA SALE 17% OFF',
    tagColor: 'bg-orange-500 text-white',
    specs: ['A19 Pro Chip', '48MP Fusion Pro Camera', '6.3" Super Retina XDR', '256GB Storage'],
    colors: [
      { name: 'Natural Titanium', hex: '#BEB4A6' },
      { name: 'Black Titanium', hex: '#2A2C2E' },
      { name: 'Desert Gold', hex: '#D2B99B' },
      { name: 'White Titanium', hex: '#F0F0EE' }
    ],
    storageVariants: ['128GB', '256GB', '512GB', '1TB'],
    emiStarting: 3120,
    inStock: true,
    isMegaSale: true,
    description: 'The latest iPhone 17 featuring the revolutionary A19 Pro silicon with unmatched mobile gaming, 48MP Pro camera system with spatial video recording, and aerospace-grade lightweight titanium design.'
  },
  {
    id: 'ms-2',
    name: 'Samsung Galaxy S24 FE 5G (8GB | 256GB)',
    brand: 'Samsung',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 2190,
    originalPrice: 65999,
    discountedPrice: 42999,
    discountPercentage: 35,
    tag: 'FLAT 35% OFF',
    tagColor: 'bg-orange-500 text-white',
    specs: ['Galaxy AI Enabled', '50MP OIS Camera', '6.7" Dynamic AMOLED 2X', '4700mAh Battery'],
    colors: [
      { name: 'Blue', hex: '#638DB6' },
      { name: 'Mint', hex: '#A8D5BA' },
      { name: 'Graphite', hex: '#34383B' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1799,
    inStock: true,
    isMegaSale: true,
    description: 'Experience flagship Galaxy AI capabilities, stunning low-light photography with Nightography, and seamless multitasking on the 120Hz Dynamic AMOLED display.'
  },
  {
    id: 'ms-3',
    name: 'OnePlus 12R 5G (16GB RAM | 256GB Iron Gray)',
    brand: 'OnePlus',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 4510,
    originalPrice: 45999,
    discountedPrice: 35999,
    discountPercentage: 22,
    tag: 'FESTIVAL SPECIAL',
    tagColor: 'bg-amber-600 text-white',
    specs: ['Snapdragon 8 Gen 2', '100W SUPERVOOC Charge', '5500mAh Massive Battery', '16GB LPDDR5X RAM'],
    colors: [
      { name: 'Iron Gray', hex: '#4A4E53' },
      { name: 'Cool Blue', hex: '#87CEEB' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1499,
    inStock: true,
    isMegaSale: true,
    description: 'Uncompromising speed powered by Snapdragon 8 Gen 2, Cryo-Velocity cooling chamber, and revolutionary 100W charging reaching 100% in just 26 minutes.'
  },
  {
    id: 'ms-4',
    name: 'Realme GT 6T 5G (Fluid Silver | 256GB)',
    brand: 'Realme',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 1840,
    originalPrice: 35999,
    discountedPrice: 24999,
    discountPercentage: 31,
    tag: 'HOT DEAL 31% OFF',
    tagColor: 'bg-orange-500 text-white',
    specs: ['Snapdragon 7+ Gen 3', '6000nit Ultra Bright Display', '120W SUPERVOOC', '50MP Sony LYT-600'],
    colors: [
      { name: 'Fluid Silver', hex: '#DCDFE2' },
      { name: 'Razor Green', hex: '#2E5339' }
    ],
    storageVariants: ['128GB', '256GB', '512GB'],
    emiStarting: 1040,
    inStock: true,
    isMegaSale: true,
    description: 'Top-tier performance beast with world-first 6000nit peak brightness LTPO curved AMOLED display and flagship Sony camera with OIS.'
  },
  {
    id: 'ms-5',
    name: 'Nothing Phone (2) (12GB RAM | 256GB Dark Grey)',
    brand: 'Nothing',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 2900,
    originalPrice: 54999,
    discountedPrice: 32999,
    discountPercentage: 40,
    tag: 'FLAT 40% OFF',
    tagColor: 'bg-orange-500 text-white',
    specs: ['Glyph Interface Pro', 'Snapdragon 8+ Gen 1', 'Dual 50MP Sony Sensors', 'Nothing OS 2.5 Clean UI'],
    colors: [
      { name: 'Dark Grey', hex: '#282B2E' },
      { name: 'White', hex: '#F4F4F4' }
    ],
    storageVariants: ['128GB', '256GB', '512GB'],
    emiStarting: 1375,
    inStock: true,
    isMegaSale: true,
    description: 'Iconic transparent industrial design with customizable Glyph LED lighting, fluid Nothing OS with zero bloatware, and dual 50MP cameras.'
  },

  // 2. BEST SELLING PHONES (Section 5 - Dark Theme)
  {
    id: 'bs-1',
    name: 'Google Pixel 10a 5G (Obsidian | 128GB)',
    brand: 'Google Pixel',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 5120,
    originalPrice: 49999,
    discountedPrice: 37999,
    discountPercentage: 24,
    tag: 'BEST SELLER #1',
    tagColor: 'bg-blue-600 text-white',
    specs: ['Google Tensor G4', 'Best-in-Class AI Camera', '7 Years OS Updates', 'Actua OLED 120Hz'],
    colors: [
      { name: 'Obsidian', hex: '#1C1D1F' },
      { name: 'Porcelain', hex: '#EBE9E4' },
      { name: 'Bay Blue', hex: '#95B8D1' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1580,
    inStock: true,
    isBestSeller: true,
    description: 'Powered by Google Tensor G4 with Best Take, Magic Audio Eraser, Gemini Assistant integration, and industry-leading 7 years of full Android OS updates.'
  },
  {
    id: 'bs-2',
    name: 'Vivo Y21 & Vivo V40 Pro 5G (Titanium Grey)',
    brand: 'Vivo',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 3890,
    originalPrice: 42999,
    discountedPrice: 34999,
    discountPercentage: 19,
    tag: 'ZEISS PORTRAIT PRO',
    tagColor: 'bg-indigo-600 text-white',
    specs: ['ZEISS Multifocal Portrait', 'MediaTek Dimensity 9200+', '5500mAh BlueVolt Battery', '80W FlashCharge'],
    colors: [
      { name: 'Titanium Grey', hex: '#4B4D52' },
      { name: 'Lotus Purple', hex: '#9B72AA' }
    ],
    storageVariants: ['256GB', '512GB'],
    emiStarting: 1450,
    inStock: true,
    isBestSeller: true,
    description: 'Co-engineered with ZEISS optics for cinema-grade portrait bokeh, ultra-slim 3D curved body, and massive all-day 5500mAh battery.'
  },
  {
    id: 'bs-3',
    name: 'Samsung Galaxy A57 5G (Awesome Navy | 8GB/256GB)',
    brand: 'Samsung',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 4280,
    originalPrice: 41999,
    discountedPrice: 31999,
    discountPercentage: 24,
    tag: 'POPULAR CHOICE',
    tagColor: 'bg-emerald-600 text-white',
    specs: ['Exynos 1480 4nm', 'IP67 Water & Dust Resistance', '50MP OIS Triple Camera', 'Knox Vault Security'],
    colors: [
      { name: 'Awesome Navy', hex: '#1C2938' },
      { name: 'Awesome Iceblue', hex: '#D1E8F2' },
      { name: 'Awesome Lilac', hex: '#D8C5E6' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1330,
    inStock: true,
    isBestSeller: true,
    description: 'Premium metal frame with Corning Gorilla Glass Victus+, 4 generations of Android upgrades, and military-grade Samsung Knox Vault data protection.'
  },
  {
    id: 'bs-4',
    name: 'OnePlus Nord CE4 5G (8GB RAM | 128GB Celadon Marble)',
    brand: 'OnePlus',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 6890,
    originalPrice: 27999,
    discountedPrice: 21999,
    discountPercentage: 21,
    tag: 'BEST VALUE 5G',
    tagColor: 'bg-red-600 text-white',
    specs: ['Snapdragon 7 Gen 3', '100W SUPERVOOC Flash', '5500mAh 4-Year Battery', 'Sony LYT-600 OIS'],
    colors: [
      { name: 'Celadon Marble', hex: '#C2DBD2' },
      { name: 'Dark Chrome', hex: '#2C3034' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 915,
    inStock: true,
    isBestSeller: true,
    description: 'The reigning king of the midrange with eye-catching celadon marble finish, 100W fast charging (1-100% in 29 mins), and silky smooth OxygenOS 14.'
  },

  // 3. NEWLY LAUNCHED & TRENDING (Section 7)
  {
    id: 'nl-1',
    name: 'Apple AirPods Pro (2nd Gen with USB-C MagSafe)',
    brand: 'Apple',
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 8900,
    originalPrice: 24900,
    discountedPrice: 19990,
    discountPercentage: 20,
    tag: 'NEW LAUNCH',
    tagColor: 'bg-purple-600 text-white',
    specs: ['H2 Headphone Chip', '2x Active Noise Cancellation', 'Adaptive Audio & Transparency', 'Up to 30 Hours Battery'],
    emiStarting: 830,
    inStock: true,
    isNewTrending: true,
    description: 'Up to 2x more Active Noise Cancellation, Adaptive Audio that automatically tailors noise control to your environment, and personalized Spatial Audio.'
  },
  {
    id: 'nl-2',
    name: 'Apple AirTag 4-Pack Precision Finding Smart Tags',
    brand: 'Apple',
    category: 'gadgets',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 3120,
    originalPrice: 11900,
    discountedPrice: 9490,
    discountPercentage: 20,
    tag: 'TRENDING GADGET',
    tagColor: 'bg-emerald-600 text-white',
    specs: ['Ultra Wideband U1 Chip', 'Precision Finding with iPhone', 'IP67 Water Resistant', '1-Year Replaceable Battery'],
    emiStarting: 395,
    inStock: true,
    isNewTrending: true,
    description: 'Keep track of keys, wallet, luggage, backpack, and more with the Find My app and Ultra Wideband Precision Finding technology.'
  },
  {
    id: 'nl-3',
    name: 'TurboBlade Mini Handheld High-RPM Rechargeable Fan',
    brand: 'Balaji Lifestyle',
    category: 'gadgets',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 1450,
    originalPrice: 2999,
    discountedPrice: 1299,
    discountPercentage: 57,
    tag: 'VIRAL SUMMER ESSENTIAL',
    tagColor: 'bg-amber-600 text-white',
    specs: ['100-Speed Stepless Turbine', '4000mAh Battery (15h Runtime)', 'LED Digital Speed Display', 'Type-C Fast Charge'],
    emiStarting: 110,
    inStock: true,
    isNewTrending: true,
    description: 'Pocket-sized turbine fan providing hurricane-level personal cooling on the go with 100 micro-adjustable speeds and ultra-quiet brushless motor.'
  },
  {
    id: 'nl-4',
    name: 'Ray-Ban Meta Smart Glasses (Wayfarer Shiny Black)',
    brand: 'Ray-Ban',
    category: 'gadgets',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 920,
    originalPrice: 34990,
    discountedPrice: 29990,
    discountPercentage: 14,
    tag: 'AI POWERED',
    tagColor: 'bg-blue-600 text-white',
    specs: ['12MP Ultra-Wide Camera', 'Open-Ear Spatial Audio', 'Meta AI Voice Assistant', 'Live Stream to IG & FB'],
    emiStarting: 1250,
    inStock: true,
    isNewTrending: true,
    description: 'Capture hands-free 1080p POV photos and videos, listen to crystal clear music with custom directional speakers, and talk to Meta AI on the fly.'
  },
  {
    id: 'nl-5',
    name: 'boAt Airdopes 800 (Dolby Audio & 50H Playback)',
    brand: 'Boat',
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    reviewsCount: 12400,
    originalPrice: 6990,
    discountedPrice: 1999,
    discountPercentage: 71,
    tag: '71% OFF HUGE DEAL',
    tagColor: 'bg-red-600 text-white',
    specs: ['Powered by Dolby Audio', '4-Mic ENx AI Calling', '50ms Beast Low Latency', 'ASAP Fast Charge (5min=100min)'],
    emiStarting: 165,
    inStock: true,
    isNewTrending: true,
    description: 'Immerse in cinema-grade sound engineered with Dolby Audio, crisp AI background noise cancellation on calls, and multi-device fast pairing.'
  },

  // 4. DEAL OF THE DAY (Section 8 - Dark Theme Flagship Deals)
  {
    id: 'dod-1',
    name: 'Redmi Note 17 Pro+ 5G (Fusion Midnight | 12GB+512GB)',
    brand: 'Xiaomi',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 8430,
    originalPrice: 42999,
    discountedPrice: 28999,
    discountPercentage: 33,
    tag: 'DEAL OF THE DAY • ENDS MIDNIGHT',
    tagColor: 'bg-red-500 text-white',
    specs: [
      '200MP OIS Samsung HP3 Sensor',
      '120W HyperCharge (0-100% in 19 mins)',
      '1.5K 120Hz Curved AMOLED 3D Display',
      'MediaTek Dimensity 7200 Ultra 4nm'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#1E1E1E' },
      { name: 'Aurora Purple', hex: '#6D597A' },
      { name: 'Ocean Teal', hex: '#355070' }
    ],
    storageVariants: ['256GB', '512GB'],
    emiStarting: 1208,
    inStock: true,
    isDealOfDay: true,
    inclusiveOfferText: 'Inclusive of ₹3,000 SBI Card Cashback + ₹2,000 Exchange Bonus',
    description: 'Flagship-grade photography with the massive 200MP camera sensor, blazing 120W HyperCharge charging brick in-box, and IP68 water & dust rating.'
  },
  {
    id: 'dod-2',
    name: 'Apple iPhone 17 (256GB Blue Ultramarine)',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 6520,
    originalPrice: 89900,
    discountedPrice: 72900,
    discountPercentage: 19,
    tag: 'FLASH DEAL • 5 UNITS LEFT',
    tagColor: 'bg-amber-500 text-slate-950',
    specs: [
      'Apple A19 Bionic 3nm Silicon',
      'Camera Control Button & Action Button',
      'Dynamic Island & Always-On ProMotion',
      'All-Day 32 Hours Video Playback'
    ],
    colors: [
      { name: 'Ultramarine', hex: '#36558F' },
      { name: 'Teal', hex: '#73956F' },
      { name: 'Pink', hex: '#E29578' },
      { name: 'Black', hex: '#222222' }
    ],
    storageVariants: ['128GB', '256GB', '512GB'],
    emiStarting: 3037,
    inStock: true,
    isDealOfDay: true,
    inclusiveOfferText: 'Inclusive of ₹6,000 Instant Bank Discount + ₹5,000 Trade-In Bonus',
    description: 'The pinnacle of smartphone innovation featuring the dedicated Camera Control touch surface, vibrant color-infused back glass, and breakthrough Apple Intelligence.'
  },
  {
    id: 'dod-3',
    name: 'Nothing Phone (2a) Plus (12GB RAM | 256GB Metallic Black)',
    brand: 'Nothing',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 4120,
    originalPrice: 33999,
    discountedPrice: 23999,
    discountPercentage: 29,
    tag: 'EXCLUSIVE RETAIL DROP',
    tagColor: 'bg-cyan-500 text-slate-950',
    specs: [
      'Dimensity 7350 Pro 5G Exclusive',
      '50MP Selfie + Dual 50MP Main OIS',
      'Glyph Light Interface 2.0',
      '5000mAh Battery + 50W Fast Charge'
    ],
    colors: [
      { name: 'Metallic Black', hex: '#1C1C1E' },
      { name: 'Metallic Grey', hex: '#5A5B60' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 999,
    inStock: true,
    isDealOfDay: true,
    inclusiveOfferText: 'Inclusive of ₹2,500 HDFC Instant Card Discount & Free Screen Guard',
    description: 'Upgraded Dimensity 7350 Pro gaming engine, dual 50MP 4K cameras front and back, and distinctive metallic aesthetic with glowing notification glyphs.'
  }
];

export const CITIES_LIST = [
  { city: 'Bengaluru', pincode: '560001', state: 'Karnataka', deliveryTime: '2-Hour Delivery' },
  { city: 'Chennai', pincode: '600001', state: 'Tamil Nadu', deliveryTime: '2-Hour Delivery' },
  { city: 'Hyderabad', pincode: '500001', state: 'Telangana', deliveryTime: '2-Hour Delivery' },
  { city: 'Coimbatore', pincode: '641001', state: 'Tamil Nadu', deliveryTime: 'Same Day' },
  { city: 'Kochi', pincode: '682001', state: 'Kerala', deliveryTime: 'Same Day' },
  { city: 'Mumbai', pincode: '400001', state: 'Maharashtra', deliveryTime: '2-Hour Delivery' },
  { city: 'Delhi NCR', pincode: '110001', state: 'Delhi', deliveryTime: '2-Hour Delivery' },
  { city: 'Pune', pincode: '411001', state: 'Maharashtra', deliveryTime: 'Same Day' },
  { city: 'Madurai', pincode: '625001', state: 'Tamil Nadu', deliveryTime: 'Same Day' },
  { city: 'Visakhapatnam', pincode: '530001', state: 'Andhra Pradesh', deliveryTime: 'Same Day' }
];

export const TRUST_PROMISES = [
  {
    title: '100% Genuine Products',
    desc: 'Authorized retailer warranty on all devices',
    icon: 'ShieldCheck'
  },
  {
    title: '2-Hour Express Delivery',
    desc: 'From our 250+ nearest retail hub stores',
    icon: 'Zap'
  },
  {
    title: '7-Day Easy Replacement',
    desc: 'Hassle-free instant in-store & door exchange',
    icon: 'RotateCcw'
  },
  {
    title: 'Zero Cost EMI Plans',
    desc: 'No cost EMI across 20+ leading banks & NBFCs',
    icon: 'CreditCard'
  }
];
