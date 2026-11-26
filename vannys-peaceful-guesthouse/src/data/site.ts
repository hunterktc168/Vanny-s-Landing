export const SITE_URL =
  'https://vannys-peaceful-guesthouse.example.com' as const;

export const contentStatus = {
  photosPending: true,
  domainPending: true,
} as const;

export const contact = {
  phoneDisplay: '+855 12 733 319',
  phoneHref: 'tel:+85512733319',
  whatsappDisplay: '+855 97 901 97 97',
  whatsappHref:
    'https://wa.me/855979019797?text=Hello%20Vanny,%20I%20would%20like%20to%20book%20a%20room.',
  telegramDisplay: '+855 93 73 33 19',
  telegramHref: 'https://t.me/%2B85593733319',
  emailDisplay: 'houvannysun@hotmail.com',
  emailHref: 'mailto:houvannysun@hotmail.com',
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=Vanny%27s%20Peaceful%20Guesthouse%2C%20No.58%2C%20Street%20440%2C%20Toul%20Tum%20Pong%201%2C%20Khan%20Chamkarmon%2C%20Phnom%20Penh%2C%20Cambodia',
} as const;

export const address = {
  street: 'No.58, Street 440',
  sangkat: 'Toul Tum Pong 1',
  khan: 'Khan Chamkarmon',
  city: 'Phnom Penh',
  country: 'Cambodia',
  full: 'No.58, Street 440, Toul Tum Pong 1, Khan Chamkarmon, Chamkar Mon, Phnom Penh, Cambodia',
} as const;

export const hours = {
  checkIn: '2:00 PM – 9:30 PM',
  checkOut: '6:00 AM – 11:30 AM',
} as const;

export const rating = {
  score: 8.0,
  outOf: 10,
  reviewCount: 238,
  label: 'based on public listing reviews',
  subscores: [
    { label: 'Location', score: 8.6 },
    { label: 'Cleanliness', score: 7.9 },
    { label: 'Value for money', score: 8.6 },
  ],
} as const;

export const amenities = [
  'Adults-only rooms',
  'Non-smoking rooms',
  'Free WiFi',
  'Listed WiFi speed: 32 Mbps',
  'Air conditioning in some room categories',
  'Refrigerator',
  'Electric kettle',
  'Shared bathroom options',
  'Private bathroom option',
] as const;

export type Room = {
  slug: string;
  name: string;
  bed: string;
  bathroom: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
};

export const rooms: readonly Room[] = [
  {
    slug: 'budget-double',
    name: 'Budget Double Room',
    bed: '1 queen bed',
    bathroom: 'Shared bathroom',
    features: [
      'Wardrobe or closet',
      'Free toiletries',
      'Shower',
      'Refrigerator',
      'Electric kettle',
      'Free WiFi',
    ],
    image: '/images/rooms/budget-double.jpg',
    imageAlt:
      'Budget Double Room at Vanny’s Peaceful Guesthouse with a queen bed and shared bathroom access',
  },
  {
    slug: 'shared-ac-double',
    name: 'Double Room with Shared Bathroom',
    bed: '1 queen bed',
    bathroom: 'Shared bathroom',
    features: [
      'Air conditioning',
      'Wardrobe or closet',
      'Free toiletries',
      'Shower',
      'Refrigerator',
      'Electric kettle',
      'Free WiFi',
    ],
    image: '/images/rooms/shared-ac-double.jpg',
    imageAlt:
      'Air-conditioned Double Room with shared bathroom at Vanny’s Peaceful Guesthouse',
  },
  {
    slug: 'private-ac-double',
    name: 'Double Room with Private Bathroom',
    bed: '1 queen bed',
    bathroom: 'Private attached bathroom',
    features: [
      'Air conditioning',
      'Wardrobe or closet',
      'Drying rack for clothing',
      'Refrigerator',
      'Electric kettle',
      'Dining table',
      'Free WiFi',
    ],
    image: '/images/rooms/private-ac-double.jpg',
    imageAlt:
      'Double Room with private attached bathroom and air conditioning at Vanny’s Peaceful Guesthouse',
  },
] as const;

export type NearbyPlace = {
  name: string;
  distance: string;
  walk?: string;
};

export const nearby: readonly NearbyPlace[] = [
  { name: 'Tuol Sleng Genocide Museum', distance: 'approx. 1.2 km', walk: 'about 14 min walk' },
  { name: 'Sovanna Phum Art Association & Art Gallery', distance: 'approx. 1.2 km' },
  { name: 'Moha Montrei Pagoda', distance: 'approx. 2.2 km' },
  { name: 'Royal Palace Phnom Penh', distance: 'approx. 4.1 km' },
  { name: 'Riverside Park', distance: 'approx. 4.5 km' },
  { name: 'Killing Fields of Choeung Ek', distance: 'approx. 9 km' },
  { name: 'Russian Market area', distance: 'nearby, per guest reviews' },
];

export type Review = {
  author: string;
  country: string;
  text: string;
};

export const reviews: readonly Review[] = [
  {
    author: 'Elena',
    country: 'Russia',
    text: 'Great budget hotel with everything you need, including a kettle, AC + fan, good WiFi, free water refill.',
  },
  {
    author: 'Colin',
    country: 'United States',
    text: 'Simple, clean, and hosted by a wonderful and gracious family!',
  },
  {
    author: 'William',
    country: 'Canada',
    text: 'Great location, awesome value! Vanny was super friendly and helped us with our stay.',
  },
  {
    author: 'Julia',
    country: 'United States',
    text: 'Very friendly, kind, and professional owners!',
  },
  {
    author: 'Aidan',
    country: 'United States',
    text: 'My room was clean, the AC was great, and the price was right.',
  },
] as const;

export const images = {
  hero: {
    src: '/images/hero.jpg',
    alt: 'Exterior or representative view of Vanny’s Peaceful Guesthouse in Phnom Penh',
  },
  og: {
    src: '/images/hero.jpg',
    alt: 'Vanny’s Peaceful Guesthouse',
  },
  map: {
    src: '/images/map/location-map.jpg',
    alt: 'Static map showing the location of Vanny’s Peaceful Guesthouse on Street 440, Toul Tum Pong 1',
  },
} as const;
