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
  id: 'breads',
  name: 'Breads',
  description: 'Freshly baked rotis, naans, kulchas and Indian breads served hot from the tandoor.',
  icon: '',
},
{
  id: 'rice',
  name: 'Rice & Noodles',
  description: 'Flavorful rice preparations, fried rice and wok-tossed noodles for every craving.',
  icon: '',
},
// {
//   id: 'north-indian',
//   name: 'North Indian',
//   description: 'Aromatic biryanis, kebabs and tandoori specialities.',
//   icon: '',
// },
{
  id: 'chinese',
  name: 'Chinese',
  description: 'Indo-Chinese favourites packed with bold wok flavour.',
  icon: '',
},
{
  id: 'starters',
  name: 'Starters',
  description: 'A delicious selection of veg and non-veg starters, packed with bold flavors and irresistible aromas.',
  icon: '',
},
{
  id: 'kebabs',
  name: 'Kebabs & Tandoor',
  description: 'Smoky tandoor-grilled kebabs and irresistible starters.',
  icon: '',
},
{
  id: 'soups',
  name: 'Soups',
  description: 'Warm, comforting soups crafted with fresh ingredients and rich flavours.',
  icon: '',
},
{
  id: 'salads',
  name: 'Salads & Raita',
  description: 'Fresh salads and refreshing raitas that perfectly complement every meal.',
  icon: '',
},
{
  id: 'desserts',
  name: 'Desserts',
  description: 'Traditional Indian sweets and delightful desserts to end your meal on a sweet note.',
  icon: '',
},
];

export const dishes: Dish[] = [
  //Maharshtrian Dishes
 {
  id: 'pithla',
  name: 'Pithla',
  description:
    'A classic Maharashtrian gram flour curry cooked with traditional spices, offering simple yet comforting homestyle flavours.',
  price: 165,
  category: 'maharashtrian',
  image: '/MenuImages/Pithla Bhakri.webp',
  tags: ['Traditional', 'Homestyle'],
  veg: true,
},

{
  id: 'lasooni-pithla',
  name: 'Lasooni Pithla',
  description:
    'A traditional Maharashtrian gram flour delicacy infused with roasted garlic, aromatic spices, and authentic rural flavours.',
  price: 175,
  category: 'maharashtrian',
  image: '/MenuImages/Pithla Bhakri.webp',
  tags: ['Traditional', 'Garlic Special'],
  veg: true,
},

{
  id: 'methi-pithla',
  name: 'Methi Pithla',
  description:
    'A wholesome Maharashtrian pithla prepared with fresh fenugreek leaves, gram flour, and rustic village-style seasonings.',
  price: 195,
  category: 'maharashtrian',
  image: '/MenuImages/Pithla Bhakri.webp',
  tags: ['Fenugreek', 'Traditional'],
  veg: true,
},

{
  id: 'varan',
  name: 'Varan',
  description:
    'A comforting Maharashtrian lentil preparation cooked with ghee and mild spices, served as a timeless family favourite.',
  price: 150,
  category: 'maharashtrian',
  image: '/MenuImages/Varan.webp',
  tags: ['Dal', 'Comfort Food'],
  veg: true,
},

{
  id: 'bharli-vangi',
  name: 'Bharli Vangi',
  description:
    'Tender baby brinjals stuffed with a flavourful blend of peanuts, coconut, and traditional Maharashtrian spices.',
  price: 175,
  category: 'maharashtrian',
  image: '/MenuImages/Bharla Vanga.webp',
  tags: ['Stuffed Brinjal', 'Traditional'],
  veg: true,
},

{
  id: 'matki-usal',
  name: 'Matki Usal',
  description:
    'Protein-rich sprouted matki beans simmered in a spicy Maharashtrian gravy, bursting with authentic regional flavours.',
  price: 175,
  category: 'maharashtrian',
  image: '/MenuImages/Matki Usal.webp',
  tags: ['Sprouts', 'Healthy'],
  veg: true,
},

{
  id: 'pivla-batata-bhaji',
  name: 'Pivla Batata Bhaji',
  description:
    'Traditional yellow potato curry tempered with mustard seeds, turmeric, and curry leaves for a homely Maharashtrian taste.',
  price: 175,
  category: 'maharashtrian',
  image: '/MenuImages/Pivla Batata Bhaji.webp',
  tags: ['Potato', 'Homestyle'],
  veg: true,
},

{
  id: 'kothimbir-vadi',
  name: 'Kothimbir Vadi',
  description:
    'Steamed and pan-fried coriander fritters made with gram flour and aromatic Maharashtrian spices.',
  price: 175,
  category: 'maharashtrian',
  image: '/MenuImages/KOthimbir Vadi.webp',
  tags: ['Snack', 'Traditional'],
  veg: true,
},
{
  id: 'gavraan-thali',
  name: 'Gavraan Thali',
  description:
    'A rustic Maharashtrian village-style feast featuring bhakri, seasonal bhaji, varan bhaat, thecha, kothimbir vadi, papad, loncha and chutney.',
  price: 295,
  category: 'maharashtrian',
  image: '/MenuImages/Gavran Thali.webp',
  tags: ['Village Special', 'Traditional Thali'],
  signature: false,
  veg: true,
},

{
  id: 'puneri-thali',
  name: 'Puneri Thali',
  description:
    'A delightful Pune-style thali served with puris, pivla batata bhaji, sweet dish, varan bhaat, papad and traditional accompaniments.',
  price: 340,
  category: 'maharashtrian',
  image: '/MenuImages/Puneri Thali.webp',
  tags: ['Pune Special', 'Traditional Thali'],
  signature: false,
  veg: true,
},

{
  id: 'sampurna-aahar-thali',
  name: 'Sampurna Aahar Thali',
  description:
    'A wholesome Maharashtrian meal featuring bhajis, bhakri, varan, rice, thecha, kothimbir vadi, papad, dry chutney and a sweet dish.',
  price: 390,
  category: 'maharashtrian',
  image: '/MenuImages/Sampurna Aahar Thali.webp',
  tags: ['Complete Meal', 'Best Seller'],
  signature: false,
  veg: true,
},

{
  id: 'puran-poli-thali',
  name: 'Puran Poli Thali',
  description:
    'A festive Maharashtrian thali featuring two authentic puran polis served with milk and jaggery, katachi amti, rice, papad, kurdai and traditional bhajis.',
  price: 450,
  category: 'maharashtrian',
  image: '/MenuImages/Puran Poli Thali.webp',
  tags: ['Festival Special', 'Best Seller'],
  signature: true,
  veg: true,
},
{
  id: 'punjabi-mini-thali',
  name: 'Punjabi Mini Thali',
  description:
    'A satisfying Punjabi meal featuring a paneer or vegetable preparation, dal, jeera rice, roti, salad, papad and traditional accompaniments.',
  price: 350,
  category: 'punjabi',
  image: '/MenuImages/Punjabi Mini Thali (1).webp',
  tags: ['Punjabi Special', 'Mini Thali'],
  signature: false,
  veg: true,
},

{
  id: 'tfk-chef-special-veg-thali',
  name: 'TFK Chef Special Veg Thali',
  description:
    'Our signature vegetarian feast featuring premium paneer preparation, seasonal vegetables, dal, rice, Indian breads, salad, papad and a sweet dish.',
  price: 480,
  category: 'punjabi',
  image: '/MenuImages/Tfk_Chef_Spl_Veg_Thali.webp',
  tags: ['Chef Special', 'Premium Thali'],
  signature: true,
  veg: true,
},
{
  id: 'paneer-angara-masala',
  name: 'Paneer Angara Masala',
  description:
    'Smoky paneer cubes cooked in a rich and spicy Angara-style gravy.',
  price: 310,
  category: 'punjabi',
  image: '/MenuImages/Panner.webp',
  tags: ['Smoky', 'Chef Special'],
  veg: true,
  spicy: true,
  signature: true,
},

{
  id: 'tfk-chef-special-non-veg-thali',
  name: 'TFK Chef Special Non-Veg Thali',
  description:
    'A grand chef-curated thali featuring signature chicken and mutton preparations, rice, Indian breads, salad, papad and traditional accompaniments.',
  price: 580,
  category: 'punjabi',
  image: '/MenuImages/TFK_CHEF_SPL_NON_VEG_THALI.webp',
  tags: ['Chef Special', 'Premium Non-Veg'],
  signature: true,
  spicy: true,
},

{
  id: 'maharashtrian-chicken-thali',
  name: 'Maharashtrian Chicken Thali',
  description:
    'A traditional Maharashtrian feast featuring Chicken Sukka, Chicken Rassa, bhakri, chapati, Indrayani rice, boiled egg, papad and authentic regional accompaniments.',
  price: 415,
  category: 'maharashtrian',
  image: '/MenuImages/Maharashtrian Chicken Thali.webp',
  tags: ['Traditional Thali', 'Chicken Special'],
  spicy: true,
},

{
  id: 'maharashtrian-mutton-thali',
  name: 'Maharashtrian Mutton Thali',
  description:
    'An authentic Maharashtrian thali served with Mutton Sukka, Mutton Rassa, bhakri, chapati, Indrayani rice, boiled egg and traditional accompaniments.',
  price: 490,
  category: 'maharashtrian',
  image: '/MenuImages/Maharashtrian Chicken Thali.webp',
  tags: ['Traditional Thali', 'Mutton Special'],
  spicy: true,
},

{
  id: 'maharashtrian-special-chicken-thali',
  name: 'Maharashtrian Special Chicken Thali',
  description:
    'Our premium chicken thali featuring Chicken Sukka, Chicken Rassa, Chicken Kheema, boiled egg, bhakri, chapati, Indrayani rice and signature Maharashtrian accompaniments.',
  price: 460,
  category: 'maharashtrian',
  image: '/MenuImages/Maharashtrian Chicken Thali.webp',
  tags: ['Chef Recommended', 'Premium Thali'],
  signature: true,
  spicy: true,
},

{
  id: 'maharashtrian-special-mutton-thali',
  name: 'Maharashtrian Special Mutton Thali',
  description:
    'A grand Maharashtrian feast featuring Mutton Sukka, Mutton Rassa, Mutton Kheema, bhakri, chapati, Indrayani rice, boiled egg and authentic village-style accompaniments.',
  price: 535,
  category: 'maharashtrian',
  image: '/MenuImages/Maharashtrian Chicken Thali.webp',
  tags: ['Premium Thali', 'Chef Special'],
  signature: true,
  spicy: true,
},



{
  id: 'chicken-sukka',
  name: 'Chicken Sukka',
  description:
    'A traditional Maharashtrian delicacy featuring tender chicken slow-cooked with roasted coconut, onions and aromatic village-style spices.',
  price: 380,
  category: 'maharashtrian',
  image: '/MenuImages/Chicken Sukka.webp',
  tags: ['Maharashtrian Special', 'Best Seller'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-rassa',
  name: 'Chicken Rassa',
  description:
    'A fiery Maharashtrian chicken curry prepared in a rich red gravy infused with authentic Kolhapuri spices.',
  price: 390,
  category: 'maharashtrian',
  image: '/MenuImages/Chicken Rasssa.webp',
  tags: ['Traditional', 'Spicy'],
  signature: true,
  spicy: true,
},

{
  id: 'mutton-sukka',
  name: 'Mutton Sukka',
  description:
    'Tender mutton slow-cooked with roasted coconut, fresh herbs and bold Maharashtrian spices for a rich dry preparation.',
  price: 450,
  category: 'maharashtrian',
  image: '/MenuImages/Chicken Sukka.webp',
  tags: ['Mutton Special', 'Traditional'],
  signature: true,
  spicy: true,
},

{
  id: 'mutton-rassa',
  name: 'Mutton Rassa',
  description:
    'An authentic Maharashtrian mutton curry served in a spicy, flavour-packed red gravy made with traditional regional masalas.',
  price: 490,
  category: 'maharashtrian',
  image: '/MenuImages/Chicken Rasssa.webp',
  tags: ['Mutton Special', 'Spicy'],
  signature: true,
  spicy: true,
},

{
  id: 'jeera-aloo',
  name: 'Jeera Aloo',
  description:
    'Golden potatoes sautéed with roasted cumin seeds, fresh herbs and traditional North Indian spices.',
  price: 230,
  category: 'punjabi',
  image: '/MenuImages/Jeera Aloo.webp',
  tags: ['Classic', 'Homestyle'],
  veg: true,
},

{
  id: 'aloo-gobi',
  name: 'Aloo Gobi',
  description:
    'A comforting combination of potatoes and cauliflower cooked with aromatic Punjabi spices.',
  price: 235,
  category: 'punjabi',
  image: '/MenuImages/Aloo Gobi.webp',
  tags: ['Traditional', 'Vegetarian'],
  veg: true,
},

{
  id: 'aloo-mutter',
  name: 'Aloo Mutter',
  description:
    'Tender potatoes and green peas simmered in a flavorful tomato-onion gravy.',
  price: 235,
  category: 'punjabi',
  image: '/MenuImages/Aloo Gobi.webp',
  tags: ['Classic', 'Comfort Food'],
  veg: true,
},

{
  id: 'dum-aloo',
  name: 'Dum Aloo',
  description:
    'Baby potatoes slow-cooked in a rich and aromatic gravy infused with traditional spices.',
  price: 270,
  category: 'punjabi',
  image: '/MenuImages/Aloo Gobi.webp',
  tags: ['Slow Cooked', 'Traditional'],
  veg: true,
},

{
  id: 'veg-handi',
  name: 'Veg Handi',
  description:
    'A rich medley of fresh vegetables cooked in a traditional handi-style gravy.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Handi.webp',
  tags: ['Handi Special', 'Popular'],
  veg: true,
},

{
  id: 'veg-lajawab',
  name: 'Veg Lajawab',
  description:
    'An indulgent vegetable preparation cooked in a creamy and flavorful chef-special gravy.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Lajawab.webp',
  tags: ['Chef Special', 'Rich'],
  veg: true,
},

{
  id: 'veg-kolhapuri',
  name: 'Veg Kolhapuri',
  description:
    'Mixed vegetables cooked in a fiery Kolhapuri-style gravy packed with bold spices.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Lajawab.webp',
  tags: ['Spicy', 'Popular'],
  veg: true,
  spicy: true,
},

{
  id: 'veg-maratha',
  name: 'Veg Maratha',
  description:
    'A flavorful blend of vegetables prepared in a spicy Maharashtrian-inspired gravy.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Lajawab.webp',
  tags: ['Spicy', 'Chef Recommended'],
  veg: true,
  spicy: true,
},

{
  id: 'veg-jalfrezi',
  name: 'Veg Jalfrezi',
  description:
    'Fresh vegetables tossed with onions, capsicum and tangy tomato-based spices.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Lajawab.webp',
  tags: ['Tangy', 'Classic'],
  veg: true,
},

{
  id: 'veg-hyderabadi',
  name: 'Veg Hyderabadi',
  description:
    'A royal vegetable curry prepared with rich spices and authentic Hyderabadi flavors.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Lajawab.webp',
  tags: ['Royal', 'Rich'],
  veg: true,
},

{
  id: 'veg-kadhai',
  name: 'Veg Kadhai',
  description:
    'Seasonal vegetables cooked in freshly ground kadhai masala with onions and capsicum.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Veg Lajawab.webp',
  tags: ['Kadhai Special', 'Popular'],
  veg: true,
},

{
  id: 'mutter-paneer',
  name: 'Mutter Paneer',
  description:
    'Soft paneer cubes and green peas simmered in a rich tomato-onion gravy.',
  price: 295,
  category: 'punjabi',
  image: '/MenuImages/Mutter Panner.webp',
  tags: ['Paneer Special', 'Classic'],
  veg: true,
},

{
  id: 'veg-kofta',
  name: 'Veg Kofta',
  description:
    'Delicate vegetable dumplings served in a rich and creamy North Indian gravy.',
  price: 310,
  category: 'punjabi',
  image: '/MenuImages/Veg Kofta.webp',
  tags: ['Creamy', 'Popular'],
  veg: true,
},



{
  id: 'paneer-kadhai',
  name: 'Paneer Kadhai',
  description:
    'Cottage cheese cooked with bell peppers in a freshly ground kadhai masala.',
  price: 320,
  category: 'punjabi',
  image: '/MenuImages/Panner.webp',
  tags: ['Bestseller', 'Kadhai Special'],
  veg: true,
  signature: true,
},

{
  id: 'paneer-khurchan',
  name: 'Paneer Khurchan',
  description:
    'Shredded paneer tossed with onions, capsicum and aromatic North Indian spices.',
  price: 310,
  category: 'punjabi',
  image: '/MenuImages/Panner.webp',
  tags: ['Chef Special', 'Popular'],
  veg: true,
},

{
  id: 'paneer-lasooni',
  name: 'Paneer Lasooni',
  description:
    'Paneer cubes cooked in a rich garlic-infused gravy with authentic Punjabi flavors.',
  price: 310,
  category: 'punjabi',
  image: '/MenuImages/Panner.webp',
  tags: ['Garlic Special'],
  veg: true,
},

{
  id: 'palak-paneer',
  name: 'Palak Paneer',
  description:
    'Fresh cottage cheese simmered in a creamy spinach gravy seasoned with traditional spices.',
  price: 310,
  category: 'punjabi',
  image: '/MenuImages/Palak Panner.webp',
  tags: ['Healthy', 'Popular'],
  veg: true,
},

{
  id: 'paneer-tikka-masala',
  name: 'Paneer Tikka Masala',
  description:
    'Char-grilled paneer tikka finished in a rich tomato-onion masala gravy.',
  price: 310,
  category: 'punjabi',
  image: '/MenuImages/Panner.webp',
  tags: ['Tandoori', 'Popular'],
  veg: true,
},

{
  id: 'dal-fry',
  name: 'Dal Fry',
  description:
    'A comforting Punjabi classic made with yellow lentils tempered with onions, tomatoes and aromatic spices.',
  price: 270,
  category: 'punjabi',
  image: '/MenuImages/Dal Fry.webp',
  tags: ['Punjabi Classic', 'Comfort Food'],
  veg: true,
},

{
  id: 'dal-tadka',
  name: 'Dal Tadka',
  description:
    'Slow-cooked lentils finished with a sizzling tempering of cumin, garlic and traditional Punjabi spices.',
  price: 285,
  category: 'punjabi',
  image: '/MenuImages/Dal Fry.webp',
  tags: ['Traditional', 'Popular'],
  veg: true,
},

{
  id: 'lasooni-dal-tadka',
  name: 'Lasooni Dal Tadka',
  description:
    'Rich lentils infused with roasted garlic and topped with a flavorful tadka for a bold Punjabi taste.',
  price: 295,
  category: 'punjabi',
  image: '/MenuImages/Dal Fry.webp',
  tags: ['Garlic Special', 'Chef Recommended'],
  veg: true,
  signature: true,
},

{
  id: 'paneer-bhurji',
  name: 'Paneer Bhurji',
  description:
    'Crumbled paneer sautéed with onions, tomatoes and aromatic Indian spices.',
  price: 320,
  category: 'punjabi',
  image: '/MenuImages/Panner Burgi.webp',
  tags: ['Homestyle', 'Protein Rich'],
  veg: true,
},

{
  id: 'kaju-masala',
  name: 'Kaju Masala',
  description:
    'Premium cashews cooked in a rich and creamy tomato-based gravy.',
  price: 320,
  category: 'punjabi',
  image: '/MenuImages/Kaju Masala.webp',
  tags: ['Premium', 'Rich'],
  veg: true,
},

{
  id: 'mushroom-do-pyaza',
  name: 'Mushroom Do Pyaza',
  description:
    'Fresh mushrooms cooked with double onions in a flavorful Punjabi-style gravy.',
  price: 320,
  category: 'punjabi',
  image: '/MenuImages/mushroom-do-pyaza.webp',
  tags: ['Mushroom Special'],
  veg: true,
},

{
  id: 'malai-kofta',
  name: 'Malai Kofta',
  description:
    'Soft paneer and potato dumplings served in a luxurious creamy cashew gravy.',
  price: 330,
  category: 'punjabi',
  image: '/MenuImages/Malai Kofta.webp',
  tags: ['Creamy', 'Popular'],
  veg: true,
},

{
  id: 'paneer-butter-masala',
  name: 'Paneer Butter Masala',
  description:
    'Soft paneer cubes simmered in a rich tomato-butter gravy finished with cream and aromatic spices.',
  price: 320,
  category: 'punjabi',
  image: '/MenuImages/Panner.webp',
  tags: ['Bestseller', 'Creamy'],
  veg: true,
  signature: true,
},

{
  id: 'butter-chicken',
  name: 'Butter Chicken',
  description:
    'Tender tandoori chicken simmered in a velvety tomato-butter gravy enriched with cream and aromatic spices.',
  price: 440,
  category: 'punjabi',
  image: '/MenuImages/Butter Chicken.webp',
  tags: ['Bestseller', 'Creamy'],
  signature: true,
},

{
  id: 'chicken-tikka-masala',
  name: 'Chicken Tikka Masala',
  description:
    'Juicy chicken tikka cooked in a rich tomato-onion gravy with authentic Punjabi flavors.',
  price: 415,
  category: 'punjabi',
  image: '/MenuImages/Chicken Tikka Masala.webp',
  tags: ['Tandoori', 'Popular'],
  spicy: true,
},

{
  id: 'chicken-bhuna',
  name: 'Chicken Bhuna',
  description:
    'Chicken slow-cooked with onions, tomatoes and roasted spices for a rich and intensely flavorful curry.',
  price: 415,
  category: 'punjabi',
  image: '/MenuImages/Chicken Tikka Masala.webp',
  tags: ['Roasted Spices', 'Traditional'],
  spicy: true,
},

{
  id: 'angari-murgh-masala',
  name: 'Angari Murgh Masala',
  description:
    'Smoky chicken cooked in a fiery Angara-style gravy infused with roasted spices and bold flavors.',
  price: 425,
  category: 'punjabi',
  image: '/MenuImages/Angari Murgh Masala.webp',
  tags: ['Smoky', 'Chef Special'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-kadhai',
  name: 'Chicken Kadhai',
  description:
    'Tender chicken tossed with capsicum and onions in a freshly ground kadhai masala.',
  price: 425,
  category: 'punjabi',
  image: '/MenuImages/Chicken Kadhai.webp',
  tags: ['Kadhai Special', 'Popular'],
  spicy: true,
},

{
  id: 'chicken-kheema',
  name: 'Chicken Kheema',
  description:
    'Minced chicken cooked with onions, tomatoes and aromatic spices for a hearty Punjabi delicacy.',
  price: 460,
  category: 'punjabi',
  image: '/MenuImages/Chicken Kheema.webp',
  tags: ['Protein Rich', 'Traditional'],
  spicy: true,
},

{
  id: 'chicken-handi',
  name: 'Chicken Handi',
  description:
    'Chicken slow-cooked in a traditional handi with rich gravy, fresh herbs and flavorful spices.',
  price: 440,
  category: 'punjabi',
  image: '/MenuImages/Chicken Handi.webp',
  tags: ['Handi Special', 'Traditional'],
  spicy: true,
},

{
  id: 'murgh-lajawab',
  name: 'Murgh Lajawab',
  description:
    'A chef-special chicken preparation cooked in a rich creamy gravy with royal spices and premium ingredients.',
  price: 450,
  category: 'punjabi',
  image: '/images/Murgh Lajawab.webp',
  tags: ['Chef Special', 'Premium'],
  signature: true,
  spicy: true,
},

{
  id: 'mutton-rogan-josh',
  name: 'Mutton Rogan Josh',
  description:
    'Slow-cooked tender mutton in a fragrant Kashmiri-style gravy with whole spices and rich flavors.',
  price: 520,
  category: 'punjabi',
  image: '/images/Mutton Rogan Josh.webp',
  tags: ['Bestseller', 'Slow Cooked'],
  signature: true,
  spicy: true,
},

{
  id: 'mutton-handi',
  name: 'Mutton Handi',
  description:
    'Tender mutton simmered in a traditional handi with aromatic spices and a rich flavorful gravy.',
  price: 540,
  category: 'punjabi',
  image: '/images/Mutton Handi.webp',
  tags: ['Handi Special', 'Premium'],
  spicy: true,
},

{
  id: 'mutton-kheema',
  name: 'Mutton Kheema',
  description:
    'Finely minced mutton cooked with onions, tomatoes and traditional spices for a flavorful delicacy.',
  price: 460,
  category: 'punjabi',
  image: '/images/Mutton Kheema.webp',
  tags: ['Traditional', 'Protein Rich'],
  spicy: true,
},

{
  id: 'murgh-musallam',
  name: 'Murgh Musallam',
  description:
    'A royal Mughlai-inspired chicken delicacy cooked in a rich cashew gravy with aromatic spices and luxurious flavors.',
  price: 550,
  category: 'punjabi',
  image: '/images/Murgh Musallam.webp',
  tags: ['Royal Recipe', 'Signature'],
  signature: true,
  spicy: true,
},


//chinese starters

{
  id: 'veg-manchurian-dry',
  name: 'Veg Manchurian Dry',
  description:
    'Crispy vegetable dumplings tossed in a flavorful Indo-Chinese sauce with garlic, spring onions and aromatic spices.',
  price: 260,
  category: 'starters',
  image: '/images/Veg Manchurian Dry.webp',
  tags: ['Indo-Chinese', 'Popular'],
  veg: true,
  spicy: true,
},

{
  id: 'veg-65',
  name: 'Veg 65',
  description:
    'Crunchy vegetable bites coated in a spicy South Indian-style seasoning and fried to perfection.',
  price: 250,
  category: 'starters',
  image: '/images/Veg  65.webp',
  tags: ['Crispy', 'Spicy'],
  veg: true,
  spicy: true,
},

{
  id: 'paneer-chilli-dry',
  name: 'Paneer Chilli Dry',
  description:
    'Soft paneer cubes stir-fried with onions, capsicum and spicy chilli sauce for a bold Indo-Chinese flavor.',
  price: 310,
  category: 'starters',
  image: '/images/Panner Chilly Dry.webp',
  tags: ['Paneer Special', 'Chinese'],
  veg: true,
  spicy: true,
},

{
  id: 'honey-chilli-potatoes',
  name: 'Honey Chilli Potatoes',
  description:
    'Crispy potato fingers tossed in a sweet and spicy honey chilli glaze with sesame and spring onions.',
  price: 270,
  category: 'starters',
  image: '/images/Honey Chilli Potatoes.webp',
  tags: ['Sweet & Spicy', 'Popular'],
  veg: true,
},

{
  id: 'paneer-65',
  name: 'Paneer 65',
  description:
    'Crispy paneer cubes coated in a fiery blend of spices and herbs for a deliciously spicy starter.',
  price: 320,
  category: 'starters',
  image: '/images/Panner 65.webp',
  tags: ['Paneer Special', 'South Indian Style'],
  veg: true,
  spicy: true,
},

{
  id: 'mushroom-chilli',
  name: 'Mushroom Chilli',
  description:
    'Fresh mushrooms tossed with onions, capsicum and spicy chilli sauce for an irresistible Indo-Chinese delight.',
  price: 310,
  category: 'starters',
  image: '/images/Mushroom Chilli.webp',
  tags: ['Mushroom Special', 'Chinese'],
  veg: true,
  spicy: true,
},

{
  id: 'paneer-crispy',
  name: 'Paneer Crispy',
  description:
    'Golden-fried paneer strips tossed with crunchy vegetables and chef-special spicy sauces.',
  price: 330,
  category: 'starters',
  image: '/images/Panner Chilly Dry.webp',
  tags: ['Crispy', 'Chef Special'],
  veg: true,
  signature: true,
  spicy: true,
},

{
  id: 'veg-crispy',
  name: 'Veg Crispy',
  description:
    'Crispy fried vegetables tossed in a flavorful blend of spicy sauces, garlic, and fresh spring onions for the perfect crunchy starter.',
  price: 280,
  category: 'starters',
  image: '/MenuImages/Veg Crispy.webp',
  tags: ['Crispy', 'Chinese Special'],
  veg: true,
  signature: true,
  spicy: true,
},

{
  id: 'chicken-tandoor',
  name: 'Chicken Tandoor',
  description:
    'Whole chicken marinated in yogurt, aromatic spices and roasted to perfection in a traditional clay tandoor.',
  price: 480,
  category: 'kebabs',
  image: '/images/Chicken tandoor.webp',
  tags: ['Tandoor Special', 'Bestseller'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-tikka',
  name: 'Chicken Tikka',
  description:
    'Succulent boneless chicken marinated in traditional spices and char-grilled in the tandoor for smoky perfection.',
  price: 420,
  category: 'kebabs',
  image: '/images/Chicken tikka.webp',
  tags: ['Tandoori', 'Popular'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-banjara-tikka',
  name: 'Chicken Banjara Tikka',
  description:
    'Tender chicken pieces marinated with fresh herbs, green spices and yogurt, grilled for a rich rustic flavor.',
  price: 450,
  category: 'kebabs',
  image: '/images/Chicken tikka.webp',
  tags: ['Herb Marinated', 'Chef Special'],
  spicy: true,
},

{
  id: 'chicken-lasooni-tikka',
  name: 'Chicken Lasooni Tikka',
  description:
    'Juicy chicken tikka infused with roasted garlic, aromatic spices and cooked in a traditional tandoor.',
  price: 450,
  category: 'kebabs',
  image: '/images/Chicken tikka.webp',
  tags: ['Garlic Special', 'Tandoori'],
  spicy: true,
},

{
  id: 'chicken-malai-tikka',
  name: 'Chicken Malai Tikka',
  description:
    'Tender chicken marinated in cream, cheese and mild spices, delivering a rich and melt-in-the-mouth experience.',
  price: 460,
  category: 'kebabs',
  image: '/images/Chicken Malai Tikka.webp',
  tags: ['Creamy', 'Premium'],
  signature: true,
},

{
  id: 'chicken-seekh-kebab',
  name: 'Chicken Seekh Kebab',
  description:
    'Minced chicken blended with herbs and spices, skewered and grilled in the tandoor for a smoky finish.',
  price: 430,
  category: 'kebabs',
  image: '/images/Chicken Seekh Kebab.webp',
  tags: ['Seekh Kebab', 'Tandoori'],
  spicy: true,
},

{
  id: 'mutton-seekh-kebab',
  name: 'Mutton Seekh Kebab',
  description:
    'Premium minced mutton seasoned with traditional spices, skewered and charcoal grilled to perfection.',
  price: 520,
  category: 'kebabs',
  image: '/images/Chicken Seekh Kebab.webp',
  tags: ['Premium', 'Seekh Kebab'],
  signature: true,
  spicy: true,
},

{
  id: 'veg-manchurian-gravy',
  name: 'Veg Manchurian Gravy',
  description:
    'Soft vegetable dumplings simmered in a rich Indo-Chinese gravy infused with garlic, ginger and flavorful sauces.',
  price: 280,
  category: 'chinese',
  image: '/images/Veg Manchurian Dry.webp',
  tags: ['Chinese Special', 'Popular'],
  veg: true,
  spicy: true,
},

{
  id: 'paneer-manchurian-gravy',
  name: 'Paneer Manchurian Gravy',
  description:
    'Crispy paneer cubes tossed in a savory Indo-Chinese gravy with garlic, spring onions and aromatic seasonings.',
  price: 330,
  category: 'chinese',
  image: '/MenuImages/Panner Manchurian Gravy.webp',
  tags: ['Paneer Special', 'Chinese'],
  veg: true,
  spicy: true,
},

{
  id: 'paneer-chilli-gravy',
  name: 'Paneer Chilli Gravy',
  description:
    'Tender paneer cooked with onions, capsicum and spicy chilli sauce in a rich and flavorful gravy.',
  price: 330,
  category: 'chinese',
  image: '/MenuImages/Panner Manchurian Gravy.webp',
  tags: ['Chinese Special', 'Bestseller'],
  veg: true,
  signature: true,
  spicy: true,
},
{
  id: 'chicken-manchurian-gravy',
  name: 'Chicken Manchurian Gravy',
  description:
    'Juicy chicken dumplings cooked in a rich Indo-Chinese gravy infused with garlic, ginger and flavorful sauces.',
  price: 340,
  category: 'chinese',
  image: '/images/Chicken Manchurian Gravy.webp',
  tags: ['Chinese Special', 'Popular'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-chilli-gravy',
  name: 'Chicken Chilli Gravy',
  description:
    'Tender chicken pieces tossed with onions, capsicum and spicy chilli sauce in a flavorful Indo-Chinese gravy.',
  price: 350,
  category: 'chinese',
  image: '/images/Chicken Manchurian Gravy.webp',
  tags: ['Bestseller', 'Chinese Special'],
  signature: true,
  spicy: true,
},

//chinese rice & noodles 

{
  id: 'veg-fried-rice',
  name: 'Veg Fried Rice',
  description:
    'Wok-tossed rice cooked with fresh vegetables, spring onions and classic Indo-Chinese seasonings.',
  price: 240,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Chinese Special', 'Popular'],
  veg: true,
},

{
  id: 'veg-schezwan-fried-rice',
  name: 'Veg Schezwan Fried Rice',
  description:
    'Spicy fried rice tossed with vegetables and fiery Schezwan sauce for bold Indo-Chinese flavors.',
  price: 260,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Schezwan', 'Spicy'],
  veg: true,
  spicy: true,
},

{
  id: 'veg-triple-fried-rice',
  name: 'Veg Triple Fried Rice',
  description:
    'A hearty combination of fried rice, noodles and spicy gravy served together for the ultimate Chinese feast.',
  price: 300,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Triple Rice', 'Bestseller'],
  veg: true,
  signature: true,
  spicy: true,
},

{
  id: 'veg-hakka-noodles',
  name: 'Veg Hakka Noodles',
  description:
    'Classic wok-tossed noodles loaded with fresh vegetables and authentic Indo-Chinese flavors.',
  price: 240,
  category: 'chinese',
  image: '/MenuImages/Hakka Noodles.webp',
  tags: ['Noodles', 'Popular'],
  veg: true,
},

{
  id: 'veg-schezwan-noodles',
  name: 'Veg Schezwan Noodles',
  description:
    'Spicy Hakka noodles tossed with vegetables and signature Schezwan sauce.',
  price: 260,
  category: 'chinese',
  image: '/MenuImages/Hakka Noodles.webp',
  tags: ['Schezwan', 'Spicy'],
  veg: true,
  spicy: true,
},

{
  id: 'chicken-fried-rice',
  name: 'Chicken Fried Rice',
  description:
    'Flavorful fried rice stir-fried with tender chicken pieces, vegetables and Chinese seasonings.',
  price: 290,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Chicken Special', 'Popular'],
},

{
  id: 'chicken-schezwan-fried-rice',
  name: 'Chicken Schezwan Fried Rice',
  description:
    'Chicken fried rice infused with fiery Schezwan sauce and aromatic spices.',
  price: 310,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Chicken Special', 'Schezwan'],
  spicy: true,
},

{
  id: 'chicken-triple-fried-rice',
  name: 'Chicken Triple Fried Rice',
  description:
    'A satisfying combination of chicken fried rice, noodles and spicy chicken gravy served together.',
  price: 350,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Bestseller', 'Triple Rice'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-hakka-noodles',
  name: 'Chicken Hakka Noodles',
  description:
    'Wok-tossed noodles loaded with juicy chicken, vegetables and flavorful sauces.',
  price: 290,
  category: 'chinese',
  image: '/MenuImages/Hakka Noodles.webp',
  tags: ['Chicken Special', 'Noodles'],
},

{
  id: 'chicken-schezwan-noodles',
  name: 'Chicken Schezwan Noodles',
  description:
    'Chicken noodles tossed in spicy Schezwan sauce with fresh vegetables and herbs.',
  price: 310,
  category: 'chinese',
  image: '/MenuImages/Hakka Noodles.webp',
  tags: ['Schezwan', 'Chicken Special'],
  spicy: true,
},

{
  id: 'egg-hakka-noodles',
  name: 'Egg Hakka Noodles',
  description:
    'Classic Hakka noodles stir-fried with egg, vegetables and signature Chinese flavors.',
  price: 260,
  category: 'chinese',
  image: '/MenuImages/Hakka Noodles.webp',
  tags: ['Egg Special', 'Noodles'],
},

{
  id: 'egg-schezwan-noodles',
  name: 'Egg Schezwan Noodles',
  description:
    'Spicy egg noodles tossed with Schezwan sauce and fresh vegetables.',
  price: 280,
  category: 'chinese',
  image: '/MenuImages/Hakka Noodles.webp',
  tags: ['Egg Special', 'Schezwan'],
  spicy: true,
},

{
  id: 'egg-fried-rice',
  name: 'Egg Fried Rice',
  description:
    'Wok-fried rice cooked with scrambled eggs, vegetables and aromatic Chinese seasonings.',
  price: 260,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Egg Special', 'Popular'],
},

{
  id: 'egg-schezwan-fried-rice',
  name: 'Egg Schezwan Fried Rice',
  description:
    'Egg fried rice tossed with spicy Schezwan sauce and flavorful Indo-Chinese spices.',
  price: 280,
  category: 'chinese',
  image: '/MenuImages/Veg Fried Rice.webp',
  tags: ['Egg Special', 'Schezwan'],
  spicy: true,
},

{
  id: 'chicken-manchow-soup',
  name: 'Chicken Manchow Soup',
  description:
    'A hearty Indo-Chinese soup loaded with shredded chicken, vegetables, garlic and topped with crispy noodles.',
  price: 180,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Chicken Special', 'Popular'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-hot-and-sour-soup',
  name: 'Chicken Hot & Sour Soup',
  description:
    'A bold and flavorful soup combining shredded chicken, vegetables and a perfect balance of spicy and tangy flavors.',
  price: 180,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Spicy', 'Chinese Special'],
  spicy: true,
},

{
  id: 'chicken-lemon-coriander-soup',
  name: 'Chicken Lemon Coriander Soup',
  description:
    'A light and refreshing soup infused with tender chicken, fresh coriander and a hint of lemon.',
  price: 180,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Refreshing', 'Healthy'],
},

{
  id: 'chicken-sweet-corn-soup',
  name: 'Chicken Sweet Corn Soup',
  description:
    'A comforting soup made with shredded chicken, sweet corn and a rich flavorful broth.',
  price: 180,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Comfort Food', 'Popular'],
},

{
  id: 'veg-manchow-soup',
  name: 'Veg Manchow Soup',
  description:
    'A delicious vegetable soup packed with fresh veggies, garlic and topped with crispy fried noodles.',
  price: 160,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Vegetarian', 'Popular'],
  veg: true,
  spicy: true,
},

{
  id: 'veg-hot-and-sour-soup',
  name: 'Veg Hot & Sour Soup',
  description:
    'A spicy and tangy vegetable soup prepared with fresh vegetables and authentic Indo-Chinese seasonings.',
  price: 160,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Spicy', 'Chinese Special'],
  veg: true,
  spicy: true,
},

{
  id: 'veg-lemon-coriander-soup',
  name: 'Veg Lemon Coriander Soup',
  description:
    'A light and aromatic soup flavored with fresh coriander, vegetables and a refreshing touch of lemon.',
  price: 160,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Healthy', 'Refreshing'],
  veg: true,
},

{
  id: 'veg-sweet-corn-soup',
  name: 'Veg Sweet Corn Soup',
  description:
    'A creamy and comforting soup made with sweet corn, fresh vegetables and delicate seasonings.',
  price: 160,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Comfort Food', 'Popular'],
  veg: true,
},

{
  id: 'cream-of-tomato-soup',
  name: 'Cream of Tomato Soup',
  description:
    'A rich and velvety soup made with ripe tomatoes, fresh cream and aromatic herbs, offering a comforting classic flavor.',
  price: 170,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Creamy', 'Classic'],
  veg: true,
},

{
  id: 'cream-of-mushroom-soup',
  name: 'Cream of Mushroom Soup',
  description:
    'A smooth and creamy mushroom soup prepared with fresh mushrooms, cream and delicate seasonings for a rich savory taste.',
  price: 180,
  category: 'soups',
  image: '/MenuImages/Veg Manchow Soup.webp',
  tags: ['Creamy', 'Mushroom Special'],
  veg: true,
  signature: true,
},

//raita and salads

{
  id: 'plain-curd',
  name: 'Plain Curd',
  description:
    'Fresh homemade curd served chilled, offering a creamy and refreshing accompaniment to any meal.',
  price: 60,
  category: 'salads',
  image: '/images/Plain Curd.webp',
  tags: ['Refreshing', 'Traditional'],
  veg: true,
},

{
  id: 'green-salad',
  name: 'Green Salad',
  description:
    'A healthy mix of fresh cucumber, tomato, onion, carrot and seasonal vegetables served with lemon.',
  price: 90,
  category: 'salads',
  image: '/images/Green Salad.webp',
  tags: ['Fresh', 'Healthy'],
  veg: true,
},

{
  id: 'veg-raita',
  name: 'Veg Raita',
  description:
    'Creamy curd blended with fresh vegetables and mild seasonings for a refreshing side dish.',
  price: 90,
  category: 'salads',
  image: '/images/Raita.webp',
  tags: ['Cooling', 'Popular'],
  veg: true,
},

{
  id: 'pineapple-raita',
  name: 'Pineapple Raita',
  description:
    'A delightful combination of chilled curd and juicy pineapple, balancing sweetness and freshness perfectly.',
  price: 110,
  category: 'salads',
  image: '/images/Raita.webp',
  tags: ['Sweet & Refreshing', 'Chef Special'],
  veg: true,
},

{
  id: 'boondi-raita',
  name: 'Boondi Raita',
  description:
    'Refreshing yogurt mixed with crispy boondi and lightly seasoned spices for a classic Indian accompaniment.',
  price: 90,
  category: 'salads',
  image: '/images/Raita.webp',
  tags: ['Traditional', 'Popular'],
  veg: true,
},
 //rice 

 {
  id: 'steam-rice',
  name: 'Steam Rice',
  description:
    'Perfectly steamed aromatic rice, light and fluffy, ideal with curries, dals and traditional meals.',
  price: 120,
  category: 'rice',
  image: '/images/Jeera Rice.webp',
  tags: ['Classic', 'Traditional'],
  veg: true,
},

{
  id: 'jeera-rice',
  name: 'Jeera Rice',
  description:
    'Fragrant basmati rice tempered with roasted cumin seeds and aromatic spices.',
  price: 170,
  category: 'rice',
  image: '/images/Jeera Rice.webp',
  tags: ['Popular', 'Rice Special'],
  veg: true,
},

{
  id: 'indrayani-rice',
  name: 'Indrayani Rice',
  description:
    'Premium Maharashtrian Indrayani rice known for its soft texture and distinctive aroma.',
  price: 150,
  category: 'rice',
  image: '/images/Jeera Rice.webp',
  tags: ['Maharashtrian Special'],
  veg: true,
},

{
  id: 'chicken-dum-biryani',
  name: 'Chicken Dum Biryani',
  description:
    'Aromatic basmati rice layered with succulent chicken and slow-cooked using traditional dum techniques.',
  price: 380,
  category: 'rice',
  image: '/images/Chicken Dum Biryani.webp',
  tags: ['Biryani', 'Bestseller'],
  signature: true,
  spicy: true,
},

{
  id: 'chicken-tikka-biryani',
  name: 'Chicken Tikka Biryani',
  description:
    'Flavorful biryani prepared with smoky chicken tikka, fragrant rice and aromatic spices.',
  price: 420,
  category: 'rice',
  image: '/images/Chicken Dum Biryani.webp',
  tags: ['Tikka Special', 'Premium'],
  signature: true,
  spicy: true,
},

{
  id: 'mutton-dum-biryani',
  name: 'Mutton Dum Biryani',
  description:
    'Tender mutton layered with aromatic basmati rice and slow-cooked to perfection in traditional dum style.',
  price: 480,
  category: 'rice',
  image: '/images/Chicken Dum Biryani.webp',
  tags: ['Premium', 'Bestseller'],
  signature: true,
  spicy: true,
},

{
  id: 'egg-biryani',
  name: 'Egg Biryani',
  description:
    'Fragrant biryani prepared with boiled eggs, aromatic basmati rice and traditional spices.',
  price: 280,
  category: 'rice',
  image: '/images/Egg Biryani.webp',
  tags: ['Egg Special', 'Popular'],
  spicy: true,
},

{
  id: 'curd-rice',
  name: 'Curd Rice',
  description:
    'A cooling South Indian-style rice preparation mixed with fresh curd and tempered with aromatic spices.',
  price: 180,
  category: 'rice',
  image: '/images/Jeera Rice.webp',
  tags: ['Refreshing', 'Comfort Food'],
  veg: true,
},

{
  id: 'tadka-dal-khichadi',
  name: 'Tadka Dal Khichadi',
  description:
    'A wholesome blend of rice and lentils topped with a flavorful garlic and cumin tadka.',
  price: 220,
  category: 'rice',
  image: '/images/Dal Khichadi.webp',
  tags: ['Comfort Food', 'Homestyle'],
  veg: true,
},

{
  id: 'veg-pulao',
  name: 'Veg Pulao',
  description:
    'Fragrant basmati rice cooked with seasonal vegetables and aromatic whole spices.',
  price: 250,
  category: 'rice',
  image: '/images/Veg Biryani.webp',
  tags: ['Vegetarian', 'Popular'],
  veg: true,
},

{
  id: 'veg-dum-biryani',
  name: 'Veg Dum Biryani',
  description:
    'Aromatic basmati rice layered with fresh vegetables and slow-cooked with traditional biryani spices.',
  price: 290,
  category: 'rice',
  image: '/images/Veg Biryani.webp',
  tags: ['Biryani', 'Vegetarian'],
  veg: true,
},

{
  id: 'paneer-tikka-biryani',
  name: 'Paneer Tikka Biryani',
  description:
    'Smoky paneer tikka layered with fragrant basmati rice and aromatic biryani spices.',
  price: 340,
  category: 'rice',
  image: '/images/Panner Tikka Biryani.webp',
  tags: ['Paneer Special', 'Premium'],
  veg: true,
  signature: true,
},

//desserts

{
  id: 'shrikhand',
  name: 'Shrikhand',
  description:
    'A traditional Maharashtrian dessert made from thickened yogurt, delicately flavored with saffron, cardamom and dry fruits.',
  price: 120,
  category: 'desserts',
  image: '/images/Shrikhand.webp',
  tags: ['Traditional', 'Maharashtrian Special'],
  veg: true,
  signature: true,
},

{
  id: 'rabdi',
  name: 'Rabdi',
  description:
    'Rich and creamy sweetened milk dessert slow-cooked to perfection and garnished with nuts and saffron.',
  price: 140,
  category: 'desserts',
  image: '/images/Rabdi.webp',
  tags: ['Rich', 'Traditional'],
  veg: true,
},

{
  id: 'gulab-jamun',
  name: 'Gulab Jamun',
  description:
    'Soft milk-solid dumplings soaked in fragrant sugar syrup, served warm for a delightful sweet experience.',
  price: 90,
  category: 'desserts',
  image: '/images/Gulab Jamun.webp',
  tags: ['Classic', 'Popular'],
  veg: true,
},

{
  id: 'shahi-tukda',
  name: 'Shahi Tukda',
  description:
    'A royal Mughlai dessert featuring crispy fried bread soaked in rich rabdi and garnished with nuts.',
  price: 160,
  category: 'desserts',
  image: '/images/Shahi Tukda.webp',
  tags: ['Royal', 'Premium'],
  veg: true,
  signature: true,
},

{
  id: 'ice-cream',
  name: 'Ice Cream',
  description:
    'A refreshing scoop of creamy ice cream available in a variety of delightful flavours.',
  price: 80,
  category: 'desserts',
  image: '/images/IceCream.webp',
  tags: ['Chilled', 'Popular'],
  veg: true,
},

{
  id: 'kharwas',
  name: 'Kharwas',
  description:
    'A traditional Maharashtrian milk pudding delicately flavored with cardamom and saffron, known for its soft texture.',
  price: 130,
  category: 'desserts',
  image: '/images/Kharwas.webp',
  tags: ['Maharashtrian Special', 'Traditional'],
  veg: true,
  signature: true,
},

{
  id: 'ukdiche-modak',
  name: 'Ukdiche Modak',
  description:
    'Steamed rice flour dumplings filled with jaggery and coconut, prepared in authentic Maharashtrian style.',
  price: 150,
  category: 'desserts',
  image: '/images/Ukdiche Modak.webp',
  tags: ['Ganpati Special', 'Traditional'],
  veg: true,
  signature: true,
},

{
  id: 'puran-poli-with-ghee',
  name: 'Puran Poli with Ghee',
  description:
    'A traditional sweet flatbread stuffed with jaggery and lentils, served generously with pure ghee.',
  price: 120,
  category: 'desserts',
  image: '/images/Puran Poli.webp',
  tags: ['Maharashtrian Special', 'Best Seller'],
  veg: true,
  signature: true,
},

{
  id: 'paan-bites',
  name: 'Paan Bites',
  description:
    'Refreshing bite-sized paan treats filled with sweet and aromatic ingredients, perfect after a hearty meal.',
  price: 90,
  category: 'desserts',
  image: '/images/Paan Bites.webp',
  tags: ['After Meal', 'Refreshing'],
  veg: true,
},

//breads 
{
  id: 'wheat-roti',
  name: 'Wheat Roti',
  description:
    'Freshly prepared whole wheat roti cooked to perfection, soft, wholesome and perfect with any curry.',
  price: 25,
  category: 'breads',
  image: '/images/Wheat Roti.webp',
  tags: ['Whole Wheat', 'Traditional'],
  veg: true,
},

{
  id: 'laccha-paratha',
  name: 'Laccha Paratha',
  description:
    'Flaky multi-layered paratha cooked with ghee, offering a rich texture and authentic North Indian flavor.',
  price: 60,
  category: 'breads',
  image: '/images/Laccha Paratha.webp',
  tags: ['Layered', 'Popular'],
  veg: true,
},

{
  id: 'naan',
  name: 'Naan',
  description:
    'Soft and fluffy tandoor-baked Indian bread that pairs perfectly with rich gravies and curries.',
  price: 50,
  category: 'breads',
  image: '/images/Naan.webp',
  tags: ['Tandoor Fresh', 'Classic'],
  veg: true,
},

{
  id: 'kulcha',
  name: 'Kulcha',
  description:
    'Traditional soft Indian bread baked in a tandoor with a light buttery finish.',
  price: 60,
  category: 'breads',
  image: '/images/Kulcha.webp',
  tags: ['Tandoori Bread', 'Popular'],
  veg: true,
},

{
  id: 'garlic-naan',
  name: 'Garlic Naan',
  description:
    'Freshly baked naan topped with aromatic garlic and herbs for a flavorful tandoori delight.',
  price: 70,
  category: 'breads',
  image: '/images/Naan.webp',
  tags: ['Garlic Special', 'Bestseller'],
  veg: true,
  signature: true,
},

{
  id: 'garlic-cheese-naan',
  name: 'Garlic Cheese Naan',
  description:
    'Soft naan stuffed with melted cheese and finished with garlic, creating the ultimate indulgent bread.',
  price: 120,
  category: 'breads',
  image: '/images/Naan.webp',
  tags: ['Cheese Special', 'Premium'],
  veg: true,
  signature: true,
},

{
  id: 'bhakri',
  name: 'Bhakri',
  description:
    'Traditional Maharashtrian flatbread prepared fresh and served hot, the perfect companion to pithla, rassa and sukka dishes.',
  price: 40,
  category: 'breads',
  image: '/images/Bhakri.webp',
  tags: ['Maharashtrian Special', 'Traditional'],
  veg: true,
  signature: true,
},

{
  id: 'chapati',
  name: 'Chapati',
  description:
    'Soft homemade chapati made from premium wheat flour, served fresh with every meal.',
  price: 20,
  category: 'breads',
  image: '/images/Chapati.webp',
  tags: ['Homestyle', 'Traditional'],
  veg: true,
},

{
  id: 'puri',
  name: 'Puri',
  description:
    'Golden fried Indian bread served hot and fluffy, perfect with traditional Maharashtrian and Punjabi dishes.',
  price: 60,
  category: 'breads',
  image: '/images/Puri.webp',
  tags: ['Traditional', 'Popular'],
  veg: true,
},

{
  id: 'aloo-paratha',
  name: 'Aloo Paratha',
  description:
    'Stuffed whole wheat flatbread filled with spiced potatoes and cooked until golden brown.',
  price: 120,
  category: 'breads',
  image: '/images/Paratha.webp',
  tags: ['Stuffed Paratha', 'Popular'],
  veg: true,
},

{
  id: 'gobi-paratha',
  name: 'Gobi Paratha',
  description:
    'Traditional North Indian flatbread stuffed with seasoned cauliflower and cooked to perfection.',
  price: 130,
  category: 'breads',
  image: '/images/Paratha.webp',
  tags: ['Stuffed Paratha', 'North Indian'],
  veg: true,
},

{
  id: 'paneer-paratha',
  name: 'Paneer Paratha',
  description:
    'Soft whole wheat paratha generously stuffed with flavorful paneer and aromatic spices.',
  price: 150,
  category: 'breads',
  image: '/images/Paratha.webp',
  tags: ['Paneer Special', 'Premium'],
  veg: true,
  signature: true,
},

];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: 'Food' | 'Ambience' | 'Restaurant' | 'Events'| 'Before & After';
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/Veg  65.webp',
    alt: 'Veg Starter Platters',
    category: 'Food',
    width: 900,
    height: 1200,
  },
  {
    id: 'g2',
    src: '/images/6R1A2709.webp',
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
    src: '/images/aloo vadi.webp',
    alt: 'Maharashtrian Aloo Vadi with chutney and salad',
    category: 'Food',
    width: 900,
    height: 600,
  },
  {
    id: 'g6',
    src: '/images/6R1A2718.webp',
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
    src: '/images/frontview.webp',
    alt: 'Restaurant Entrance ',
    category: 'Ambience',
    width: 900,
    height: 1200,
  },
  {
    id: 'g9',
    src: '/images/6R1A2709.webp',
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
    src: '/images/Chicken tikka.webp',
    alt: 'Chicken Tikka',
    category: 'Food',
    width: 900,
    height: 600,
  },
  {
    id: 'g12',
    src: '/images/Panner 65.webp',
    alt: 'Signature Dish',
    category: 'Food',
    width: 900,
    height: 1200,
  },
  {
    id: 'g13',
    src: '/BeforeAfterImages/IMG_20190626_124814.webp',
    alt: 'Old Structure',
    category: 'Before & After',
    width: 900,
    height: 1200,
  },
  {
    id: 'g14',
    src: '/images/frontview.webp',
    alt: 'New Structure',
    category: 'Before & After',
    width: 900,
    height: 1200,
  },
  {
    id: 'g15',
    src: '/BeforeAfterImages/IMG_20190626_125150.webp',
    alt: 'Old Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g16',
    src: '/BeforeAfterImages/Old Wall.webp',
    alt: 'Old Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g17',
    src: '/BeforeAfterImages/New Wall Art.webp',
    alt: 'New Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g18',
    src: '/BeforeAfterImages/Before Dinning area.webp',
    alt: 'Old Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g19',
    src: '/BeforeAfterImages/New Dinning Area.webp',
    alt: 'New Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g20',
    src: '/BeforeAfterImages/Old Dinning Area 2.webp',
    alt: 'Old Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g21',
    src: '/BeforeAfterImages/New Dinning Area 2.webp',
    alt: 'New Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },

  {
    id: 'g23',
    src: '/images/frontview.webp',
    alt: 'New Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g24',
    src: '/BeforeAfterImages/New Dinning Area 3.webp',
    alt: 'New Structure',
    category: 'Before & After',
    width: 900,
    height: 800,
  },
  {
    id: 'g25',
    src: '/images/Indoor Seating 1.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g26',
    src: '/images/Indoor Seating 2.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g27',
    src: '/images/Indoor Seating 3.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g28',
    src: '/images/Indoor Seating 4.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g29',
    src: '/images/Indoor Seating 5.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g30',
    src: '/images/Indoor Seating 6.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g31',
    src: '/images/Art.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g32',
    src: '/images/Art1.webp',
    alt: 'Ambience',
    category: 'Ambience',
    width: 900,
    height: 800,
  },
  {
    id: 'g33',
    src: '/images/Art1.webp',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g34',
    src: '/images/Garden Image.webp',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g35',
    src: '/RestaurantImages/Bill Board.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g36',
    src: '/RestaurantImages/Front Garden View.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g37',
    src: '/RestaurantImages/Lawn View.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
   {
    id: 'g38',
    src: '/RestaurantImages/Play Area 1.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g39',
    src: '/RestaurantImages/Play Area 2.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g40',
    src: '/RestaurantImages/Play Area 3.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g41',
    src: '/RestaurantImages/Play Area 4.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g42',
    src: '/RestaurantImages/Selfie Point.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
  },
  {
    id: 'g43',
    src: '/RestaurantImages/Trees.jpeg',
    alt: 'Restaurant',
    category: 'Restaurant',
    width: 900,
    height: 800,
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
    date: 'June 2026',
    text: "Farmer's Kitchen – A Peaceful Delight Visited Farmer’s Kitchen recently and had a really pleasant experience. The ambience is calm, clean, and beautifully done, making it a perfect spot for a relaxed meal.The washrooms were hygienic, smelled fresh, and even had music playing — a small but thoughtful touch!. The food was tasty, well-prepared, and priced reasonably. We didn’t have to wait too long for service, which was a big plus.There’s ample parking space available right outside. For families, it’s a great place too — there’s a garden, a slide, and a jhula for kids to enjoy while you dine.Overall, a peaceful place with good food, great atmosphere, and family-friendly vibes. Would definitely recommend!",
  },
  {
    id: 't2',
    name: 'Manish Vijay Singh',
    location: 'Pune',
    rating: 5,
    initials: 'MVS',
    date: 'January 2026',
    text: "Stopped at Farmer’s Kitchen while returning from Mahabaleshwar to Pune and it was totally worth it. The food was really good — we tried different thalis, buttermilk, veg kadai, dal fry and rice, and everything tasted fresh. One big plus was the super clean and well-maintained washrooms, which is always a relief on highway stops",
  },
  {
    id: 't3',
    name: 'Akki',
    location: 'Mumbai',
    rating: 4,
    initials: 'AK',
    date: 'March 2026',
    text: "We randomly stopped here and didn't have much expectations but after tasting their food it surpassed all of our expectations firstly their service is top notch very prompt and responsive people they cater to even small personal requests. Food is good as it gets we ordered murg mussallam, mutton Thali and chicken thali along with rabdi each dish were mouth watering and I was amazed with the quantity the portion size clearly justifies they price point.Facilities are great and maintained huge open space neat and clean washrooms.Overall if you are looking for a good place to eat keep this place bookmarked.",
  },
  {
    id: 't4',
    name: 'Prabhat Yadav',
    location: 'Bengaluru',
    rating: 5,
    initials: 'PS',
    date: 'February 2026',
    text: "My experience with farmer's kitchen was really pleasant and wholesome. The food was topnotch and so was the service. You can opt to eat indoors or outdoors, we chose to eat outdoors and the view was stunning seeing the blue sky and large clouds breeze past in the sky. Overall it was a memorable experience for me and my family"
  },
  {
    id: 't5',
    name: 'Deepali Tumbre',
    location: 'Pune',
    rating: 5,
    initials: 'KM',
    date: 'July 2026',
    text: "Best restaurant to enjoy authentic Maharastian thali. Must try Puranpoli, it's perfect texture, filling & taste is amazing. I would rate 5/5 for this restaurant for its yum food, hygienic & overall service.The staff is also very polite. Request to start another branch in Mahabaleshwar, since there is absolutely no restaurant that serves such authentic maharashtrian food."
  },
  {
    id: 't6',
    name: 'Neha A',
    location: 'Kolhapur',
    rating: 4,
    initials: 'AN',
    date: 'January 2026',
    text: "It is a super clean, hygienic hotel with good food. Decor and ambience like a theme restaurant in the city. Super clean and newly constructed washroom, which even had music. Pleasantly surprised by this rare find on the highway! Highly recommended.",
  },
  {
    id: 't7',
    name: 'Shweta Saraf',
    location: 'Pune',
    rating: 5,
    initials: 'SS',
    date: 'June 2026',
    text: "I feel this is the best place to have food while traveling anytime. The food tastes really good with best people around. Just to make a note they have chicken handi tastes the best. Our whole group loved the place.The service is best by far wherever I have traveled in near Pune. The staff is so good and helpful for everything.Also, need to mention about the cleanliness they have maintained all through their premises. The washroom are so clean and well maintained. The restaurant having good vibe to eat and have good people around.I recommend everyone to actually go and enjoy the place.",
  },
   {
    id: 't8',
    name: 'Supriya Nair',
    location: 'Mumbai',
    rating: 5,
    initials: 'SN',
    date: 'March 2026',
    text: "This restaurant has good food options both veg and non veg. Thalis are good if you have the appetite. In veg, we had Dal Khichdi, Chinese triple rice, Solkadi, fresh lime sodas, desserts included Modaks 😋. A feel good restaurant that gives you traditional and modern food options.A big appreciation for Sunil who helped us with our food selections, and provided great attention to our food service.The restrooms are also very clean. A big shout out/appreciation to the cleaning lady who is always smiling.",
  },
  {
    id: 't9',
    name: 'Shreyas Adyanthaya',
    location: 'Karad',
    rating: 4,
    initials: 'SA',
    date: 'June 2026',
    text: "Excellent experience overall. Great service with attentive and courteous staff. The seating area is spacious, airy, and comfortable, creating a relaxed atmosphere. Food is freshly prepared, flavorful, and served promptly. The team is also very accommodating with special requests and food substitutions, which is always appreciated. A great place for a comfortable meal with consistently good service and tasty food.",
  },
  {
    id: 't10',
    name: 'Nihar Kadam',
    location: 'Satara',
    rating: 4,
    initials: 'NK',
    date: 'January 2026',
    text: "Had a good experience at this restaurant. The place was very clean, including the washroom facilities, which were well-maintained. The service was prompt, and the food was delicious. We were a group of 13 people and had ordered veg dal khichdi, veg kolhapuri, Masala buttermilk, sweet lassi, Piti Bhakri, tantoori rotis, Jeera rice. Overall, a comfortable and pleasant dining experience.",
  },
   {
    id: 't11',
    name: 'Dhruv Deshmukh',
    location: 'Panchgani',
    rating: 4,
    initials: 'DD',
    date: 'January 2026',
    text: "The hotel was clean and we'll organized. The food portions were commensurate with price. Service was fast and hot food was served. Taste was also good.Good place to stop and have lunch on Pune-Satara(NH-48) highway.",
  },
  {
    id: 't12',
    name: 'Ruchi Pandey',
    location: 'Mahabaleshwar ',
    rating: 4,
    initials: 'RP',
    date: 'January 2025',
    text: "We stopped by this restaurant on our way from Mahabaleshwar and had a meal here.What stood out to me the most were the clean and hygienic washrooms.The staff was exceptionally courteous and supportive.The overall ambience of the restaurant was superb and delightful. I will definitely recommend it to everyone!",
  },
  {
    id: 't13',
    name: 'Manan Khambati',
    location: 'Mumbai ',
    rating: 5,
    initials: 'MK',
    date: 'April 2026',
    text: "Very good location, sign boards are very clear and helpful. Good food and lot of parking. Nice ambiance and friendly staff. You can also buy hand made masala etc from attached shop.",
  },
  {
    id: 't14',
    name: 'Sreekesh SV',
    location: 'Satara ',
    rating: 5,
    initials: 'SV',
    date: 'December 2025',
    text: "From the moment I walked in, I was greeted with warm hospitality and a cozy atmosphere. The rustic decor and welcoming ambiance set the stage for a memorable dining experience.The menu boasts a diverse selection of dishes, catering to every palate. Whether you're craving comfort food classics or adventurous culinary creations, Farmer's Kitchen has something for everyone. The ingredients were fresh, the flavors were robust, and each dish was expertly prepared with care.Whether you're passing through or looking for a destination dining experience, I highly recommend stopping by this hidden gem along the Pune Bangalore highway. You won't be disappointed",
  },
  {
    id: 't15',
    name: 'Trupti Wani',
    location: 'Goa ',
    rating: 5,
    initials: 'TW',
    date: 'April 2026',
    text: "This place never disappoints. Food is really delicious. If anyone wants to taste nice Maharashtrian meal, this place serves the best food. This time Mr. Kishor served us and was very helpful and quick with service. Would like to visit again as we always do.",
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
