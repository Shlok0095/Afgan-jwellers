export type Category = "earrings" | "necklace" | "bracelets";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  images: string[];
  tags: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  materials: string[];
  careInstructions: string;
}

const earringProducts: Product[] = [
  {
    id: "e-001",
    name: "Blush Petal Drops",
    category: "earrings",
    price: 1299,
    originalPrice: 1699,
    description: "Delicate handcrafted floral drop earrings with rose-tinted beads",
    longDescription:
      "Inspired by the first bloom of spring, these exquisite drop earrings feature hand-assembled rose petal clusters. Each bead is individually selected and strung by skilled artisans, creating a pair that carries the softness of a garden in full bloom. The lightweight design ensures all-day comfort without compromising on elegance.",
    images: ["/images/earrings/earring-1.jpeg", "/images/earrings/earring-2.jpeg"],
    tags: ["floral", "drop", "pink", "handmade"],
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 124,
    materials: ["Glass beads", "Gold-plated hooks", "Silk thread"],
    careInstructions: "Store in a dry place. Avoid water and perfume contact.",
  },
  {
    id: "e-002",
    name: "Cherry Blossom Studs",
    category: "earrings",
    price: 899,
    description: "Petite cherry blossom stud earrings, handmade with pink and white beads",
    longDescription:
      "These dainty stud earrings capture the fleeting beauty of cherry blossoms at their peak. Each flower is meticulously crafted using micro-beading techniques passed down through generations, with soft pink and ivory beads forming perfect five-petal blooms.",
    images: ["/images/earrings/earring-3.jpeg", "/images/earrings/earring-4.jpeg"],
    tags: ["studs", "cherry", "minimal", "floral"],
    isNew: true,
    rating: 4.8,
    reviewCount: 87,
    materials: ["Seed beads", "Sterling silver posts", "Resin coating"],
    careInstructions: "Wipe gently with a soft cloth. Keep away from moisture.",
  },
  {
    id: "e-003",
    name: "Garden Luxe Dangles",
    category: "earrings",
    price: 1599,
    originalPrice: 1999,
    description: "Statement dangle earrings bursting with handcrafted beaded blooms",
    longDescription:
      "A celebration of artisan excellence, these statement dangles feature cascading hand-beaded flowers in a palette of dusty rose, ivory, and gold. Each earring takes over 3 hours to craft, reflecting the dedication of our artisans to perfection.",
    images: ["/images/earrings/earring-5.jpeg", "/images/earrings/earring-6.jpeg"],
    tags: ["dangle", "statement", "luxury", "floral"],
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 56,
    materials: ["Czech glass beads", "Gold-filled wire", "Freshwater pearls"],
    careInstructions: "Store individually to prevent tangling. Avoid chemicals.",
  },
  {
    id: "e-004",
    name: "Ivory Petal Hoops",
    category: "earrings",
    price: 1099,
    description: "Elegant ivory bead hoops with delicate floral accents",
    longDescription:
      "Where classic hoops meet artisan floral craftsmanship. These ivory bead-wrapped hoops feature hand-placed petal accents that catch the light beautifully. Perfect for both daywear and evening elegance.",
    images: ["/images/earrings/earring-7.jpeg", "/images/earrings/earring-8.jpeg"],
    tags: ["hoops", "ivory", "classic", "elegant"],
    isNew: true,
    rating: 4.7,
    reviewCount: 43,
    materials: ["Ivory glass beads", "Gold-plated hoop base", "Wire wrap"],
    careInstructions: "Handle with care. Store flat in a jewelry box.",
  },
  {
    id: "e-005",
    name: "Rose Mist Clusters",
    category: "earrings",
    price: 1399,
    description: "Dreamy cluster earrings with layers of rose-tinted handmade flowers",
    longDescription:
      "These ethereal cluster earrings are a labor of love, with each piece containing hand-crafted bead flowers layered to create a lush, dimensional arrangement. The rose mist color palette transitions from deep blush to the palest pink.",
    images: ["/images/earrings/earring-9.jpeg", "/images/earrings/earring-10.jpeg"],
    tags: ["cluster", "rose", "dimensional", "artistic"],
    rating: 4.9,
    reviewCount: 92,
    materials: ["Hand-dyed beads", "Brass findings", "Silk thread"],
    careInstructions: "Keep away from water. Store in provided pouch.",
  },
];

const necklaceProducts: Product[] = [
  {
    id: "n-001",
    name: "Bloom Collar Necklace",
    category: "necklace",
    price: 2499,
    originalPrice: 2999,
    description: "Luxurious beaded collar necklace with hand-crafted floral centerpiece",
    longDescription:
      "The crown jewel of our necklace collection, this collar-style necklace features a breathtaking arrangement of hand-beaded flowers that frame the neckline beautifully. Each flower cluster is individually crafted and assembled by master artisans, creating a wearable piece of art.",
    images: ["/images/necklace/necklace-1.jpeg", "/images/necklace/necklace-2.jpeg"],
    tags: ["collar", "floral", "statement", "bridal"],
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 68,
    materials: ["Czech glass beads", "Gold-plated chain", "Freshwater pearls", "Silk thread"],
    careInstructions: "Store flat. Clean with a soft dry cloth only.",
  },
  {
    id: "n-002",
    name: "Garden Pendant",
    category: "necklace",
    price: 1799,
    description: "Delicate single-bloom pendant necklace, handmade with seed beads",
    longDescription:
      "A singular moment of beauty, this pendant necklace features one perfectly crafted bead flower suspended on a delicate gold-filled chain. The miniature bloom is constructed from over 200 individual seed beads, requiring extraordinary precision and patience.",
    images: ["/images/necklace/necklace-3.jpeg", "/images/necklace/necklace-4.jpeg"],
    tags: ["pendant", "minimal", "everyday", "gift"],
    isNew: true,
    rating: 4.8,
    reviewCount: 112,
    materials: ["Seed beads", "14K gold-filled chain", "Sterling silver clasp"],
    careInstructions: "Avoid exposure to water and cosmetics.",
  },
  {
    id: "n-003",
    name: "Pearl Cascade Necklace",
    category: "necklace",
    price: 3299,
    originalPrice: 3999,
    description: "Multi-strand beaded necklace with pearl and floral accents",
    longDescription:
      "This show-stopping multi-strand necklace weaves together freshwater pearls, glass beads, and hand-crafted floral elements into a cascading design that moves gracefully with the wearer. Each strand is individually knotted for security and a luxurious feel.",
    images: ["/images/necklace/necklace-5.jpeg", "/images/necklace/necklace-6.jpeg"],
    tags: ["multi-strand", "pearl", "bridal", "luxury"],
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 34,
    materials: ["Freshwater pearls", "Crystal beads", "Gold-filled wire", "Silk thread"],
    careInstructions: "Store separately. Handle with extreme care. Dry clean only.",
  },
  {
    id: "n-004",
    name: "Rosette Choker",
    category: "necklace",
    price: 1999,
    description: "Elegant beaded choker adorned with hand-crafted rosette clusters",
    longDescription:
      "This close-fitting choker makes an immediate statement. Featuring five hand-crafted rosette clusters evenly spaced along a beaded base, it sits elegantly at the collarbone. The rosettes are crafted using a traditional Afghan beadwork technique.",
    images: ["/images/necklace/necklace-7.jpeg", "/images/necklace/necklace-8.jpeg"],
    tags: ["choker", "rosette", "statement", "artisan"],
    isNew: true,
    rating: 4.7,
    reviewCount: 51,
    materials: ["Glass beads", "Velvet ribbon", "Gold-plated clasp"],
    careInstructions: "Store on a flat surface. Avoid stretching.",
  },
  {
    id: "n-005",
    name: "Wildflower Lariat",
    category: "necklace",
    price: 2199,
    description: "Long lariat necklace with wildflower bead clusters at each end",
    longDescription:
      "Versatile and utterly romantic, this lariat necklace can be styled multiple ways. The long strands are finished with hand-beaded wildflower clusters, each flower unique as the one found in nature. Wear it looped, knotted, or draped for different looks.",
    images: ["/images/necklace/necklace-9.jpeg", "/images/necklace/necklace-10.jpeg"],
    tags: ["lariat", "versatile", "wildflower", "boho-luxury"],
    rating: 4.8,
    reviewCount: 76,
    materials: ["Mixed beads", "Gold chain", "Hand-beaded flowers"],
    careInstructions: "Store hanging to prevent kinks. Keep away from moisture.",
  },
  {
    id: "n-006",
    name: "Moonlit Strand",
    category: "necklace",
    price: 1499,
    description: "Shimmering beaded strand with moonstone-inspired accent beads",
    longDescription:
      "Capturing the luminescence of moonlight, this single-strand necklace features hand-selected iridescent beads that shift color as they catch the light, interspersed with delicate hand-crafted flower spacers.",
    images: ["/images/necklace/necklace-11.jpeg", "/images/necklace/necklace-1.jpeg"],
    tags: ["strand", "moonstone", "iridescent", "everyday"],
    rating: 4.6,
    reviewCount: 88,
    materials: ["Iridescent glass beads", "Silver wire", "Crystal spacers"],
    careInstructions: "Clean with a soft cloth. Store in provided pouch.",
  },
];

const braceletProducts: Product[] = [
  {
    id: "b-001",
    name: "Floral Beaded Cuff",
    category: "bracelets",
    price: 1199,
    originalPrice: 1499,
    description: "Handcrafted beaded cuff bracelet with intricate floral motifs",
    longDescription:
      "This stunning cuff bracelet showcases the pinnacle of hand-beading artistry. Each floral motif is painstakingly constructed using a traditional loom-weaving technique, creating a firm yet flexible bracelet that hugs the wrist beautifully.",
    images: ["/images/bracelets/bracelet-1.jpeg", "/images/bracelets/bracelet-2.jpeg"],
    tags: ["cuff", "floral", "handwoven", "statement"],
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 93,
    materials: ["Seed beads", "Sterling silver cuff base", "Silk lining"],
    careInstructions: "Store flat. Avoid contact with water and chemicals.",
  },
  {
    id: "b-002",
    name: "Petal Stack Set",
    category: "bracelets",
    price: 999,
    description: "Set of three delicate bead bracelets designed to stack beautifully",
    longDescription:
      "Three is better than one. This curated stack set includes three thin beaded bracelets — a petal-pink strand, an ivory single-bloom accent, and a gold-toned spacer — designed to be worn together for a layered luxury look.",
    images: ["/images/bracelets/bracelet-3.jpeg", "/images/bracelets/bracelet-4.jpeg"],
    tags: ["stack", "set", "minimal", "everyday"],
    isNew: true,
    rating: 4.8,
    reviewCount: 147,
    materials: ["Glass beads", "Elastic cord", "Gold-plated beads"],
    careInstructions: "Handle elastic gently. Store in provided pouch.",
  },
  {
    id: "b-003",
    name: "Cherry Charm Bracelet",
    category: "bracelets",
    price: 1499,
    originalPrice: 1899,
    description: "Playful yet elegant bracelet featuring hand-beaded cherry charms",
    longDescription:
      "Drawing inspiration from the sweet abundance of cherry season, this bracelet features individually hand-crafted beaded cherry charms suspended from a delicate beaded chain. Each cherry is made with deep red Czech glass beads and tiny green leaf accents.",
    images: ["/images/bracelets/bracelet-5.jpeg", "/images/bracelets/bracelet-6.jpeg"],
    tags: ["charm", "cherry", "playful", "artisan"],
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 62,
    materials: ["Czech glass beads", "Gold-filled chain", "Lobster clasp"],
    careInstructions: "Avoid submerging in water. Store hanging or flat.",
  },
  {
    id: "b-004",
    name: "Wisteria Wrap",
    category: "bracelets",
    price: 1799,
    description: "Luxurious wrap bracelet with cascading beaded wisteria clusters",
    longDescription:
      "Inspired by the hanging blooms of wisteria, this wrap bracelet features cascading clusters of purple and lavender beads that drape elegantly around the wrist. The double-wrap design can also be worn as a short necklace.",
    images: ["/images/bracelets/bracelet-7.jpeg", "/images/bracelets/bracelet-8.jpeg"],
    tags: ["wrap", "wisteria", "purple", "versatile"],
    isNew: true,
    rating: 4.7,
    reviewCount: 38,
    materials: ["Amethyst beads", "Leather cord", "Gold toggle clasp"],
    careInstructions: "Avoid water to protect leather cord. Store in pouch.",
  },
  {
    id: "b-005",
    name: "Rose Gold Bangle",
    category: "bracelets",
    price: 1299,
    description: "Elegant beaded bangle in rose gold tones with floral details",
    longDescription:
      "This sleek bangle combines the warmth of rose gold tones with delicate hand-beaded floral accents. The structured form contrasts beautifully with the organic floral elements, creating a piece that bridges modern and artisan aesthetics.",
    images: ["/images/bracelets/bracelet-9.jpeg", "/images/bracelets/bracelet-10.jpeg"],
    tags: ["bangle", "rose-gold", "modern", "structured"],
    rating: 4.8,
    reviewCount: 55,
    materials: ["Rose gold beads", "Brass bangle base", "Crystal accents"],
    careInstructions: "Polish gently with a soft cloth. Keep dry.",
  },
];

export const allProducts: Product[] = [
  ...earringProducts,
  ...necklaceProducts,
  ...braceletProducts,
];

export const categories = [
  {
    id: "earrings" as Category,
    name: "Earrings",
    description: "Handcrafted floral earrings — from delicate studs to statement dangles, each pair tells a story of blooming beauty.",
    image: "/images/earrings/earring-1.jpeg",
    count: earringProducts.length,
    tagline: "From bud to bloom, adorning your story.",
  },
  {
    id: "necklace" as Category,
    name: "Neckpiece",
    description: "Artisan necklaces crafted with love — beaded blooms and cascading pearls for the woman who wears art.",
    image: "/images/necklace/necklace-1.jpeg",
    count: necklaceProducts.length,
    tagline: "Where beauty rests, close to the heart.",
  },
  {
    id: "bracelets" as Category,
    name: "Hand Accessories",
    description: "Beaded bracelets and cuffs that wrap your wrist in handmade luxury — each piece a wearable garden.",
    image: "/images/bracelets/bracelet-1.jpeg",
    count: braceletProducts.length,
    tagline: "Every gesture, adorned with intention.",
  },
];

export function getProductsByCategory(category: Category): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getBestSellers(): Product[] {
  return allProducts.filter((p) => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return allProducts.filter((p) => p.isNew);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
