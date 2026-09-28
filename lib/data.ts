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
  // Refurbished & 2nd Hand Phone Specialization Attributes
  isRefurbished?: boolean;
  conditionGrade?: 'Grade A+ Pristine' | 'Grade A Superb' | 'Grade B+ Good';
  batteryHealth?: string;
  warrantyMonths?: number;
  qualityCheckPoints?: number;
  isIndianBrand?: boolean;
  savingsAmount?: number;
  gradeBadgeColor?: string;
  originalBoxIncluded?: boolean;
  chargerIncluded?: boolean;
}

export interface PopularRefurbishedBrand {
  id: string;
  name: string;
  tagline: string;
  popularModels: string[];
  refurbishedCount: number;
  badge: string;
  primaryColor: string;
  accentColor: string;
  logoLetter: string;
  marketSpecialty: string;
  headquarters?: string;
  state?: string;
  founded?: string;
  heritageText?: string;
}

export type IndianMobileBrand = PopularRefurbishedBrand;

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
    id: 'banner-refurb-hub',
    badge: 'INDIA’S #1 CERTIFIED 2ND HAND & REFURBISHED HUB',
    badgeColor: 'bg-emerald-400 text-slate-950 font-black',
    title: 'Certified Pre-Owned & Refurbished',
    highlight: 'Up to 70% Off • 52-Point Checked • 1-Year Warranty',
    subtitle: 'Featuring India’s Largest Selection of Indian Mobile Brands (Lava, Micromax, Karbonn & more) alongside Flagship iPhones & Galaxies',
    offerText: 'Includes Free Fast Charger + 7-Day Instant Replacement Guarantee + Spot Old Phone Buyback',
    priceText: 'Certified Deals from ₹3,699',
    ctaText: 'Explore Refurbished Phones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
    bgGradient: 'from-slate-950 via-emerald-950 to-slate-900',
    theme: 'dark'
  },
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
    badge: 'SHRI BALAJI GRAND FESTIVAL SALE',
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
    id: 'refurbished',
    name: '2nd Hand / Refurbished',
    iconName: 'ShieldCheck',
    count: '150+ Certified',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80',
    popularBrands: ['Lava', 'Micromax', 'Apple', 'Samsung', 'Karbonn']
  },
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

export const POPULAR_REFURBISHED_BRANDS: PopularRefurbishedBrand[] = [
  {
    id: 'apple',
    name: 'Apple',
    tagline: 'iOS • Retina OLED & Bionic Silicon',
    popularModels: ['iPhone 15 Pro', 'iPhone 14', 'iPhone 13', 'iPhone 12'],
    refurbishedCount: 48,
    badge: '100% Genuine Tested Parts',
    primaryColor: '#000000',
    accentColor: '#F5F5F7',
    logoLetter: 'APPLE',
    marketSpecialty: 'India’s #1 Most In-Demand Pre-Owned Flagship'
  },
  {
    id: 'samsung',
    name: 'Samsung',
    tagline: 'Galaxy AI • 100x Zoom & Dynamic AMOLED',
    popularModels: ['Galaxy S23 Ultra', 'Galaxy S22 5G', 'Galaxy S21 FE', 'Galaxy A54 5G'],
    refurbishedCount: 56,
    badge: 'Galaxy Certified Pre-Owned',
    primaryColor: '#034EA2',
    accentColor: '#EFF6FF',
    logoLetter: 'SAMSUNG',
    marketSpecialty: 'Leading Android Flagships & S-Pen Innovators'
  },
  {
    id: 'motorola',
    name: 'Motorola',
    tagline: 'Hello Moto • Clean Android & 144Hz pOLED',
    popularModels: ['Edge 50 Pro 5G', 'Moto G84 5G', 'Edge 40 Neo', 'Razr 40'],
    refurbishedCount: 34,
    badge: 'Pantone & TurboPower Certified',
    primaryColor: '#001433',
    accentColor: '#E6F0FA',
    logoLetter: 'MOTO',
    marketSpecialty: 'Legendary Durability & Clean Stock Android'
  },
  {
    id: 'vivo',
    name: 'Vivo',
    tagline: 'ZEISS Optics • Aura Light Portrait & V-Chip',
    popularModels: ['Vivo V30 Pro 5G', 'Vivo X90 Pro', 'Vivo V29 5G', 'Vivo Y200'],
    refurbishedCount: 42,
    badge: 'ZEISS Portrait Certified',
    primaryColor: '#005AFF',
    accentColor: '#EEF4FF',
    logoLetter: 'VIVO',
    marketSpecialty: 'India’s Favorite Studio Portrait Flagships'
  },
  {
    id: 'nothing',
    name: 'Nothing',
    tagline: 'Glyph Interface • Transparent Nothing OS',
    popularModels: ['Phone (2)', 'Phone (2a)', 'Phone (1)'],
    refurbishedCount: 26,
    badge: 'Glyph LED Tested',
    primaryColor: '#171717',
    accentColor: '#F4F4F5',
    logoLetter: 'NOTHING',
    marketSpecialty: 'Unique Transparent Aesthetic with Glyph LED Lights'
  },
  {
    id: 'oppo',
    name: 'Oppo',
    tagline: 'ColorOS • 80W SuperVOOC & Portrait Expert',
    popularModels: ['Reno 11 Pro 5G', 'Find X5 Pro', 'Reno 10 5G', 'F25 Pro 5G'],
    refurbishedCount: 38,
    badge: 'SuperVOOC Battery Certified',
    primaryColor: '#008060',
    accentColor: '#ECFDF5',
    logoLetter: 'OPPO',
    marketSpecialty: 'Ultra-Fast Charging & Slim Curved Ergonomics'
  },
  {
    id: 'realme',
    name: 'Realme',
    tagline: 'Dare to Leap • Sony Periscope & 120W Charge',
    popularModels: ['Realme GT 6T 5G', '12 Pro+ 5G', '11 Pro 5G', 'Narzo 70 Pro'],
    refurbishedCount: 45,
    badge: 'High Performance Value',
    primaryColor: '#EAB308',
    accentColor: '#FEFCE8',
    logoLetter: 'REALME',
    marketSpecialty: 'Top Speed & Luxury Vegan Leather Finishes'
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    tagline: 'Never Settle • Hasselblad Optics & OxygenOS',
    popularModels: ['OnePlus 11 5G', 'OnePlus 10 Pro', 'Nord 3 5G', 'Nord CE 4'],
    refurbishedCount: 41,
    badge: 'Fast & Smooth OxygenOS',
    primaryColor: '#DC2626',
    accentColor: '#FEF2F2',
    logoLetter: '1+',
    marketSpecialty: 'Flagship Speed with Alert Slider & 100W Charging'
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    tagline: 'Leica Optics • HyperOS & 200MP Sensors',
    popularModels: ['Xiaomi 13 Pro 5G', 'Redmi Note 13 Pro+', 'Redmi Note 12 Pro'],
    refurbishedCount: 49,
    badge: 'Leica & HyperOS Tested',
    primaryColor: '#EA580C',
    accentColor: '#FFF7ED',
    logoLetter: 'MI',
    marketSpecialty: 'India’s Benchmark Value & Leica Camera Sensors'
  },
  {
    id: 'google-pixel',
    name: 'Google Pixel',
    tagline: 'Google AI • Tensor Chip & Magic Eraser',
    popularModels: ['Pixel 8 Pro', 'Pixel 7 Pro 5G', 'Pixel 7a', 'Pixel 6a'],
    refurbishedCount: 29,
    badge: 'Pure Google AI Camera',
    primaryColor: '#2563EB',
    accentColor: '#EFF6FF',
    logoLetter: 'PIXEL',
    marketSpecialty: 'Industry-Leading Astrophotography & Pure AI'
  },
  {
    id: 'iqoo',
    name: 'iQOO',
    tagline: 'Monster Gaming • Snapdragon 8 Gen & 120W',
    popularModels: ['iQOO Neo 9 Pro 5G', 'iQOO 11 5G', 'iQOO Z9 5G'],
    refurbishedCount: 22,
    badge: 'Extreme Gaming Tested',
    primaryColor: '#D97706',
    accentColor: '#FFFBEB',
    logoLetter: 'iQOO',
    marketSpecialty: 'Highest AnTuTu Gaming Scores & 120W FlashCharge'
  },
  {
    id: 'poco',
    name: 'POCO',
    tagline: 'Speed Evolved • Dimensity 8300 Ultra',
    popularModels: ['POCO X6 Pro 5G', 'POCO F5 5G', 'POCO M6 Pro 5G'],
    refurbishedCount: 25,
    badge: 'Flagship Killer Gaming',
    primaryColor: '#CA8A04',
    accentColor: '#FEFCE8',
    logoLetter: 'POCO',
    marketSpecialty: 'Unrivaled Price-to-Performance Ratio for Gamers'
  }
];

// Backward-compatible alias
export const INDIAN_MOBILE_BRANDS: PopularRefurbishedBrand[] = POPULAR_REFURBISHED_BRANDS;

export const REFURBISHED_INSPECTION_POINTS = [
  { id: 'screen', title: 'Display & Touch Digitizer', desc: 'Zero dead pixels, OEM multi-touch responsiveness & scratchless glass inspection', icon: 'Smartphone' },
  { id: 'battery', title: 'Battery Health & Cycles', desc: 'Guaranteed 90%+ peak capacity with original charging circuit verification', icon: 'BatteryCharging' },
  { id: 'camera', title: 'Sensors & OIS Stabilization', desc: 'Laser autofocus, ultra-wide & telephoto lenses tested for pristine image quality', icon: 'Camera' },
  { id: 'biometrics', title: 'Face ID & Fingerprint Scanner', desc: 'Instant biometric recognition, secure enclave validation, and sensor hygiene', icon: 'Fingerprint' },
  { id: 'network', title: '5G/4G Bands & Wi-Fi 6', desc: 'Certified calling and ultra-fast data on Airtel, Jio, and Vodafone-Idea networks', icon: 'Wifi' },
  { id: 'audio', title: 'Stereo Speakers & Mics', desc: 'Acoustic frequency response testing on dual stereo speakers and noise cancellation', icon: 'Volume2' },
  { id: 'ports', title: 'Charging Port & Tactile Keys', desc: 'Pristine Type-C/Lightning connector, power/volume click response, zero moisture', icon: 'Zap' },
  { id: 'imei', title: 'Govt Police Clean IMEI Check', desc: '100% legally authenticated via CEIR telecom registry with authorized tax invoice', icon: 'ShieldCheck' }
];

export const REFURBISHED_PRODUCTS: Product[] = [
  // --- INDIAN MOBILE BRANDS CERTIFIED REFURBISHED ---
  {
    id: 'refurb-lava-1',
    name: 'Lava Agni 3 5G (8GB | 256GB Heather Glass)',
    brand: 'Lava',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 1840,
    originalPrice: 20999,
    discountedPrice: 13999,
    discountPercentage: 33,
    tag: 'CERTIFIED SUPERB • INDIAN PRIDE',
    tagColor: 'bg-emerald-700 text-white',
    specs: ['MediaTek Dimensity 7300X', 'Dual AMOLED (Front 1.5K + Back 1.74")', '50MP Sony OIS Camera', '66W Fast Charging'],
    colors: [
      { name: 'Heather Glass', hex: '#635D7A' },
      { name: 'Pristine Glass', hex: '#E2E5E9' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 680,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '99% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 7000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Balaji Certified Pre-Owned Lava Agni 3 5G. Flagship dual-display Indian innovation powered by MediaTek Dimensity 7300X, 50MP Sony camera with OIS, and clean bloat-free Android experience.'
  },
  {
    id: 'refurb-lava-2',
    name: 'Lava Agni 2 5G (8GB | 256GB Glass Viridian)',
    brand: 'Lava',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 2450,
    originalPrice: 19999,
    discountedPrice: 11499,
    discountPercentage: 43,
    tag: 'GRADE A+ LIKE NEW',
    tagColor: 'bg-emerald-700 text-white',
    specs: ['3D Curved 120Hz AMOLED', 'Dimensity 7050 6nm', '50MP Quad Matrix Camera', '66W Super Charger'],
    colors: [
      { name: 'Glass Viridian', hex: '#1C3F3B' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 560,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '97% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 8500,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'India’s most celebrated curved AMOLED smartphone. Tested through our 52-point certification with flawless glass backing, snappy Dimensity 7050 processor, and 1-year store warranty.'
  },
  {
    id: 'refurb-lava-3',
    name: 'Lava Blaze Curve 5G (8GB | 128GB Iron Glass)',
    brand: 'Lava',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 1620,
    originalPrice: 17999,
    discountedPrice: 9999,
    discountPercentage: 44,
    tag: 'SUPER VALUE UNDER 10K',
    tagColor: 'bg-blue-600 text-white',
    specs: ['6.67" 120Hz 3D Curved AMOLED', 'Dimensity 7050', '64MP Sony Sensor', 'LPDDR5 RAM + UFS 3.1'],
    colors: [
      { name: 'Iron Glass', hex: '#373A3C' },
      { name: 'Viridian Glass', hex: '#1A4D45' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 490,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 8000,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Unbeatable value under ₹10,000! Premium 3D curved display with 64MP Sony sensor, premium stereo speakers with Dolby Atmos, and complete certified accessories.'
  },
  {
    id: 'refurb-micromax-1',
    name: 'Micromax IN Note 2 (4GB | 64GB Dazzling Oak)',
    brand: 'Micromax',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 2190,
    originalPrice: 14999,
    discountedPrice: 6499,
    discountPercentage: 57,
    tag: 'FLAT 57% OFF • GRADE A',
    tagColor: 'bg-orange-600 text-white',
    specs: ['6.43" FHD+ AMOLED Display', 'Helio G95 Gaming Processor', '48MP AI Quad Camera', '30W Fast Charging'],
    colors: [
      { name: 'Dazzling Oak', hex: '#7A5C43' },
      { name: 'Black', hex: '#1C1C1E' }
    ],
    storageVariants: ['64GB'],
    emiStarting: 320,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '95% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 8500,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Stunning luxury glass back with vibrant FHD+ AMOLED screen and MediaTek Helio G95 gaming silicon. Inspected for clean thermals and tested battery capacity.'
  },
  {
    id: 'refurb-micromax-2',
    name: 'Micromax IN 2c (3GB | 32GB Silver)',
    brand: 'Micromax',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    reviewsCount: 1320,
    originalPrice: 9499,
    discountedPrice: 4499,
    discountPercentage: 53,
    tag: 'BUDGET CHAMPION',
    tagColor: 'bg-slate-700 text-white',
    specs: ['5000mAh Marathon Battery', 'Unisoc T610 Octa-Core', '6.52" HD+ Screen', 'Stock Android Experience'],
    colors: [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Brown', hex: '#5A3E36' }
    ],
    storageVariants: ['32GB'],
    emiStarting: 220,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '98% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 5000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Perfect secondary or parent phone with mammoth 5000mAh battery that delivers 2+ days standby, pure zero-ad Android, and verified original charging module.'
  },
  {
    id: 'refurb-karbonn-1',
    name: 'Karbonn Titanium S9 Plus (3GB | 32GB Midnight Blue)',
    brand: 'Karbonn',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
    rating: 4.4,
    reviewsCount: 890,
    originalPrice: 8999,
    discountedPrice: 3999,
    discountPercentage: 56,
    tag: 'GRADE A+ • ULTRA VALUE',
    tagColor: 'bg-red-600 text-white',
    specs: ['6.1" HD+ Waterdrop Display', 'Triple AI Camera', 'Face Unlock & Fingerprint', '3000mAh Battery'],
    colors: [
      { name: 'Midnight Blue', hex: '#1E293B' }
    ],
    storageVariants: ['32GB'],
    emiStarting: 195,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 5000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Durable and ergonomic Indian smartphone from Karbonn Mobiles. Fully reconditioned with new screen protector and certified 5V fast adapter.'
  },
  {
    id: 'refurb-xolo-1',
    name: 'Xolo ZX (4GB | 64GB Electric Blue)',
    brand: 'Xolo',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    reviewsCount: 970,
    originalPrice: 11499,
    discountedPrice: 4299,
    discountPercentage: 63,
    tag: 'STEAL DEAL 63% OFF',
    tagColor: 'bg-purple-600 text-white',
    specs: ['Helio P22 Octa-Core', '16MP+5MP AI Dual Camera', '6.22" HD+ Notch Screen', 'Dual VoLTE 4G'],
    colors: [
      { name: 'Electric Blue', hex: '#1D4ED8' }
    ],
    storageVariants: ['64GB'],
    emiStarting: 210,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '94% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 7200,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Special edition from Xolo with dual bokeh camera, glossy gradient finish, and full biometric security pass.'
  },
  {
    id: 'refurb-yu-1',
    name: 'YU Yureka Black (4GB | 32GB Chrome Black)',
    brand: 'YU',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 1120,
    originalPrice: 10999,
    discountedPrice: 4799,
    discountPercentage: 56,
    tag: 'COLLECTOR EDITION',
    tagColor: 'bg-amber-600 text-white',
    specs: ['Snapdragon 430 Octa-Core', '4GB RAM Smooth Multi-tasking', 'Premium Metal Unibody', '13MP Sony IMX258'],
    colors: [
      { name: 'Chrome Black', hex: '#171717' }
    ],
    storageVariants: ['32GB'],
    emiStarting: 235,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '93% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 6200,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Iconic all-metal black design by YU Televentures. Equipped with 4GB RAM, snappy front fingerprint sensor, and Sony camera optics.'
  },
  {
    id: 'refurb-jio-1',
    name: 'Jio LYF Earth 2 4G (3GB | 32GB Laser White)',
    brand: 'Jio LYF',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    reviewsCount: 1750,
    originalPrice: 19999,
    discountedPrice: 3899,
    discountPercentage: 80,
    tag: 'MASSIVE 80% SAVING',
    tagColor: 'bg-rose-600 text-white',
    specs: ['Retina Scan & Smart Fingerprint', '13MP Laser AF Front & Back', 'Aluminum Alloy Frame', 'Full Jio 4G VoLTE Support'],
    colors: [
      { name: 'Laser White', hex: '#F8FAFC' },
      { name: 'Midnight Green', hex: '#064E3B' }
    ],
    storageVariants: ['32GB'],
    emiStarting: 190,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '94% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 16100,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Reliance Jio LYF flagship featuring aerospace-grade frame, futuristic Retina eye-unlock, and dual 13MP cameras with laser focus.'
  },
  {
    id: 'refurb-ikall-1',
    name: 'I KALL Z19 Pro 4G (4GB | 64GB Sea Green)',
    brand: 'I KALL',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    rating: 4.4,
    reviewsCount: 780,
    originalPrice: 7999,
    discountedPrice: 3699,
    discountPercentage: 54,
    tag: 'POCKET FRIENDLY 4G',
    tagColor: 'bg-sky-600 text-white',
    specs: ['6.5" HD+ IPS Display', '4000mAh Battery', '13MP Dual Rear Camera', 'Quad Core 4G Processor'],
    colors: [
      { name: 'Sea Green', hex: '#0F766E' }
    ],
    storageVariants: ['64GB'],
    emiStarting: 180,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '98% Battery Health',
    warrantyMonths: 6,
    qualityCheckPoints: 52,
    isIndianBrand: true,
    savingsAmount: 4300,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Top Indian budget smartphone with large 6.5-inch viewing display, strong 4G network reception, and tested battery cell.'
  },

  // --- CERTIFIED PRE-OWNED GLOBAL FLAGSHIPS ---
  {
    id: 'refurb-apple-1',
    name: 'Apple iPhone 15 Pro 128GB (Natural Titanium)',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 4120,
    originalPrice: 134900,
    discountedPrice: 74999,
    discountPercentage: 44,
    tag: 'CERTIFIED GRADE A+ • SAVE ₹59,901',
    tagColor: 'bg-amber-500 text-slate-950',
    specs: ['Apple A17 Pro 3nm Silicon', '48MP Pro Triple Camera', '120Hz ProMotion XDR Display', 'Aerospace Titanium Frame'],
    colors: [
      { name: 'Natural Titanium', hex: '#BEB4A6' },
      { name: 'Black Titanium', hex: '#2A2C2E' }
    ],
    storageVariants: ['128GB', '256GB', '512GB'],
    emiStarting: 3125,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '98% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 59901,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Pristine condition Apple iPhone 15 Pro in Natural Titanium. Inspected through 52 hardware tests, clean Apple ID iCloud status, 98% original battery health, and 1-year Balaji Warranty.'
  },
  {
    id: 'refurb-apple-2',
    name: 'Apple iPhone 14 128GB (Midnight Black)',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 5230,
    originalPrice: 69900,
    discountedPrice: 41999,
    discountPercentage: 40,
    tag: 'SUPERB GRADE A • SAVE ₹27,901',
    tagColor: 'bg-blue-600 text-white',
    specs: ['A15 Bionic with 5-Core GPU', 'Super Retina XDR OLED', 'Photonic Engine Cinematic Mode', 'Crash Detection & Action Mode'],
    colors: [
      { name: 'Midnight', hex: '#1C1D21' },
      { name: 'Starlight', hex: '#F0ECE1' },
      { name: 'Blue', hex: '#A1C3DE' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1750,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '95% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 27901,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Certified pre-owned iPhone 14 in superb condition. Ceramic Shield front glass, excellent battery endurance, and verified zero-moisture inspection.'
  },
  {
    id: 'refurb-samsung-1',
    name: 'Samsung Galaxy S23 Ultra 5G (12GB | 256GB)',
    brand: 'Samsung',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 3890,
    originalPrice: 124999,
    discountedPrice: 58999,
    discountPercentage: 53,
    tag: 'FLAGSHIP BEAST • SAVE ₹66,000',
    tagColor: 'bg-indigo-600 text-white',
    specs: ['Snapdragon 8 Gen 2 for Galaxy', '200MP Quad Camera with 100x Zoom', 'Embedded S-Pen Stylus', '5000mAh Battery'],
    colors: [
      { name: 'Phantom Black', hex: '#1B1C1E' },
      { name: 'Green', hex: '#3B4D3C' },
      { name: 'Cream', hex: '#EBE5D8' }
    ],
    storageVariants: ['256GB', '512GB'],
    emiStarting: 2458,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '97% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 66000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Samsung Galaxy S23 Ultra flagship with embedded S-Pen, pristine dynamic AMOLED display, 200MP sensor, and 1-year comprehensive coverage.'
  },
  {
    id: 'refurb-oneplus-1',
    name: 'OnePlus 11 5G (16GB RAM | 256GB Titan Black)',
    brand: 'OnePlus',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 2940,
    originalPrice: 56999,
    discountedPrice: 29999,
    discountPercentage: 47,
    tag: 'HOT DEAL 47% OFF',
    tagColor: 'bg-red-600 text-white',
    specs: ['Snapdragon 8 Gen 2', '3rd Gen Hasselblad Camera', '100W SUPERVOOC Charger', '2K 120Hz Super Fluid AMOLED'],
    colors: [
      { name: 'Titan Black', hex: '#212124' },
      { name: 'Eternal Green', hex: '#1E392A' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1250,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 27000,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Blazing speed with Snapdragon 8 Gen 2, 16GB RAM, Hasselblad-tuned optics, and 100W supercharger included in the certified box.'
  },
  {
    id: 'refurb-pixel-1',
    name: 'Google Pixel 7 Pro 5G (12GB | 128GB Hazel)',
    brand: 'Google Pixel',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 2150,
    originalPrice: 84999,
    discountedPrice: 28499,
    discountPercentage: 66,
    tag: 'FLAT 66% OFF • PRO CAMERA',
    tagColor: 'bg-emerald-600 text-white',
    specs: ['Google Tensor G2 Silicon', '5x Optical Telephoto Zoom', 'Magic Eraser & Photo Unblur', 'QHD+ LTPO 120Hz Curved Screen'],
    colors: [
      { name: 'Hazel', hex: '#58625B' },
      { name: 'Obsidian', hex: '#1D1E22' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1187,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '94% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 56500,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Flagship Google computational photography at an incredible price. 5x telephoto zoom, pure Android updates, and verified OEM battery.'
  },

  // --- MOTOROLA REFURBISHED ---
  {
    id: 'refurb-moto-1',
    name: 'Motorola Edge 50 Pro 5G (12GB | 256GB Luxe Lavender)',
    brand: 'Motorola',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 2340,
    originalPrice: 35999,
    discountedPrice: 19999,
    discountPercentage: 44,
    tag: 'GRADE A+ • 125W TURBOPOWER',
    tagColor: 'bg-indigo-600 text-white',
    specs: ['Snapdragon 7 Gen 3 AI', 'Pantone Validated 144Hz 1.5K pOLED', '50MP OIS AI Camera + 3x Telephoto', '125W TurboPower + 50W Wireless'],
    colors: [
      { name: 'Luxe Lavender', hex: '#B8A9C9' },
      { name: 'Black Beauty', hex: '#1C1C1E' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 833,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '98% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 16000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Certified pre-owned Motorola Edge 50 Pro in flawless condition. World-first Pantone-validated true color display, 125W blazing charging, and pure clean Hello UI experience.'
  },
  {
    id: 'refurb-moto-2',
    name: 'Moto G84 5G (12GB RAM | 256GB Viva Magenta Leather)',
    brand: 'Motorola',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewsCount: 1890,
    originalPrice: 19999,
    discountedPrice: 11999,
    discountPercentage: 40,
    tag: 'SUPER VALUE • VEGAN LEATHER',
    tagColor: 'bg-rose-600 text-white',
    specs: ['120Hz 10-Bit pOLED Display', '50MP OIS Ultra Pixel Camera', 'Snapdragon 695 5G', 'Dolby Atmos Stereo Speakers'],
    colors: [
      { name: 'Viva Magenta', hex: '#BB2649' },
      { name: 'Marshmallow Blue', hex: '#8E9AAF' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 500,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 8000,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Pre-owned Moto G84 featuring official Pantone Color of the Year vegan leather back, 12GB RAM for multitasking, and clean battery health.'
  },

  // --- VIVO REFURBISHED ---
  {
    id: 'refurb-vivo-1',
    name: 'Vivo V30 Pro 5G (12GB | 512GB Andaman Blue)',
    brand: 'Vivo',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 3120,
    originalPrice: 46999,
    discountedPrice: 24999,
    discountPercentage: 47,
    tag: 'ZEISS TRIPLE CAMERA • GRADE A+',
    tagColor: 'bg-blue-600 text-white',
    specs: ['ZEISS Co-Engineered Triple 50MP', 'Dimensity 8200 4nm Silicon', 'Studio-Grade Aura Light Portrait', '80W FlashCharge (5000mAh)'],
    colors: [
      { name: 'Andaman Blue', hex: '#68BBE3' },
      { name: 'Classic Black', hex: '#1C1C1E' }
    ],
    storageVariants: ['256GB', '512GB'],
    emiStarting: 1041,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '97% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 22000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Certified Grade A+ Vivo V30 Pro with true ZEISS optical lens tuning, Sony professional image sensors, and brilliant 3D curved AMOLED screen.'
  },
  {
    id: 'refurb-vivo-2',
    name: 'Vivo X90 Pro 5G (12GB | 256GB Legendary Black)',
    brand: 'Vivo',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 1450,
    originalPrice: 84999,
    discountedPrice: 36999,
    discountPercentage: 56,
    tag: '1-INCH ZEISS SENSOR • 56% OFF',
    tagColor: 'bg-cyan-600 text-white',
    specs: ['Sony 1-Inch IMX989 Sensor', 'Vivo V2 Custom Imaging Chip', '120W Dual-Cell FlashCharge', 'ZEISS T* Anti-Reflective Coating'],
    colors: [
      { name: 'Legendary Black', hex: '#171717' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 1541,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 48000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Professional DSLR-replacement smartphone with colossal 1-inch Sony sensor and ZEISS optics. Tested for zero sensor dust, pure lens clarity, and 120W charge speed.'
  },

  // --- NOTHING REFURBISHED ---
  {
    id: 'refurb-nothing-1',
    name: 'Nothing Phone (2) 5G (12GB | 256GB Dark Grey)',
    brand: 'Nothing',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 2680,
    originalPrice: 44999,
    discountedPrice: 23999,
    discountPercentage: 47,
    tag: 'GLYPH 2.0 • GRADE A+ PRISTINE',
    tagColor: 'bg-zinc-700 text-white',
    specs: ['Snapdragon 8+ Gen 1 4nm', 'Glyph Interface 2.0 LED Matrix', 'Dual 50MP Sony IMX890 OIS Camera', '6.7" LTPO 120Hz OLED Display'],
    colors: [
      { name: 'Dark Grey', hex: '#2A2C2E' },
      { name: 'White', hex: '#F0F0EE' }
    ],
    storageVariants: ['128GB', '256GB', '512GB'],
    emiStarting: 1000,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '97% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 21000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Iconic transparent flagship phone with fully functional Glyph LEDs, Snapdragon 8+ Gen 1 horsepower, and pristine scratch-free Gorilla Glass.'
  },
  {
    id: 'refurb-nothing-2',
    name: 'Nothing Phone (2a) 5G (8GB | 128GB Milk White)',
    brand: 'Nothing',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 3410,
    originalPrice: 23999,
    discountedPrice: 14999,
    discountPercentage: 38,
    tag: 'BEST SELLER • TRANSPARENT DESIGN',
    tagColor: 'bg-slate-700 text-white',
    specs: ['Custom Dimensity 7200 Pro', 'Dual 50MP Cameras with OIS', 'Iconic 3-Part Glyph Interface', '5000mAh Battery + 45W Charge'],
    colors: [
      { name: 'Milk White', hex: '#F5F5F0' },
      { name: 'Black', hex: '#1C1C1E' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 625,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '99% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 9000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Youth icon transparent design with symmetric slim bezels, verified 99% battery health, and Balaji 12-month assurance.'
  },

  // --- OPPO REFURBISHED ---
  {
    id: 'refurb-oppo-1',
    name: 'Oppo Reno 11 Pro 5G (12GB | 256GB Pearl White)',
    brand: 'Oppo',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 2210,
    originalPrice: 39999,
    discountedPrice: 21499,
    discountPercentage: 46,
    tag: 'PORTRAIT EXPERT • GRADE A+',
    tagColor: 'bg-teal-600 text-white',
    specs: ['32MP Sony Telephoto Portrait Lens', 'MediaTek Dimensity 8200', '80W SUPERVOOC Fast Charge', '120Hz 3D Curved AMOLED'],
    colors: [
      { name: 'Pearl White', hex: '#F4EAE0' },
      { name: 'Rock Grey', hex: '#373A3C' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 895,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 18500,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Certified pre-owned Oppo Reno 11 Pro in lustrous natural pearl white. Studio portrait focal length, 80W flash adapter included, and CEIR clean IMEI.'
  },

  // --- REALME REFURBISHED ---
  {
    id: 'refurb-realme-1',
    name: 'Realme GT 6T 5G (8GB | 256GB Fluid Silver)',
    brand: 'Realme',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 2890,
    originalPrice: 32999,
    discountedPrice: 18999,
    discountPercentage: 42,
    tag: 'TOP PERFORMANCE • 120W CHARGE',
    tagColor: 'bg-amber-600 text-white',
    specs: ['Snapdragon 7+ Gen 3 Silicon', '6000nits 8T LTPO AMOLED Display', '120W SUPERVOOC (5500mAh)', 'Sony 50MP OIS Camera'],
    colors: [
      { name: 'Fluid Silver', hex: '#C0C0C0' },
      { name: 'Razor Green', hex: '#1E392A' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 791,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '98% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 14000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Top-tier speed with Snapdragon 7+ Gen 3, world’s brightest 6000-nit display, and certified 120W fast charger in box.'
  },
  {
    id: 'refurb-realme-2',
    name: 'Realme 12 Pro+ 5G (12GB | 256GB Submarine Blue)',
    brand: 'Realme',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 2470,
    originalPrice: 33999,
    discountedPrice: 17499,
    discountPercentage: 49,
    tag: '64MP PERISCOPE ZOOM • VEGAN LEATHER',
    tagColor: 'bg-blue-600 text-white',
    specs: ['64MP Periscope Portrait (120X Zoom)', 'Snapdragon 7s Gen 2', 'Luxury Watch Fluted Bezel', '120Hz Curved Vision Display'],
    colors: [
      { name: 'Submarine Blue', hex: '#1A365D' },
      { name: 'Navigator Beige', hex: '#E2D8C3' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 729,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A Superb',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 16500,
    gradeBadgeColor: 'bg-blue-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Luxury design co-created with Swiss master watchmakers. Features 64MP periscope telephoto lens with 120x zoom and pristine leather back.'
  },

  // --- XIAOMI REFURBISHED ---
  {
    id: 'refurb-xiaomi-1',
    name: 'Xiaomi 13 Pro 5G (12GB | 256GB Ceramic Black)',
    brand: 'Xiaomi',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 1980,
    originalPrice: 79999,
    discountedPrice: 34999,
    discountPercentage: 56,
    tag: 'LEICA OPTICS 1-INCH • 56% OFF',
    tagColor: 'bg-orange-600 text-white',
    specs: ['Leica 1-Inch Sony IMX989 Sensor', 'Snapdragon 8 Gen 2 Flagship', '120W HyperCharge + 50W Wireless', '2K 120Hz LTPO AMOLED'],
    colors: [
      { name: 'Ceramic Black', hex: '#111215' }
    ],
    storageVariants: ['256GB'],
    emiStarting: 1458,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '95% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 45000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Certified pre-owned Leica masterpiece with genuine ceramic rear chassis, true 1-inch sensor, 120W adapter, and 1-year Balaji Warranty.'
  },
  {
    id: 'refurb-xiaomi-2',
    name: 'Redmi Note 13 Pro+ 5G (12GB | 512GB Fusion Purple)',
    brand: 'Xiaomi',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 4520,
    originalPrice: 35999,
    discountedPrice: 18999,
    discountPercentage: 47,
    tag: '200MP OIS • 120W CHARGING',
    tagColor: 'bg-purple-600 text-white',
    specs: ['200MP Samsung ISOCELL HP3 with OIS', '1.5K 120Hz 3D Curved AMOLED', 'IP68 Water & Dust Resistance', 'Dimensity 7200 Ultra 4nm'],
    colors: [
      { name: 'Fusion Purple', hex: '#8B5CF6' },
      { name: 'Fusion Black', hex: '#18181B' }
    ],
    storageVariants: ['256GB', '512GB'],
    emiStarting: 791,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '97% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 17000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'India’s most popular 200MP mid-flagship with IP68 rating, curved AMOLED panel, and ultra-fast 120W charger.'
  },

  // --- iQOO REFURBISHED ---
  {
    id: 'refurb-iqoo-1',
    name: 'iQOO Neo 9 Pro 5G (8GB | 256GB Fiery Red Dual-Tone)',
    brand: 'iQOO',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 2780,
    originalPrice: 37999,
    discountedPrice: 21999,
    discountPercentage: 42,
    tag: 'SNAPDRAGON 8 GEN 2 • 144HZ',
    tagColor: 'bg-amber-600 text-white',
    specs: ['Snapdragon 8 Gen 2 Flagship SoC', 'Supercomputing Chip Q1', '144Hz 1.5K LTPO AMOLED', '120W FlashCharge (5160mAh)'],
    colors: [
      { name: 'Fiery Red', hex: '#DC2626' },
      { name: 'Conqueror Black', hex: '#1C1C1E' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 916,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '97% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 16000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Peak gaming flagship with Snapdragon 8 Gen 2, dual-tone vegan leather finish, 144Hz high refresh display, and 120W charger.'
  },

  // --- POCO REFURBISHED ---
  {
    id: 'refurb-poco-1',
    name: 'POCO X6 Pro 5G (12GB | 512GB Racing Yellow)',
    brand: 'POCO',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 3190,
    originalPrice: 28999,
    discountedPrice: 16999,
    discountPercentage: 41,
    tag: 'SPEED CHAMPION • 512GB STORAGE',
    tagColor: 'bg-yellow-500 text-slate-950',
    specs: ['MediaTek Dimensity 8300 Ultra 4nm', '1.5K 120Hz Flow AMOLED (68B Colors)', '64MP Triple Camera with OIS', '67W Turbo Charger (5000mAh)'],
    colors: [
      { name: 'Racing Yellow', hex: '#EAB308' },
      { name: 'Spectre Black', hex: '#18181B' }
    ],
    storageVariants: ['256GB', '512GB'],
    emiStarting: 708,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '98% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 12000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Flagship speed killer with 1.4 million AnTuTu benchmark score, 512GB colossal storage, and racing vegan leather finish.'
  },

  // --- MORE APPLE & SAMSUNG FAVORITES ---
  {
    id: 'refurb-apple-3',
    name: 'Apple iPhone 13 128GB (Starlight White)',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 6840,
    originalPrice: 59900,
    discountedPrice: 31999,
    discountPercentage: 47,
    tag: 'MOST POPULAR IPHONE IN INDIA',
    tagColor: 'bg-blue-600 text-white',
    specs: ['Apple A15 Bionic Silicon', 'Cinematic Mode Video Recording', 'Super Retina XDR OLED', 'Ceramic Shield Drop Protection'],
    colors: [
      { name: 'Starlight', hex: '#F0ECE1' },
      { name: 'Midnight', hex: '#1C1D21' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1333,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '96% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 27901,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'India’s #1 top-selling pre-owned iPhone. Superb battery endurance, sharp camera with sensor-shift optical image stabilization, and 12-month store warranty.'
  },
  {
    id: 'refurb-samsung-2',
    name: 'Samsung Galaxy S22 5G (8GB | 128GB Phantom White)',
    brand: 'Samsung',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 3100,
    originalPrice: 72999,
    discountedPrice: 24999,
    discountPercentage: 66,
    tag: 'FLAT 66% OFF • COMPACT FLAGSHIP',
    tagColor: 'bg-indigo-600 text-white',
    specs: ['Snapdragon 8 Gen 1', 'Dynamic AMOLED 2X 120Hz', '50MP Nightography Triple Camera', 'Armor Aluminum Frame'],
    colors: [
      { name: 'Phantom White', hex: '#F8FAFC' },
      { name: 'Phantom Black', hex: '#1B1C1E' }
    ],
    storageVariants: ['128GB', '256GB'],
    emiStarting: 1041,
    inStock: true,
    isRefurbished: true,
    conditionGrade: 'Grade A+ Pristine',
    batteryHealth: '95% Battery Health',
    warrantyMonths: 12,
    qualityCheckPoints: 52,
    isIndianBrand: false,
    savingsAmount: 48000,
    gradeBadgeColor: 'bg-emerald-600 text-white',
    originalBoxIncluded: true,
    chargerIncluded: true,
    description: 'Pocket-sized powerhouse flagship with pristine Dynamic AMOLED 2X screen, 50MP optical camera, and 1-year Balaji Warranty.'
  }
];

export const PRODUCTS: Product[] = [
  // 0. CERTIFIED 2ND HAND & REFURBISHED SMARTPHONES (PRIMARY BUSINESS)
  ...REFURBISHED_PRODUCTS,

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
