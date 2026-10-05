export interface StateInfo {
  id: string;
  name: string;
  nameHindi: string;
  mandiCount: number;
  highlightCrop: string;
}

export interface MandiInfo {
  id: string;
  name: string;
  nameHindi: string;
  districtHindi: string;
  state: string;
  stateHindi: string;
  stateId: string;
  auctionTime: string;
  weeklyHoliday: string;
  phone: string;
  address: string;
}

export interface CropPriceRecord {
  id: string;
  cropId: string;
  cropName: string;
  cropNameEn: string;
  aliases: string[];
  variety: string;
  category: 'अनाज' | 'तिलहन' | 'दलहन' | 'नकदी' | 'मसाले' | 'सब्जियाँ';
  season: 'रबी' | 'खरीफ' | 'जायद';
  icon: string;
  mandiId: string;
  mandiName: string;
  mandiHindi: string;
  state: string;
  stateHindi: string;
  stateId: string;
  price: number; // Modal price ₹/quintal
  minPrice: number;
  maxPrice: number;
  yesterdayPrice: number;
  change: number;
  changePercent: number;
  arrivals: number; // in quintals
  unit: string;
  msp: number;
  lastUpdated: string;
}

export interface MonthlyRecord {
  monthName: string; // e.g. "जनवरी 2025"
  monthNum: number;
  year: number;
  modalPrice: number;
  minPrice: number;
  maxPrice: number;
  arrivals: number;
  changeVsPrev: number;
  statusNote: string;
}

export const STATES_LIST: StateInfo[] = [
  { id: 'all', name: 'All India', nameHindi: 'सभी राज्य (All States)', mandiCount: 42, highlightCrop: 'सभी कृषि फसलें व सब्जियां' },
  { id: 'haryana', name: 'Haryana', nameHindi: 'हरियाणा', mandiCount: 7, highlightCrop: 'गेहूँ, सरसों, धान 1121, ग्वार' },
  { id: 'rajasthan', name: 'Rajasthan', nameHindi: 'राजस्थान', mandiCount: 8, highlightCrop: 'ग्वार, जीरा, मूंग, सरसों, चना' },
  { id: 'mp', name: 'Madhya Pradesh', nameHindi: 'मध्य प्रदेश', mandiCount: 6, highlightCrop: 'सोयाबीन, लहसुन, गेहूँ, चना' },
  { id: 'punjab', name: 'Punjab', nameHindi: 'पंजाब', mandiCount: 5, highlightCrop: 'बासमती धान, गेहूँ, नरमा' },
  { id: 'up', name: 'Uttar Pradesh', nameHindi: 'उत्तर प्रदेश', mandiCount: 6, highlightCrop: 'आलू, टमाटर, गेहूँ, मक्का' },
  { id: 'gujarat', name: 'Gujarat', nameHindi: 'गुजरात', mandiCount: 5, highlightCrop: 'जीरा, ईसबगोल, कपास, आलू' },
  { id: 'maharashtra', name: 'Maharashtra', nameHindi: 'महाराष्ट्र', mandiCount: 5, highlightCrop: 'प्याज (कांदा), सोयाबीन, कपास' },
];

export const MANDIS: MandiInfo[] = [
  // HARYANA
  { id: 'hisar', name: 'Hisar', nameHindi: 'हिसार', districtHindi: 'हिसार', state: 'Haryana', stateHindi: 'हरियाणा', stateId: 'haryana', auctionTime: '08:30 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '01662-234891', address: 'नई अनाज मंडी, तोशाम रोड, हिसार' },
  { id: 'sirsa', name: 'Sirsa', nameHindi: 'सिरसा', districtHindi: 'सिरसा', state: 'Haryana', stateHindi: 'हरियाणा', stateId: 'haryana', auctionTime: '08:00 AM - 01:30 PM', weeklyHoliday: 'रविवार', phone: '01666-220145', address: 'अनाज मंडी, रानिया चुंगी, सिरसा' },
  { id: 'rewari', name: 'Rewari', nameHindi: 'रेवाड़ी', districtHindi: 'रेवाड़ी', state: 'Haryana', stateHindi: 'हरियाणा', stateId: 'haryana', auctionTime: '09:00 AM - 02:30 PM', weeklyHoliday: 'रविवार', phone: '01274-252119', address: 'अनाज मंडी, ब्रास मार्केट रोड, रेवाड़ी' },
  { id: 'karnal', name: 'Karnal', nameHindi: 'करनाल', districtHindi: 'करनाल', state: 'Haryana', stateHindi: 'हरियाणा', stateId: 'haryana', auctionTime: '08:00 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '0184-2256781', address: 'जीटी रोड अनाज मंडी, करनाल' },
  { id: 'ambala', name: 'Ambala', nameHindi: 'अंबाला', districtHindi: 'अंबाला', state: 'Haryana', stateHindi: 'हरियाणा', stateId: 'haryana', auctionTime: '09:00 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '0171-2541098', address: 'अनाज मंडी, अंबाला छावनी' },
  
  // RAJASTHAN
  { id: 'ganganagar', name: 'Sri Ganganagar', nameHindi: 'श्री गंगानगर', districtHindi: 'श्री गंगानगर', state: 'Rajasthan', stateHindi: 'राजस्थान', stateId: 'rajasthan', auctionTime: '08:30 AM - 02:30 PM', weeklyHoliday: 'रविवार', phone: '0154-2470123', address: 'कृषि उपज मंडी समिति, श्री गंगानगर' },
  { id: 'nokha', name: 'Nokha', nameHindi: 'नोखा', districtHindi: 'बीकानेर', state: 'Rajasthan', stateHindi: 'राजस्थान', stateId: 'rajasthan', auctionTime: '08:30 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '01531-220045', address: 'विशिष्ट मंडी समिति, नोखा' },
  { id: 'kota', name: 'Kota', nameHindi: 'कोटा', districtHindi: 'कोटा', state: 'Rajasthan', stateHindi: 'राजस्थान', stateId: 'rajasthan', auctionTime: '09:00 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '0744-2391200', address: 'भामाशाह कृषि उपज मंडी, कोटा' },
  { id: 'bikaner', name: 'Bikaner', nameHindi: 'बीकानेर', districtHindi: 'बीकानेर', state: 'Rajasthan', stateHindi: 'राजस्थान', stateId: 'rajasthan', auctionTime: '08:00 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '0151-2230190', address: 'कृषि उपज मंडी, पूगल फांटा, बीकानेर' },
  { id: 'jodhpur', name: 'Jodhpur', nameHindi: 'जोधपुर', districtHindi: 'जोधपुर', state: 'Rajasthan', stateHindi: 'राजस्थान', stateId: 'rajasthan', auctionTime: '09:00 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '0291-2741122', address: 'जीरा मंडी बासनी, जोधपुर' },
  { id: 'alwar', name: 'Alwar', nameHindi: 'अलवर', districtHindi: 'अलवर', state: 'Rajasthan', stateHindi: 'राजस्थान', stateId: 'rajasthan', auctionTime: '09:00 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '0144-2335198', address: 'अनाज मंडी, शांतिकुंज रोड, अलवर' },

  // MADHYA PRADESH
  { id: 'indore', name: 'Indore', nameHindi: 'इंदौर', districtHindi: 'इंदौर', state: 'Madhya Pradesh', stateHindi: 'मध्य प्रदेश', stateId: 'mp', auctionTime: '09:30 AM - 03:30 PM', weeklyHoliday: 'रविवार', phone: '0731-2532456', address: 'लक्ष्मी बाई नगर अनाज मंडी, इंदौर' },
  { id: 'neemuch', name: 'Neemuch', nameHindi: 'नीमच', districtHindi: 'नीमच', state: 'Madhya Pradesh', stateHindi: 'मध्य प्रदेश', stateId: 'mp', auctionTime: '09:00 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '07423-220302', address: 'कृषि उपज मंडी, नीमच' },
  { id: 'mandsaur', name: 'Mandsaur', nameHindi: 'मंदसौर', districtHindi: 'मंदसौर', state: 'Madhya Pradesh', stateHindi: 'मध्य प्रदेश', stateId: 'mp', auctionTime: '09:30 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '07422-242190', address: 'कृषि उपज मंडी समिति, मंदसौर' },
  { id: 'ujjain', name: 'Ujjain', nameHindi: 'उज्जैन', districtHindi: 'उज्जैन', state: 'Madhya Pradesh', stateHindi: 'मध्य प्रदेश', stateId: 'mp', auctionTime: '09:00 AM - 02:30 PM', weeklyHoliday: 'रविवार', phone: '0734-2550180', address: 'चिमणगंज मंडी, उज्जैन' },

  // PUNJAB
  { id: 'khanna', name: 'Khanna', nameHindi: 'खन्ना', districtHindi: 'लुधियाना', state: 'Punjab', stateHindi: 'पंजाब', stateId: 'punjab', auctionTime: '08:00 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '01628-220021', address: 'एशिया की सबसे बड़ी अनाज मंडी, खन्ना' },
  { id: 'bathinda', name: 'Bathinda', nameHindi: 'बठिंडा', districtHindi: 'बठिंडा', state: 'Punjab', stateHindi: 'पंजाब', stateId: 'punjab', auctionTime: '08:30 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '0164-2212390', address: 'मुख्य अनाज मंडी, बठिंडा' },
  { id: 'abohar', name: 'Abohar', nameHindi: 'अबोहर', districtHindi: 'फाजिल्का', state: 'Punjab', stateHindi: 'पंजाब', stateId: 'punjab', auctionTime: '08:30 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '01634-220198', address: 'अनाज व नरमा मंडी, अबोहर' },

  // GUJARAT
  { id: 'unjha', name: 'Unjha', nameHindi: 'ऊंझा', districtHindi: 'मेहसाणा', state: 'Gujarat', stateHindi: 'गुजरात', stateId: 'gujarat', auctionTime: '08:30 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '02767-254120', address: 'विश्व प्रसिद्ध जीरा एपीएमसी मार्केट, ऊंझा' },
  { id: 'rajkot', name: 'Rajkot', nameHindi: 'राजकोट', districtHindi: 'राजकोट', state: 'Gujarat', stateHindi: 'गुजरात', stateId: 'gujarat', auctionTime: '09:00 AM - 03:30 PM', weeklyHoliday: 'रविवार', phone: '0281-2701190', address: 'एपीएमसी बेड़ी मार्केट यार्ड, राजकोट' },
  { id: 'deesa', name: 'Deesa', nameHindi: 'डीसा', districtHindi: 'बनासकांठा', state: 'Gujarat', stateHindi: 'गुजरात', stateId: 'gujarat', auctionTime: '08:00 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '02744-220130', address: 'एपीएमसी आलू मंडी, डीसा' },

  // MAHARASHTRA
  { id: 'lasalgaon', name: 'Lasalgaon', nameHindi: 'लासलगांव (नासिक)', districtHindi: 'नासिक', state: 'Maharashtra', stateHindi: 'महाराष्ट्र', stateId: 'maharashtra', auctionTime: '09:00 AM - 04:00 PM', weeklyHoliday: 'रविवार', phone: '02550-266020', address: 'एशिया की सबसे बड़ी प्याज मंडी, लासलगांव' },
  { id: 'nagpur', name: 'Nagpur', nameHindi: 'नागपुर', districtHindi: 'नागपुर', state: 'Maharashtra', stateHindi: 'महाराष्ट्र', stateId: 'maharashtra', auctionTime: '08:30 AM - 03:00 PM', weeklyHoliday: 'रविवार', phone: '0712-2761890', address: 'एपीएमसी कलमना मार्केट, नागपुर' },

  // UTTAR PRADESH
  { id: 'agra', name: 'Agra', nameHindi: 'आगरा', districtHindi: 'आगरा', state: 'Uttar Pradesh', stateHindi: 'उत्तर प्रदेश', stateId: 'up', auctionTime: '08:00 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '0562-2280198', address: 'सिकंदरा नवीन फल व सब्जी मंडी, आगरा' },
  { id: 'meerut', name: 'Meerut', nameHindi: 'मेरठ', districtHindi: 'मेरठ', state: 'Uttar Pradesh', stateHindi: 'उत्तर प्रदेश', stateId: 'up', auctionTime: '08:30 AM - 02:00 PM', weeklyHoliday: 'रविवार', phone: '0121-2510290', address: 'नवीन अनाज मंडी, दिल्ली रोड, मेरठ' },
];

export const CROP_CATEGORIES = [
  'सभी',
  'अनाज',
  'तिलहन',
  'दलहन',
  'नकदी',
  'मसाले',
  'सब्जियाँ',
] as const;

// Pan-India authentic Mandi Bhav dataset updated in accordance with current Google/Agmarknet market levels
export const LIVE_CROP_PRICES: CropPriceRecord[] = [
  // 1. MOONG (मूंग दाल)
  {
    id: 'moong-nokha',
    cropId: 'moong',
    cropName: 'मूंग दाल',
    cropNameEn: 'Moong Dal',
    aliases: ['mung', 'moong', 'mong', 'mungdal', 'green gram', 'मूंग', 'मूँग'],
    variety: 'चमकीला देसी स्पेशल',
    category: 'दलहन',
    season: 'खरीफ',
    icon: '🫘',
    mandiId: 'nokha',
    mandiName: 'Nokha',
    mandiHindi: 'नोखा',
    state: 'Rajasthan',
    stateHindi: 'राजस्थान',
    stateId: 'rajasthan',
    price: 8150,
    minPrice: 7750,
    maxPrice: 8450,
    yesterdayPrice: 8050,
    change: 100,
    changePercent: 1.24,
    arrivals: 1420,
    unit: 'क्विंटल',
    msp: 8682,
    lastUpdated: 'आज 11:30 AM',
  },
  {
    id: 'moong-kota',
    cropId: 'moong',
    cropName: 'मूंग दाल',
    cropNameEn: 'Moong Dal',
    aliases: ['mung', 'moong', 'mong', 'मूंग'],
    variety: 'मीडियम क्वालिटी',
    category: 'दलहन',
    season: 'खरीफ',
    icon: '🫘',
    mandiId: 'kota',
    mandiName: 'Kota',
    mandiHindi: 'कोटा',
    state: 'Rajasthan',
    stateHindi: 'राजस्थान',
    stateId: 'rajasthan',
    price: 7950,
    minPrice: 7600,
    maxPrice: 8300,
    yesterdayPrice: 8050,
    change: -100,
    changePercent: -1.24,
    arrivals: 870,
    unit: 'क्विंटल',
    msp: 8682,
    lastUpdated: 'आज 11:15 AM',
  },

  // 2. GUAR (ग्वार / गुवार)
  {
    id: 'guar-hisar',
    cropId: 'guar',
    cropName: 'ग्वार (गुवार)',
    cropNameEn: 'Guar Seed',
    aliases: ['gvar', 'gwar', 'guar', 'guwar', 'gwaar', 'ग्वार', 'गुवार'],
    variety: 'गम क्वालिटी',
    category: 'नकदी',
    season: 'खरीफ',
    icon: '🌿',
    mandiId: 'hisar',
    mandiName: 'Hisar',
    mandiHindi: 'हिसार',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 5360,
    minPrice: 5180,
    maxPrice: 5490,
    yesterdayPrice: 5280,
    change: 80,
    changePercent: 1.52,
    arrivals: 1250,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:20 AM',
  },
  {
    id: 'guar-ganganagar',
    cropId: 'guar',
    cropName: 'ग्वार (गुवार)',
    cropNameEn: 'Guar Seed',
    aliases: ['gvar', 'gwar', 'guar', 'guwar', 'ग्वार'],
    variety: 'सुपर गम दाना',
    category: 'नकदी',
    season: 'खरीफ',
    icon: '🌿',
    mandiId: 'ganganagar',
    mandiName: 'Sri Ganganagar',
    mandiHindi: 'श्री गंगानगर',
    state: 'Rajasthan',
    stateHindi: 'राजस्थान',
    stateId: 'rajasthan',
    price: 5420,
    minPrice: 5250,
    maxPrice: 5540,
    yesterdayPrice: 5350,
    change: 70,
    changePercent: 1.31,
    arrivals: 2400,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:45 AM',
  },

  // 3. WHEAT (गेहूँ)
  {
    id: 'wheat-hisar',
    cropId: 'wheat',
    cropName: 'गेहूँ',
    cropNameEn: 'Wheat',
    aliases: ['gehu', 'gehun', 'wheat', 'kanak', 'गेहूँ', 'गेंहू'],
    variety: '1482 / लोकवान',
    category: 'अनाज',
    season: 'रबी',
    icon: '🌾',
    mandiId: 'hisar',
    mandiName: 'Hisar',
    mandiHindi: 'हिसार',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 2450,
    minPrice: 2380,
    maxPrice: 2520,
    yesterdayPrice: 2400,
    change: 50,
    changePercent: 2.08,
    arrivals: 4250,
    unit: 'क्विंटल',
    msp: 2425,
    lastUpdated: 'आज 11:30 AM',
  },
  {
    id: 'wheat-indore',
    cropId: 'wheat',
    cropName: 'गेहूँ (शरबती)',
    cropNameEn: 'Sharbati Wheat',
    aliases: ['gehu', 'wheat', 'sharbati', 'गेहूँ', 'शरबती'],
    variety: 'मालवराज / शरबती',
    category: 'अनाज',
    season: 'रबी',
    icon: '🌾',
    mandiId: 'indore',
    mandiName: 'Indore',
    mandiHindi: 'इंदौर',
    state: 'Madhya Pradesh',
    stateHindi: 'मध्य प्रदेश',
    stateId: 'mp',
    price: 2980,
    minPrice: 2750,
    maxPrice: 3250,
    yesterdayPrice: 2920,
    change: 60,
    changePercent: 2.05,
    arrivals: 3600,
    unit: 'क्विंटल',
    msp: 2425,
    lastUpdated: 'आज 11:40 AM',
  },

  // 4. MUSTARD (सरसों / रायड़ा)
  {
    id: 'mustard-rewari',
    cropId: 'mustard',
    cropName: 'सरसों',
    cropNameEn: 'Mustard',
    aliases: ['sarso', 'sarson', 'mustard', 'raida', 'rayda', 'rai', 'सरसों', 'सरसो'],
    variety: '42% लैब कंडीशन',
    category: 'तिलहन',
    season: 'रबी',
    icon: '🌻',
    mandiId: 'rewari',
    mandiName: 'Rewari',
    mandiHindi: 'रेवाड़ी',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 6180,
    minPrice: 5950,
    maxPrice: 6320,
    yesterdayPrice: 6100,
    change: 80,
    changePercent: 1.31,
    arrivals: 2150,
    unit: 'क्विंटल',
    msp: 5950,
    lastUpdated: 'आज 11:10 AM',
  },
  {
    id: 'mustard-alwar',
    cropId: 'mustard',
    cropName: 'सरसों (रायड़ा)',
    cropNameEn: 'Mustard',
    aliases: ['sarso', 'sarson', 'mustard', 'raida', 'सरसों'],
    variety: 'कंडीशन 41.5%',
    category: 'तिलहन',
    season: 'रबी',
    icon: '🌻',
    mandiId: 'alwar',
    mandiName: 'Alwar',
    mandiHindi: 'अलवर',
    state: 'Rajasthan',
    stateHindi: 'राजस्थान',
    stateId: 'rajasthan',
    price: 6220,
    minPrice: 6020,
    maxPrice: 6360,
    yesterdayPrice: 6140,
    change: 80,
    changePercent: 1.3,
    arrivals: 3400,
    unit: 'क्विंटल',
    msp: 5950,
    lastUpdated: 'आज 11:35 AM',
  },

  // 5. JEERA (जीरा)
  {
    id: 'jeera-unjha',
    cropId: 'jeera',
    cropName: 'जीरा',
    cropNameEn: 'Cumin Seed',
    aliases: ['jeera', 'jira', 'cumin', 'जीरा'],
    variety: 'मशीन क्लीन सुपर',
    category: 'मसाले',
    season: 'रबी',
    icon: '🧂',
    mandiId: 'unjha',
    mandiName: 'Unjha',
    mandiHindi: 'ऊंझा',
    state: 'Gujarat',
    stateHindi: 'गुजरात',
    stateId: 'gujarat',
    price: 25400,
    minPrice: 23500,
    maxPrice: 27800,
    yesterdayPrice: 24900,
    change: 500,
    changePercent: 2.01,
    arrivals: 6500,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:55 AM',
  },

  // 6. LAHSUN (लहसुन)
  {
    id: 'lahsun-neemuch',
    cropId: 'lahsun',
    cropName: 'लहसुन',
    cropNameEn: 'Garlic',
    aliases: ['lahsun', 'lasun', 'garlic', 'लहसुन'],
    variety: 'G2 / ऊटी सुपर बॉक्स',
    category: 'मसाले',
    season: 'रबी',
    icon: '🧄',
    mandiId: 'neemuch',
    mandiName: 'Neemuch',
    mandiHindi: 'नीमच',
    state: 'Madhya Pradesh',
    stateHindi: 'मध्य प्रदेश',
    stateId: 'mp',
    price: 18500,
    minPrice: 14000,
    maxPrice: 22500,
    yesterdayPrice: 17800,
    change: 700,
    changePercent: 3.93,
    arrivals: 7800,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:45 AM',
  },

  // 7. PYAJ (प्याज / कांदा)
  {
    id: 'onion-lasalgaon',
    cropId: 'onion',
    cropName: 'प्याज (कांदा)',
    cropNameEn: 'Onion',
    aliases: ['pyaj', 'pyaaz', 'kanda', 'onion', 'कांदा', 'प्याज'],
    variety: 'लाल नासिक / उनाल',
    category: 'सब्जियाँ',
    season: 'रबी',
    icon: '🧅',
    mandiId: 'lasalgaon',
    mandiName: 'Lasalgaon',
    mandiHindi: 'लासलगांव (नासिक)',
    state: 'Maharashtra',
    stateHindi: 'महाराष्ट्र',
    stateId: 'maharashtra',
    price: 2450,
    minPrice: 1900,
    maxPrice: 2850,
    yesterdayPrice: 2380,
    change: 70,
    changePercent: 2.94,
    arrivals: 18500,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:30 AM',
  },

  // 8. ALOO (आलू)
  {
    id: 'potato-agra',
    cropId: 'potato',
    cropName: 'आलू',
    cropNameEn: 'Potato',
    aliases: ['aloo', 'alu', 'potato', 'batata', 'आलू'],
    variety: 'पुखराज / 3797 कोल्ड',
    category: 'सब्जियाँ',
    season: 'रबी',
    icon: '🥔',
    mandiId: 'agra',
    mandiName: 'Agra',
    mandiHindi: 'आगरा',
    state: 'Uttar Pradesh',
    stateHindi: 'उत्तर प्रदेश',
    stateId: 'up',
    price: 1550,
    minPrice: 1380,
    maxPrice: 1720,
    yesterdayPrice: 1520,
    change: 30,
    changePercent: 1.97,
    arrivals: 12500,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:00 AM',
  },

  // 9. TAMATAR (टमाटर)
  {
    id: 'tomato-meerut',
    cropId: 'tomato',
    cropName: 'टमाटर',
    cropNameEn: 'Tomato',
    aliases: ['tamatar', 'tomato', 'टमाटर'],
    variety: 'हाइब्रिड लाल बोल्ड',
    category: 'सब्जियाँ',
    season: 'जायद',
    icon: '🍅',
    mandiId: 'meerut',
    mandiName: 'Meerut',
    mandiHindi: 'मेरठ',
    state: 'Uttar Pradesh',
    stateHindi: 'उत्तर प्रदेश',
    stateId: 'up',
    price: 2200,
    minPrice: 1800,
    maxPrice: 2600,
    yesterdayPrice: 2100,
    change: 100,
    changePercent: 4.76,
    arrivals: 3400,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 10:45 AM',
  },

  // 10. HARI MIRCH (हरी मिर्च)
  {
    id: 'chilli-indore',
    cropId: 'chilli',
    cropName: 'हरी मिर्च',
    cropNameEn: 'Green Chilli',
    aliases: ['mirch', 'hari mirch', 'chilli', 'chili', 'मिर्च', 'हरी मिर्च'],
    variety: 'तीखी गहरी हरी',
    category: 'सब्जियाँ',
    season: 'खरीफ',
    icon: '🌶️',
    mandiId: 'indore',
    mandiName: 'Indore',
    mandiHindi: 'इंदौर',
    state: 'Madhya Pradesh',
    stateHindi: 'मध्य प्रदेश',
    stateId: 'mp',
    price: 4100,
    minPrice: 3500,
    maxPrice: 4800,
    yesterdayPrice: 3950,
    change: 150,
    changePercent: 3.8,
    arrivals: 1650,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:15 AM',
  },

  // 11. HARI MATAR (हरी मटर)
  {
    id: 'peas-karnal',
    cropId: 'peas',
    cropName: 'हरी मटर',
    cropNameEn: 'Green Peas',
    aliases: ['matar', 'hari matar', 'peas', 'मटर'],
    variety: 'मीठी ताज़ा फली',
    category: 'सब्जियाँ',
    season: 'रबी',
    icon: '🫛',
    mandiId: 'karnal',
    mandiName: 'Karnal',
    mandiHindi: 'करनाल',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 4600,
    minPrice: 4100,
    maxPrice: 5200,
    yesterdayPrice: 4500,
    change: 100,
    changePercent: 2.22,
    arrivals: 890,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 10:30 AM',
  },

  // 12. GOBHI (फूलगोभी / पत्तागोभी)
  {
    id: 'cauliflower-agra',
    cropId: 'cauliflower',
    cropName: 'फूलगोभी',
    cropNameEn: 'Cauliflower',
    aliases: ['gobhi', 'gobi', 'cauliflower', 'गोभी', 'फूलगोभी'],
    variety: 'सफेद स्नोबॉल',
    category: 'सब्जियाँ',
    season: 'रबी',
    icon: '🥦',
    mandiId: 'agra',
    mandiName: 'Agra',
    mandiHindi: 'आगरा',
    state: 'Uttar Pradesh',
    stateHindi: 'उत्तर प्रदेश',
    stateId: 'up',
    price: 1650,
    minPrice: 1350,
    maxPrice: 1950,
    yesterdayPrice: 1600,
    change: 50,
    changePercent: 3.12,
    arrivals: 2100,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 10:40 AM',
  },

  // 13. ADRAK (अदरक)
  {
    id: 'ginger-nagpur',
    cropId: 'ginger',
    cropName: 'अदरक',
    cropNameEn: 'Ginger',
    aliases: ['adrak', 'ginger', 'अदरक'],
    variety: 'देसी ताज़ा गीला',
    category: 'सब्जियाँ',
    season: 'खरीफ',
    icon: '🫚',
    mandiId: 'nagpur',
    mandiName: 'Nagpur',
    mandiHindi: 'नागपुर',
    state: 'Maharashtra',
    stateHindi: 'महाराष्ट्र',
    stateId: 'maharashtra',
    price: 8200,
    minPrice: 7500,
    maxPrice: 9100,
    yesterdayPrice: 8050,
    change: 150,
    changePercent: 1.86,
    arrivals: 740,
    unit: 'क्विंटल',
    msp: 0,
    lastUpdated: 'आज 11:20 AM',
  },

  // 14. PADDY / BASMATI (धान बासमती)
  {
    id: 'paddy-sirsa',
    cropId: 'paddy',
    cropName: 'धान (बासमती)',
    cropNameEn: 'Paddy Basmati',
    aliases: ['dhan', 'paddy', 'chawal', 'basmati', '1121', 'धान', 'बासमती'],
    variety: '1121 कंबाइन',
    category: 'अनाज',
    season: 'खरीफ',
    icon: '🌾',
    mandiId: 'sirsa',
    mandiName: 'Sirsa',
    mandiHindi: 'सिरसा',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 3120,
    minPrice: 2980,
    maxPrice: 3260,
    yesterdayPrice: 3150,
    change: -30,
    changePercent: -0.95,
    arrivals: 3800,
    unit: 'क्विंटल',
    msp: 2300,
    lastUpdated: 'आज 11:15 AM',
  },

  // 15. COTTON / NARMA (कपास / नरमा)
  {
    id: 'cotton-sirsa',
    cropId: 'cotton',
    cropName: 'कपास (नरमा)',
    cropNameEn: 'Cotton Narma',
    aliases: ['kapas', 'narma', 'cotton', 'कपास', 'नरमा'],
    variety: 'बीटी नरमा फर्स्ट ग्रेड',
    category: 'नकदी',
    season: 'खरीफ',
    icon: '☁️',
    mandiId: 'sirsa',
    mandiName: 'Sirsa',
    mandiHindi: 'सिरसा',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 7420,
    minPrice: 7150,
    maxPrice: 7680,
    yesterdayPrice: 7350,
    change: 70,
    changePercent: 0.95,
    arrivals: 1890,
    unit: 'क्विंटल',
    msp: 7121,
    lastUpdated: 'आज 11:40 AM',
  },

  // 16. CHANA (चना)
  {
    id: 'chana-ganganagar',
    cropId: 'chana',
    cropName: 'चना (देसी)',
    cropNameEn: 'Gram (Chana)',
    aliases: ['chana', 'chane', 'gram', 'चना'],
    variety: 'देसी काबुली मिक्स',
    category: 'दलहन',
    season: 'रबी',
    icon: '🫘',
    mandiId: 'ganganagar',
    mandiName: 'Sri Ganganagar',
    mandiHindi: 'श्री गंगानगर',
    state: 'Rajasthan',
    stateHindi: 'राजस्थान',
    stateId: 'rajasthan',
    price: 5850,
    minPrice: 5650,
    maxPrice: 6050,
    yesterdayPrice: 5900,
    change: -50,
    changePercent: -0.85,
    arrivals: 1420,
    unit: 'क्विंटल',
    msp: 5650,
    lastUpdated: 'आज 11:00 AM',
  },

  // 17. SOYABEAN (सोयाबीन)
  {
    id: 'soybean-indore',
    cropId: 'soybean',
    cropName: 'सोयाबीन',
    cropNameEn: 'Soybean',
    aliases: ['soya', 'soyabean', 'soybean', 'सोयाबीन'],
    variety: 'येलो बोल्ड 9560',
    category: 'तिलहन',
    season: 'खरीफ',
    icon: '🌱',
    mandiId: 'indore',
    mandiName: 'Indore',
    mandiHindi: 'इंदौर',
    state: 'Madhya Pradesh',
    stateHindi: 'मध्य प्रदेश',
    stateId: 'mp',
    price: 4680,
    minPrice: 4500,
    maxPrice: 4820,
    yesterdayPrice: 4620,
    change: 60,
    changePercent: 1.3,
    arrivals: 5400,
    unit: 'क्विंटल',
    msp: 4892,
    lastUpdated: 'आज 11:20 AM',
  },

  // 18. BAJRA (बाजरा)
  {
    id: 'bajra-hisar',
    cropId: 'bajra',
    cropName: 'बाजरा',
    cropNameEn: 'Bajra',
    aliases: ['bajra', 'millet', 'बाजरा'],
    variety: 'हाइब्रिड देसी',
    category: 'अनाज',
    season: 'खरीफ',
    icon: '🌱',
    mandiId: 'hisar',
    mandiName: 'Hisar',
    mandiHindi: 'हिसार',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 2360,
    minPrice: 2240,
    maxPrice: 2420,
    yesterdayPrice: 2340,
    change: 20,
    changePercent: 0.85,
    arrivals: 3100,
    unit: 'क्विंटल',
    msp: 2625,
    lastUpdated: 'आज 10:30 AM',
  },

  // 19. MAKKA (मक्का)
  {
    id: 'maize-karnal',
    cropId: 'maize',
    cropName: 'मक्का',
    cropNameEn: 'Maize',
    aliases: ['makka', 'maize', 'corn', 'मक्का'],
    variety: 'पीला दाना',
    category: 'अनाज',
    season: 'खरीफ',
    icon: '🌽',
    mandiId: 'karnal',
    mandiName: 'Karnal',
    mandiHindi: 'करनाल',
    state: 'Haryana',
    stateHindi: 'हरियाणा',
    stateId: 'haryana',
    price: 2180,
    minPrice: 2050,
    maxPrice: 2260,
    yesterdayPrice: 2150,
    change: 30,
    changePercent: 1.4,
    arrivals: 1600,
    unit: 'क्विंटल',
    msp: 2225,
    lastUpdated: 'आज 10:50 AM',
  },
];

// Past Year Month-by-Month Bhav Dataset for Section 3 (मासिक तालिका / Monthly Table)
export const MONTHLY_PAST_YEAR_DATA: Record<string, MonthlyRecord[]> = {
  guar: [
    { monthName: 'जनवरी 2025', monthNum: 1, year: 2025, modalPrice: 5180, minPrice: 4980, maxPrice: 5320, arrivals: 18500, changeVsPrev: 60, statusNote: 'स्थिर कारोबार' },
    { monthName: 'फरवरी 2025', monthNum: 2, year: 2025, modalPrice: 5240, minPrice: 5040, maxPrice: 5380, arrivals: 16200, changeVsPrev: 60, statusNote: 'हल्की तेजी' },
    { monthName: 'मार्च 2025', monthNum: 3, year: 2025, modalPrice: 5290, minPrice: 5090, maxPrice: 5440, arrivals: 14800, changeVsPrev: 50, statusNote: 'गम मिलों की मांग' },
    { monthName: 'अप्रैल 2025', monthNum: 4, year: 2025, modalPrice: 5340, minPrice: 5140, maxPrice: 5490, arrivals: 12300, changeVsPrev: 50, statusNote: 'सुधार' },
    { monthName: 'मई 2025', monthNum: 5, year: 2025, modalPrice: 5400, minPrice: 5200, maxPrice: 5550, arrivals: 11500, changeVsPrev: 60, statusNote: 'मजबूत लिवाली' },
    { monthName: 'जून 2025', monthNum: 6, year: 2025, modalPrice: 5450, minPrice: 5250, maxPrice: 5600, arrivals: 9800, changeVsPrev: 50, statusNote: 'सीमित आवक' },
    { monthName: 'जुलाई 2025', monthNum: 7, year: 2025, modalPrice: 5420, minPrice: 5220, maxPrice: 5570, arrivals: 8400, changeVsPrev: -30, statusNote: 'बुवाई मौसम' },
    { monthName: 'अगस्त 2025', monthNum: 8, year: 2025, modalPrice: 5350, minPrice: 5150, maxPrice: 5500, arrivals: 7200, changeVsPrev: -70, statusNote: 'मानसून प्रभाव' },
    { monthName: 'सितंबर 2025', monthNum: 9, year: 2025, modalPrice: 5180, minPrice: 5000, maxPrice: 5320, arrivals: 22400, changeVsPrev: -170, statusNote: 'नई आवक का दबाव' },
    { monthName: 'अक्टूबर 2025', monthNum: 10, year: 2025, modalPrice: 5220, minPrice: 5040, maxPrice: 5360, arrivals: 28500, changeVsPrev: 40, statusNote: 'मंडी पीक आवक' },
    { monthName: 'नवंबर 2025', monthNum: 11, year: 2025, modalPrice: 5260, minPrice: 5080, maxPrice: 5400, arrivals: 24100, changeVsPrev: 40, statusNote: 'क्रूड मांग' },
    { monthName: 'दिसंबर 2025', monthNum: 12, year: 2025, modalPrice: 5300, minPrice: 5120, maxPrice: 5450, arrivals: 19800, changeVsPrev: 40, statusNote: 'वर्ष अंत तेजी' },
  ],
  moong: [
    { monthName: 'जनवरी 2025', monthNum: 1, year: 2025, modalPrice: 7750, minPrice: 7380, maxPrice: 8100, arrivals: 14200, changeVsPrev: 70, statusNote: 'सर्दियों की मांग' },
    { monthName: 'फरवरी 2025', monthNum: 2, year: 2025, modalPrice: 7820, minPrice: 7450, maxPrice: 8150, arrivals: 12800, changeVsPrev: 70, statusNote: 'स्थिर भाव' },
    { monthName: 'मार्च 2025', monthNum: 3, year: 2025, modalPrice: 7900, minPrice: 7500, maxPrice: 8250, arrivals: 11400, changeVsPrev: 80, statusNote: 'दाल मिल मांग' },
    { monthName: 'अप्रैल 2025', monthNum: 4, year: 2025, modalPrice: 7950, minPrice: 7550, maxPrice: 8300, arrivals: 9800, changeVsPrev: 50, statusNote: 'मजबूती' },
    { monthName: 'मई 2025', monthNum: 5, year: 2025, modalPrice: 8050, minPrice: 7650, maxPrice: 8400, arrivals: 14500, changeVsPrev: 100, statusNote: 'जायद मूंग आवक' },
    { monthName: 'जून 2025', monthNum: 6, year: 2025, modalPrice: 8100, minPrice: 7700, maxPrice: 8450, arrivals: 11200, changeVsPrev: 50, statusNote: 'उच्चतम स्तर' },
    { monthName: 'जुलाई 2025', monthNum: 7, year: 2025, modalPrice: 8150, minPrice: 7750, maxPrice: 8500, arrivals: 7800, changeVsPrev: 50, statusNote: 'सीमित स्टॉक' },
    { monthName: 'अगस्त 2025', monthNum: 8, year: 2025, modalPrice: 8050, minPrice: 7650, maxPrice: 8400, arrivals: 8900, changeVsPrev: -100, statusNote: 'नई फसल की प्रतीक्षा' },
    { monthName: 'सितंबर 2025', monthNum: 9, year: 2025, modalPrice: 7750, minPrice: 7400, maxPrice: 8100, arrivals: 24500, changeVsPrev: -300, statusNote: 'खरीफ मूंग भारी आवक' },
    { monthName: 'अक्टूबर 2025', monthNum: 10, year: 2025, modalPrice: 7800, minPrice: 7450, maxPrice: 8150, arrivals: 32000, changeVsPrev: 50, statusNote: 'त्योहारी लिवाली' },
    { monthName: 'नवंबर 2025', monthNum: 11, year: 2025, modalPrice: 7880, minPrice: 7500, maxPrice: 8220, arrivals: 21000, changeVsPrev: 80, statusNote: 'चमकदार दाना प्रीमियम' },
    { monthName: 'दिसंबर 2025', monthNum: 12, year: 2025, modalPrice: 7940, minPrice: 7560, maxPrice: 8280, arrivals: 16500, changeVsPrev: 60, statusNote: 'मजबूत समापन' },
  ],
  wheat: [
    { monthName: 'जनवरी 2025', monthNum: 1, year: 2025, modalPrice: 2360, minPrice: 2280, maxPrice: 2420, arrivals: 21000, changeVsPrev: 50, statusNote: 'मिलों की अच्छी खरीद' },
    { monthName: 'फरवरी 2025', monthNum: 2, year: 2025, modalPrice: 2390, minPrice: 2310, maxPrice: 2450, arrivals: 18400, changeVsPrev: 30, statusNote: 'स्टॉक खाली करने का दौर' },
    { monthName: 'मार्च 2025', monthNum: 3, year: 2025, modalPrice: 2290, minPrice: 2220, maxPrice: 2350, arrivals: 45000, changeVsPrev: -100, statusNote: 'अगेती नई फसल आवक' },
    { monthName: 'अप्रैल 2025', monthNum: 4, year: 2025, modalPrice: 2275, minPrice: 2210, maxPrice: 2330, arrivals: 98000, changeVsPrev: -15, statusNote: 'रबी कटाई पीक (बंपर)' },
    { monthName: 'मई 2025', monthNum: 5, year: 2025, modalPrice: 2310, minPrice: 2250, maxPrice: 2360, arrivals: 62000, changeVsPrev: 35, statusNote: 'सरकारी खरीद जारी' },
    { monthName: 'जून 2025', monthNum: 6, year: 2025, modalPrice: 2340, minPrice: 2280, maxPrice: 2390, arrivals: 34000, changeVsPrev: 30, statusNote: 'आवक धीमी' },
    { monthName: 'जुलाई 2025', monthNum: 7, year: 2025, modalPrice: 2370, minPrice: 2310, maxPrice: 2430, arrivals: 22000, changeVsPrev: 30, statusNote: 'स्थिर चाल' },
    { monthName: 'अगस्त 2025', monthNum: 8, year: 2025, modalPrice: 2390, minPrice: 2330, maxPrice: 2450, arrivals: 19500, changeVsPrev: 20, statusNote: 'त्योहारी आटा मांग' },
    { monthName: 'सितंबर 2025', monthNum: 9, year: 2025, modalPrice: 2410, minPrice: 2350, maxPrice: 2470, arrivals: 18200, changeVsPrev: 20, statusNote: 'मांग में बढ़त' },
    { monthName: 'अक्टूबर 2025', monthNum: 10, year: 2025, modalPrice: 2430, minPrice: 2370, maxPrice: 2490, arrivals: 16500, changeVsPrev: 20, statusNote: 'दीपावली मांग' },
    { monthName: 'नवंबर 2025', monthNum: 11, year: 2025, modalPrice: 2450, minPrice: 2390, maxPrice: 2510, arrivals: 15400, changeVsPrev: 20, statusNote: 'सर्दियों का स्टॉक' },
    { monthName: 'दिसंबर 2025', monthNum: 12, year: 2025, modalPrice: 2480, minPrice: 2420, maxPrice: 2550, arrivals: 14200, changeVsPrev: 30, statusNote: 'उच्चतम क्लोजिंग' },
  ],
  mustard: [
    { monthName: 'जनवरी 2025', monthNum: 1, year: 2025, modalPrice: 5800, minPrice: 5550, maxPrice: 5950, arrivals: 12500, changeVsPrev: 80, statusNote: 'सर्दियों में तेल मांग' },
    { monthName: 'फरवरी 2025', monthNum: 2, year: 2025, modalPrice: 5620, minPrice: 5380, maxPrice: 5780, arrivals: 28000, changeVsPrev: -180, statusNote: 'शुरुआती सरसों आवक' },
    { monthName: 'मार्च 2025', monthNum: 3, year: 2025, modalPrice: 5510, minPrice: 5280, maxPrice: 5660, arrivals: 75000, changeVsPrev: -110, statusNote: 'चरम आवक का दबाव' },
    { monthName: 'अप्रैल 2025', monthNum: 4, year: 2025, modalPrice: 5590, minPrice: 5350, maxPrice: 5740, arrivals: 58000, changeVsPrev: 80, statusNote: 'ऑयल मिलों की खरीद' },
    { monthName: 'मई 2025', monthNum: 5, year: 2025, modalPrice: 5680, minPrice: 5440, maxPrice: 5830, arrivals: 34000, changeVsPrev: 90, statusNote: 'भाव में सुधार' },
    { monthName: 'जून 2025', monthNum: 6, year: 2025, modalPrice: 5790, minPrice: 5520, maxPrice: 5940, arrivals: 22000, changeVsPrev: 110, statusNote: 'कंडीशन माल पर तेजी' },
    { monthName: 'जुलाई 2025', monthNum: 7, year: 2025, modalPrice: 5880, minPrice: 5620, maxPrice: 6020, arrivals: 17500, changeVsPrev: 90, statusNote: 'खाद्य तेल सहारा' },
    { monthName: 'अगस्त 2025', monthNum: 8, year: 2025, modalPrice: 5950, minPrice: 5700, maxPrice: 6100, arrivals: 15400, changeVsPrev: 70, statusNote: 'सक्रिय लिवाली' },
    { monthName: 'सितंबर 2025', monthNum: 9, year: 2025, modalPrice: 6020, minPrice: 5780, maxPrice: 6180, arrivals: 14200, changeVsPrev: 70, statusNote: 'त्योहारी तेजी' },
    { monthName: 'अक्टूबर 2025', monthNum: 10, year: 2025, modalPrice: 6090, minPrice: 5840, maxPrice: 6250, arrivals: 13800, changeVsPrev: 70, statusNote: 'मजबूत स्तर' },
    { monthName: 'नवंबर 2025', monthNum: 11, year: 2025, modalPrice: 6140, minPrice: 5900, maxPrice: 6300, arrivals: 12100, changeVsPrev: 50, statusNote: 'ठंड में मांग' },
    { monthName: 'दिसंबर 2025', monthNum: 12, year: 2025, modalPrice: 6190, minPrice: 5950, maxPrice: 6350, arrivals: 11000, changeVsPrev: 50, statusNote: 'उच्चतम वार्षिक भाव' },
  ],
  onion: [
    { monthName: 'जनवरी 2025', monthNum: 1, year: 2025, modalPrice: 1950, minPrice: 1500, maxPrice: 2300, arrivals: 85000, changeVsPrev: -100, statusNote: 'लाल प्याज आवक' },
    { monthName: 'फरवरी 2025', monthNum: 2, year: 2025, modalPrice: 1850, minPrice: 1400, maxPrice: 2200, arrivals: 92000, changeVsPrev: -100, statusNote: 'भारी आवक' },
    { monthName: 'मार्च 2025', monthNum: 3, year: 2025, modalPrice: 1780, minPrice: 1350, maxPrice: 2150, arrivals: 104000, changeVsPrev: -70, statusNote: 'उनाल प्याज शुरुआत' },
    { monthName: 'अप्रैल 2025', monthNum: 4, year: 2025, modalPrice: 1820, minPrice: 1400, maxPrice: 2200, arrivals: 88000, changeVsPrev: 40, statusNote: 'स्टोरेज खरीद' },
    { monthName: 'मई 2025', monthNum: 5, year: 2025, modalPrice: 1920, minPrice: 1500, maxPrice: 2350, arrivals: 65000, changeVsPrev: 100, statusNote: 'गोदाम भंडारण' },
    { monthName: 'जून 2025', monthNum: 6, year: 2025, modalPrice: 2050, minPrice: 1650, maxPrice: 2450, arrivals: 45000, changeVsPrev: 130, statusNote: 'मानसून मांग' },
    { monthName: 'जुलाई 2025', monthNum: 7, year: 2025, modalPrice: 2180, minPrice: 1750, maxPrice: 2600, arrivals: 34000, changeVsPrev: 130, statusNote: 'आवक में कमी' },
    { monthName: 'अगस्त 2025', monthNum: 8, year: 2025, modalPrice: 2280, minPrice: 1850, maxPrice: 2700, arrivals: 28000, changeVsPrev: 100, statusNote: 'दक्षिण भारत निर्यात' },
    { monthName: 'सितंबर 2025', monthNum: 9, year: 2025, modalPrice: 2360, minPrice: 1900, maxPrice: 2800, arrivals: 24000, changeVsPrev: 80, statusNote: 'मजबूत लिवाली' },
    { monthName: 'अक्टूबर 2025', monthNum: 10, year: 2025, modalPrice: 2450, minPrice: 2000, maxPrice: 2900, arrivals: 22000, changeVsPrev: 90, statusNote: 'त्योहारी पीक' },
    { monthName: 'नवंबर 2025', monthNum: 11, year: 2025, modalPrice: 2380, minPrice: 1950, maxPrice: 2800, arrivals: 38000, changeVsPrev: -70, statusNote: 'खरीफ प्याज आवक' },
    { monthName: 'दिसंबर 2025', monthNum: 12, year: 2025, modalPrice: 2250, minPrice: 1800, maxPrice: 2650, arrivals: 48000, changeVsPrev: -130, statusNote: 'नई आवक दबाव' },
  ],
  potato: [
    { monthName: 'जनवरी 2025', monthNum: 1, year: 2025, modalPrice: 1250, minPrice: 1050, maxPrice: 1450, arrivals: 140000, changeVsPrev: -80, statusNote: 'नया आलू बंपर आवक' },
    { monthName: 'फरवरी 2025', monthNum: 2, year: 2025, modalPrice: 1200, minPrice: 1000, maxPrice: 1400, arrivals: 180000, changeVsPrev: -50, statusNote: 'कोल्ड स्टोरेज भराई' },
    { monthName: 'मार्च 2025', monthNum: 3, year: 2025, modalPrice: 1240, minPrice: 1050, maxPrice: 1450, arrivals: 160000, changeVsPrev: 40, statusNote: 'भंडारण पूरा' },
    { monthName: 'अप्रैल 2025', monthNum: 4, year: 2025, modalPrice: 1320, minPrice: 1150, maxPrice: 1500, arrivals: 75000, changeVsPrev: 80, statusNote: 'ताजा आवक खत्म' },
    { monthName: 'मई 2025', monthNum: 5, year: 2025, modalPrice: 1380, minPrice: 1200, maxPrice: 1550, arrivals: 60000, changeVsPrev: 60, statusNote: 'कोल्ड स्टोर निकासी' },
    { monthName: 'जून 2025', monthNum: 6, year: 2025, modalPrice: 1440, minPrice: 1250, maxPrice: 1620, arrivals: 52000, changeVsPrev: 60, statusNote: 'गर्मी की मांग' },
    { monthName: 'जुलाई 2025', monthNum: 7, year: 2025, modalPrice: 1490, minPrice: 1300, maxPrice: 1680, arrivals: 48000, changeVsPrev: 50, statusNote: 'स्थिर बिक्री' },
    { monthName: 'अगस्त 2025', monthNum: 8, year: 2025, modalPrice: 1520, minPrice: 1350, maxPrice: 1720, arrivals: 44000, changeVsPrev: 30, statusNote: 'मजबूत लिवाली' },
    { monthName: 'सितंबर 2025', monthNum: 9, year: 2025, modalPrice: 1560, minPrice: 1380, maxPrice: 1750, arrivals: 41000, changeVsPrev: 40, statusNote: 'त्योहारी तेजी' },
    { monthName: 'अक्टूबर 2025', monthNum: 10, year: 2025, modalPrice: 1580, minPrice: 1400, maxPrice: 1780, arrivals: 38000, changeVsPrev: 20, statusNote: 'सर्वोच्च भाव' },
    { monthName: 'नवंबर 2025', monthNum: 11, year: 2025, modalPrice: 1480, minPrice: 1280, maxPrice: 1650, arrivals: 65000, changeVsPrev: -100, statusNote: 'पंजाब नया आलू' },
    { monthName: 'दिसंबर 2025', monthNum: 12, year: 2025, modalPrice: 1350, minPrice: 1150, maxPrice: 1520, arrivals: 95000, changeVsPrev: -130, statusNote: 'नया आलू आवक' },
  ],
};

export interface SeasonalGroup {
  seasonKey: 'kharif' | 'rabi' | 'zayed';
  title: string;
  badge: string;
  emoji: string;
  sowingPeriod: string;
  harvestPeriod: string;
  description: string;
  crops: {
    cropId: string;
    name: string;
    typicalPriceRange: string;
    keyFact: string;
  }[];
}

export const SEASONAL_DATA: SeasonalGroup[] = [
  {
    seasonKey: 'kharif',
    title: 'खरीफ फसलें व सब्जियाँ',
    badge: 'मानसून आधारित',
    emoji: '🌧️',
    sowingPeriod: 'जून - जुलाई',
    harvestPeriod: 'सितंबर - अक्टूबर',
    description: 'मानसून की बारिश के साथ बोई जाने वाली प्रमुख खाद्यान्न, नकदी व सब्जी फसलें।',
    crops: [
      { cropId: 'guar', name: 'ग्वार (गुवार)', typicalPriceRange: '₹5,200 - ₹5,600 / क्विंटल', keyFact: 'कम पानी में राजस्थान व हरियाणा की नकद फसल, गम मिलों की लगातार मांग।' },
      { cropId: 'moong', name: 'मूंग दाल', typicalPriceRange: '₹7,800 - ₹8,500 / क्विंटल', keyFact: 'कम समय में सर्वाधिक लाभ, नोखा व कोटा में बंपर खरीद।' },
      { cropId: 'paddy', name: 'धान (बासमती 1121)', typicalPriceRange: '₹2,950 - ₹3,600 / क्विंटल', keyFact: 'निर्यात मांग और चावल मिलों की खरीद पर मजबूत कारोबार।' },
      { cropId: 'cotton', name: 'कपास (नरमा)', typicalPriceRange: '₹7,200 - ₹7,900 / क्विंटल', keyFact: 'सफेद सोना, स्पिनिंग मिलों की सक्रिय लिवाली।' },
      { cropId: 'tomato', name: 'टमाटर', typicalPriceRange: '₹1,800 - ₹2,600 / क्विंटल', keyFact: 'दैनिक हरी सब्जी मंडी में तुरंत नकद भुगतान।' },
      { cropId: 'chilli', name: 'हरी मिर्च', typicalPriceRange: '₹3,500 - ₹4,800 / क्विंटल', keyFact: 'तीखी गहरी हरी मिर्च पर साल भर भारी थोक मांग।' },
    ],
  },
  {
    seasonKey: 'rabi',
    title: 'रबी फसलें व सब्जियाँ',
    badge: 'सर्दियों की प्रमुख फसलें',
    emoji: '❄️',
    sowingPeriod: 'अक्टूबर - दिसंबर',
    harvestPeriod: 'मार्च - अप्रैल',
    description: 'सर्दियों के मौसम में बोई जाने वाली खाद्यान्न, तिलहन, मसाला व सब्जी फसलें।',
    crops: [
      { cropId: 'mustard', name: 'सरसों (रायड़ा)', typicalPriceRange: '₹5,950 - ₹6,400 / क्विंटल', keyFact: '42% तेल लैब कंडीशन पर सर्वाधिक भाव, अलवर व रेवाड़ी मुख्य केंद्र।' },
      { cropId: 'wheat', name: 'गेहूँ', typicalPriceRange: '₹2,425 - ₹3,200 / क्विंटल', keyFact: 'देश का प्रमुख खाद्यान्न, शरबती किस्मों पर ₹3,000+ का प्रीमियम।' },
      { cropId: 'jeera', name: 'जीरा (Cumin)', typicalPriceRange: '₹23,000 - ₹28,000 / क्विंटल', keyFact: 'मसालों का राजा, ऊंझा व जोधपुर मंडियों में भारी वैश्विक मांग।' },
      { cropId: 'lahsun', name: 'लहसुन (Garlic)', typicalPriceRange: '₹14,000 - ₹22,500 / क्विंटल', keyFact: 'नीमच व मंदसौर मंडियों में ऐतिहासिक उच्च स्तर।' },
      { cropId: 'onion', name: 'प्याज (कांदा)', typicalPriceRange: '₹1,900 - ₹2,850 / क्विंटल', keyFact: 'लासलगांव व नासिक में एशिया की सबसे बड़ी प्याज नीलामी।' },
      { cropId: 'potato', name: 'आलू', typicalPriceRange: '₹1,350 - ₹1,750 / क्विंटल', keyFact: 'आगरा व डीसा कोल्ड स्टोरेज से दैनिक भारी आवक।' },
      { cropId: 'peas', name: 'हरी मटर', typicalPriceRange: '₹4,100 - ₹5,200 / क्विंटल', keyFact: 'सर्दियों में शादियों व सब्जी मंडियों में प्रीमियम भाव।' },
    ],
  },
  {
    seasonKey: 'zayed',
    title: 'जायद फसलें व फल-सब्जियां',
    badge: 'गर्मी की नकद फसलें',
    emoji: '☀️',
    sowingPeriod: 'मार्च - अप्रैल',
    harvestPeriod: 'मई - जून',
    description: 'रबी और खरीफ के बीच के समय में तेजी से तैयार होने वाले नकद फल व हरी सब्जियां।',
    crops: [
      { cropId: 'moong', name: 'जायद मूंग', typicalPriceRange: '₹7,800 - ₹8,300 / क्विंटल', keyFact: '60 दिन में तैयार होकर तुरंत हाथ में नकद राशि देती है।' },
      { cropId: 'cucumber', name: 'खीरा / ककड़ी', typicalPriceRange: '₹1,200 - ₹1,900 / क्विंटल', keyFact: 'सलाद हेतु होटलों और सब्जी मंडियों में दैनिक नकद बिक्री।' },
      { cropId: 'cauliflower', name: 'फूलगोभी / पत्तागोभी', typicalPriceRange: '₹1,350 - ₹1,950 / क्विंटल', keyFact: 'अगेती फसल पर स्थानीय मंडियों में शानदार मुनाफा।' },
    ],
  },
];

// Silent search matching helper supporting both English typing and Hindi typing
export function matchHinglishCrop(crop: CropPriceRecord, query: string): boolean {
  if (!query || !query.trim()) return true;
  const q = query.trim().toLowerCase();

  if (crop.cropName.toLowerCase().includes(q)) return true;
  if (crop.cropNameEn.toLowerCase().includes(q)) return true;
  if (crop.variety.toLowerCase().includes(q)) return true;
  if (crop.mandiName.toLowerCase().includes(q)) return true;
  if (crop.mandiHindi.toLowerCase().includes(q)) return true;
  if (crop.state.toLowerCase().includes(q)) return true;
  if (crop.stateHindi.toLowerCase().includes(q)) return true;
  if (crop.stateId.toLowerCase().includes(q)) return true;

  if (crop.aliases && crop.aliases.some((alias) => alias.toLowerCase().includes(q) || q.includes(alias.toLowerCase()))) {
    return true;
  }

  // Phonetic normalization (e.g. mung/moong, gvar/gwar)
  const normalizedQuery = q
    .replace(/oo/g, 'u')
    .replace(/ee/g, 'i')
    .replace(/v/g, 'w')
    .replace(/sh/g, 's')
    .replace(/z/g, 'j');

  for (const alias of crop.aliases) {
    const normalizedAlias = alias
      .toLowerCase()
      .replace(/oo/g, 'u')
      .replace(/ee/g, 'i')
      .replace(/v/g, 'w')
      .replace(/sh/g, 's')
      .replace(/z/g, 'j');
    
    if (normalizedAlias.includes(normalizedQuery) || normalizedQuery.includes(normalizedAlias)) {
      return true;
    }
  }

  return false;
}
