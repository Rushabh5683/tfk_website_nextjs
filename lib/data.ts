export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tags?: string[];
  veg?: boolean;
  signature?: boolean;
  spicy?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'maharashtrian',
    name: 'Maharashtrian',
    description: 'Authentic regional flavours from the heart of Maharashtra.',
    icon: '',
  },
  {
    id: 'punjabi',
    name: 'Punjabi',
    description: 'Rich, hearty and iconic dishes from Punjab.',
    icon: '',
  },
  {
    id: 'north-indian',
    name: 'North Indian',
    description: 'Aromatic biryanis, kebabs and tandoori specialities.',
    icon: '',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    description: 'Indo-Chinese favourites packed with bold wok flavour.',
    icon: '',
  },
  {
    id: 'mughlai',
    name: 'Mughlai',
    description: 'Royal Mughal recipes with creamy, fragrant gravies.',
    icon: '',
  },
  {
    id: 'kebabs',
    name: 'Kebabs & Starters',
    description: 'Smoky tandoor-grilled kebabs and irresistible starters.',
    icon: '',
  },
];

export const dishes: Dish[] = [
  {
    id: 'mutton-rogan-josh',
    name: 'Mutton Rogan Josh',
    description:
      'Slow-cooked tender mutton in a fragrant Kashmiri-style gravy with whole spices and a deep red hue.',
    price: 420,
    category: 'maharashtrian',
    image:
      'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Bestseller', 'Slow Cooked'],
    signature: true,
    spicy: true,
  },
  {
    id: 'chicken-sukka',
    name: 'Chicken Sukka',
    description:
      'Coastal Maharashtrian dry chicken with roasted coconut, fresh curry leaves and bold spices.',
    price: 320,
    category: 'maharashtrian',
    image:
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Coastal', 'Roasted Coconut'],
    signature: true,
    spicy: true,
  },
  {
    id: 'maharashtrian-thali',
    name: 'Maharashtrian Thali',
    description:
      'A complete traditional platter with bhakri, pithla, rice, thecha, solkadhi, papad and pickle.',
    price: 280,
    category: 'maharashtrian',
    image:
      'https://images.pexels.com/photos/7871342/pexels-photo-7871342.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Traditional', 'Family Pack'],
    signature: true,
    veg: true,
  },
  {
    id: 'paneer-kadhai',
    name: 'Paneer Kadhai',
    description:
      'Cottage cheese simmered in a freshly ground kadhai masala with crunchy bell peppers.',
    price: 280,
    category: 'punjabi',
    image:
      'https://images.pexels.com/photos/4443482/pexels-photo-4443482.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Fresh Paneer', 'Restaurant Favourite'],
    signature: true,
    veg: true,
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description:
      'Tandoori chicken in a velvety tomato-butter gravy with a hint of cream and crushed fenugreek.',
    price: 360,
    category: 'punjabi',
    image:
      'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Classic', 'Creamy'],
    spicy: false,
  },
  {
    id: 'pithla-bhakri',
    name: 'Pithla Bhakri',
    description:
      'Maharashtrian classic of slow-cooked black lentils in a creamy, spiced gravy, served with traditional jowar bhakri.',
    price: 220,
    category: 'Maharashtrian',
    image:
      '/images/6R1A2871.jpg',
    tags: ['Slow Cooked', 'Comfort'],
    veg: true,
  },
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Biryani',
    description:
      'Fragrant basmati layered with marinated meat, saffron and whole spices, sealed and dum-cooked.',
    price: 340,
    category: 'north-indian',
    image:
      'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Dum Cooked', 'Aromatic'],
    signature: true,
    spicy: true,
  },
  {
    id: 'noodle',
    name: 'Schezwan Noodles',
    description:
      'Wok-tossed noodles with crunchy vegetables and house-made schezwan sauce for fiery heat.',
    price: 220,
    category: 'chinese',
    image:
      '/images/noodles.jpg',
    tags: ['Tandoor', 'Smoky'],
    spicy: true,
  },
  {
    id: 'tandoori-platter',
    name: 'Sampurna Ahar Thali',
    description:
      'Sampurna Ahar Thali serves authentic Maharashtrian cuisine with a complete traditional thali, featuring fresh ingredients, rich flavors, and a satisfying home-style dining experience.',
    price: 580,
    category: 'north-indian',
    image:
      'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Sharing', 'Tandoor'],
    signature: true,
  },
  {
    id: 'angari-murgh-musallam',
    name: 'Angari Murgh Musallam',
    description:
      'Whole chicken marinated in royal Mughlai spices, stuffed and slow-cooked in a rich cashew gravy.',
    price: 520,
    category: 'mughlai',
    image:
      'https://images.pexels.com/photos/8697591/pexels-photo-8697591.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Royal Recipe', 'Signature'],
    signature: true,
    spicy: true,
  },
  {
    id: 'veg-manchurian',
    name: 'Veg Manchurian',
    description:
      'Crispy veg dumplings tossed in a tangy Indo-Chinese soy-garlic sauce with spring onion.',
    price: 240,
    category: 'chinese',
    image:
      'https://images.pexels.com/photos/6995445/pexels-photo-6995445.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Indo-Chinese', 'Tangy'],
    veg: true,
    spicy: true,
  },
  {
    id: 'schezwan-noodles',
    name: 'Schezwan Noodles',
    description:
      'Wok-tossed noodles with crunchy vegetables and house-made schezwan sauce for fiery heat.',
    price: 220,
    category: 'chinese',
    image:
      'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Wok-Tossed', 'Spicy'],
    veg: true,
    spicy: true,
  },
  {
    id: 'hakka-noodles',
    name: 'Hakka Noodles',
    description:
      'Stir-fried noodles with shredded vegetables, soy and a smoky wok finish.',
    price: 200,
    category: 'chinese',
    image:
      'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Classic'],
    veg: true,
  },
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    description:
      'Long-grain rice tossed with vegetables, soy and a hint of garlic for the perfect side.',
    price: 190,
    category: 'chinese',
    image:
      'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Light', 'Comfort'],
    veg: true,
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    description:
      'Cubes of cottage cheese marinated in spiced yogurt, char-grilled with peppers and onions.',
    price: 260,
    category: 'kebabs',
    image:
      'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Tandoor', 'Veg Favourite'],
    veg: true,
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta',
    description:
      'Soft paneer-potato dumplings in a silky cashew and cream gravy — pure Mughlai indulgence.',
    price: 290,
    category: 'mughlai',
    image:
      'https://images.pexels.com/photos/6002294/pexels-photo-6002294.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Creamy', 'Mild'],
    veg: true,
  },
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: 'Food' | 'Ambience' | 'Restaurant' | 'Events';
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/starter.jpg',
    alt: 'Veg Starter Platters',
    category: 'Food',
    width: 900,
    height: 1200,
  },
  {
    id: 'g2',
    src: '/images/6R1A2709.jpg',
    alt: 'Restaurant Seating Ambience',
    category: 'Ambience',
    width: 900,
    height: 600,
  },
  {
    id: 'g3',
    src: '/images/PXL_20230718_095426965.jpg',
    alt: 'Elegant restaurant Outside View with warm lighting and inviting entrance',
    category: 'Restaurant',
    width: 900,
    height: 1200,
  },
  {
    id: 'g4',
    src: '/images/noodles.jpg',
    alt: 'Hakka Noodles with veggies and sauces',
    category: 'Food',
    width: 900,
    height: 600,
  },
  {
    id: 'g5',
    src: '/images/aloo vadi.jpg',
    alt: 'Maharashtrian Aloo Vadi with chutney and salad',
    category: 'Food',
    width: 900,
    height: 600,
  },
  {
    id: 'g6',
    src: '/images/6R1A2718.jpg',
    alt: 'Family dining ambience with warm lighting and cozy seating',
    category: 'Ambience',
    width: 900,
    height: 600,
  },
  {
    id: 'g7',
    src: '/images/panner.jpg',
    alt: 'Tandoori paneer tikka with mint chutney and salad',
    category: 'Food',
    width: 900,
    height: 600,
  },
  {
    id: 'g8',
    src: '/images/frontview.jpg',
    alt: 'Restaurant Entrance ',
    category: 'Ambience',
    width: 900,
    height: 1200,
  },
  {
    id: 'g9',
    src: '/images/6R1A2712 (1).jpg',
    alt: 'Asthetic Ambience',
    category: 'Ambience',
    width: 900,
    height: 600,
  },
  {
    id: 'g10',
    src: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hyderabadi biryani in a copper bowl',
    category: 'Food',
    width: 900,
    height: 1200,
  },
  {
    id: 'g11',
    src: '/images/6R1A2826.jpg',
    alt: 'Chicken Tikka',
    category: 'Food',
    width: 900,
    height: 600,
  },
  {
    id: 'g12',
    src: '/images/6R1A2832.jpg',
    alt: 'Signature Dish',
    category: 'Food',
    width: 900,
    height: 1200,
  },
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Pooja Khatri',
    location: 'Pune',
    rating: 5,
    initials: 'RP',
    date: '2 weeks ago',
    text: "Farmer's Kitchen – A Peaceful Delight Visited Farmer’s Kitchen recently and had a really pleasant experience. The ambience is calm, clean, and beautifully done, making it a perfect spot for a relaxed meal.The washrooms were hygienic, smelled fresh, and even had music playing — a small but thoughtful touch!. The food was tasty, well-prepared, and priced reasonably. We didn’t have to wait too long for service, which was a big plus.There’s ample parking space available right outside. For families, it’s a great place too — there’s a garden, a slide, and a jhula for kids to enjoy while you dine.Overall, a peaceful place with good food, great atmosphere, and family-friendly vibes. Would definitely recommend!",
  },
  {
    id: 't2',
    name: 'Sreekesh SV',
    location: 'Satara',
    rating: 5,
    initials: 'SD',
    date: '1 month ago',
    text: "From the moment I walked in, I was greeted with warm hospitality and a cozy atmosphere. The rustic decor and welcoming ambiance set the stage for a memorable dining experience.The menu boasts a diverse selection of dishes, catering to every palate. Whether you're craving comfort food classics or adventurous culinary creations, Farmer's Kitchen has something for everyone. The ingredients were fresh, the flavors were robust, and each dish was expertly prepared with care.Whether you're passing through or looking for a destination dining experience, I highly recommend stopping by this hidden gem along the Pune Bangalore highway. You won't be disappointed.",
  },
  {
    id: 't3',
    name: 'Akki',
    location: 'Mumbai',
    rating: 4,
    initials: 'AK',
    date: '3 weeks ago',
    text: "We randomly stopped here and didn't have much expectations but after tasting their food it surpassed all of our expectations firstly their service is top notch very prompt and responsive people they cater to even small personal requests. Food is good as it gets we ordered murg mussallam, mutton Thali and chicken thali along with rabdi each dish were mouth watering and I was amazed with the quantity the portion size clearly justifies they price point.Facilities are great and maintained huge open space neat and clean washrooms.Overall if you are looking for a good place to eat keep this place bookmarked.",
  },
  {
    id: 't4',
    name: 'Prabhat Yadav',
    location: 'Bengaluru',
    rating: 5,
    initials: 'PS',
    date: '2 months ago',
    text: "My experience with farmer's kitchen was really pleasant and wholesome. The food was topnotch and so was the service. You can opt to eat indoors or outdoors, we chose to eat outdoors and the view was stunning seeing the blue sky and large clouds breeze past in the sky. Overall it was a memorable experience for me and my family"
  },
  {
    id: 't5',
    name: 'Deepali Tumbre',
    location: 'Pune',
    rating: 5,
    initials: 'KM',
    date: '1 week ago',
    text: "Best restaurant to enjoy authentic Maharastian thali. Must try Puranpoli, it's perfect texture, filling & taste is amazing. I would rate 5/5 for this restaurant for its yum food, hygienic & overall service.The staff is also very polite. Request to start another branch in Mahabaleshwar, since there is absolutely no restaurant that serves such authentic maharashtrian food."
  },
  {
    id: 't6',
    name: 'Neha A',
    location: 'Kolhapur',
    rating: 4,
    initials: 'AN',
    date: '3 months ago',
    text: "It is a super clean, hygienic hotel with good food. Decor and ambience like a theme restaurant in the city. Super clean and newly constructed washroom, which even had music. Pleasantly surprised by this rare find on the highway! Highly recommended.",
  },
];

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 'f1',
    question: "What are the opening hours of The Farmer's Kitchen?",
    answer:
      "We're open daily from 11:00 AM to 11:00 PM, serving lunch, dinner & snacks throughout the week.",
  },
  {
    id: 'f2',
    question: 'Which cuisines do you serve?',
    answer:
      'We serve Maharashtrian, Punjabi, North Indian, Chinese,Tandoori, and family-style dining favorites.',
  },
  {
    id: 'f3',
    question: 'Do you accept table reservations?',
    answer:
      'Yes, reservations are available for families, groups, birthdays, and special occasions.',
  },
  {
    id: 'f4',
    question: 'Is parking available at the restaurant?',
    answer:
      'Yes, we offer ample parking space for cars, bikes, and travelers visiting from the highway.',
  },
  {
    id: 'f5',
    question: 'What are your must-try dishes?',
    answer:
      'Our guests love Mutton Rogan Josh, Chicken Sukka, Angari Murgh Musallam, Paneer Kadhai, Maharashtrian Thali, and Sampurna Ahar Thali, Puneri Thali, TFK Chef Spl Veg/Non-veg Thali & Tandoori Platters.',
  },
  {
    id: 'f6',
    question: 'Is The Farmer\'s Kitchen family-friendly?',
    answer:
      'Absolutely. We provide comfortable seating, a welcoming atmosphere, and dishes suitable for guests of all ages.',
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
};

export const stats: Stat[] = [
  { label: 'Google Rating', value: 4.2, suffix: '+', prefix: '' },
  { label: 'Happy Guests', value: 50, suffix: 'K+' },
  { label: 'Signature Dishes', value: 40, suffix: '+' },
  { label: 'Years of Hospitality', value: 7, suffix: '+' },
];

export type WhyChooseItem = {
  icon: string;
  title: string;
  description: string;
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: 'Leaf',
    title: 'Fresh Ingredients',
    description: 'Fresh vegetables, quality meats, and handpicked spices selected daily for exceptional taste.',
  },
  {
    icon: 'Scroll',
    title: 'Authentic Regional Flavors',
    description: 'Traditional Maharashtrian, Punjabi, North Indian, and Chinese dishes prepared with time-tested recipes.',
  },
  {
    icon: 'Users',
    title: 'Perfect For Families',
    description: 'Comfortable seating, welcoming service, and a dining experience everyone can enjoy.',
  },
  {
    icon: 'Sparkles',
    title: 'Warm & Elegant Ambience',
    description: 'A relaxing atmosphere designed for celebrations, gatherings, and memorable meals.',
  },
  {
    icon: 'MapPin',
    title: 'Convenient Highway Stop',
    description: 'Located in Shirwal with ample parking, making it the perfect stop for travelers and families.',
  },
  {
    icon: 'Heart',
    title: 'Hospitality From The Heart',
    description: 'Friendly service and genuine care that make every guest feel valued.',
  },
  {
    icon: 'Zap',
    title: 'Quick & Efficient Service',
    description: 'Freshly prepared meals served promptly without compromising quality.',
  },
  {
    icon: 'Globe',
    title: 'Flavors For Every Craving',
    description: 'Maharashtrian, Punjabi, North Indian, Chinese, and Tandoori specialties under one roof.',
  },
];
