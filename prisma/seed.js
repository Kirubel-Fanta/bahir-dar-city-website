const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const IMG = (n) => `/static/media/Bahir-dar-${n}.jpg`;
const STOCK_IMG = (name) => `/static/media/${name}.jpg`;

// Free-to-use photos from Wikimedia Commons, downloaded into
// public/static/media/ and swapped in for listings where a generic Bahir Dar
// landscape shot didn't match the actual subject (cars, electronics,
// furniture, bikes, and property listings). Served locally rather than
// hotlinked so the site doesn't depend on Wikimedia's CDN at runtime.
// Attribution (required for the CC BY / CC BY-SA ones; two are CC0) is
// tracked in public/static/media/STOCK_PHOTO_CREDITS.md — carry it over if
// this content ships to production.
const STOCK = {
  toyotaVitz: STOCK_IMG("stock-toyota-vitz"),
  iphone13: STOCK_IMG("stock-iphone13"),
  diningTable: STOCK_IMG("stock-dining-table"),
  mountainBike: STOCK_IMG("stock-mountain-bike"),
  houseExterior: STOCK_IMG("stock-house-exterior"),
  apartmentBlock: STOCK_IMG("stock-apartment-block"),
  clearedLot: STOCK_IMG("stock-cleared-lot"),
  studioInterior: STOCK_IMG("stock-studio-interior"),
  hospitalEntrance: STOCK_IMG("stock-hospital-entrance"),
  bankBranch: STOCK_IMG("stock-bank-branch"),
  coffeeCeremony1: STOCK_IMG("stock-coffee-ceremony-1"),
  coffeeCeremony2: STOCK_IMG("stock-coffee-ceremony-2"),
};

const categories = [
  { name: "Hotels", slug: "hotels", group: "Accommodation", icon: "bed" },
  { name: "Restaurants", slug: "restaurants", group: "Food & Drink", icon: "utensils" },
  { name: "Coffee Shops", slug: "coffee-shops", group: "Food & Drink", icon: "coffee" },
  { name: "Hospitals", slug: "hospitals", group: "Health", icon: "cross" },
  { name: "Banks", slug: "banks", group: "Services", icon: "landmark" },
  { name: "Schools", slug: "schools", group: "Education", icon: "school" },
  { name: "Travel Agencies", slug: "travel-agencies", group: "Tourism", icon: "plane" },
];

const businesses = [
  {
    name: "Kuriftu Resort & Spa",
    slug: "kuriftu-resort-spa",
    description:
      "Lakefront resort on Lake Tana offering traditional Ethiopian architecture, spa treatments, and boat tour bookings.",
    categorySlug: "hotels",
    neighborhood: "Lake Tana Shore",
    heroImage: IMG(2),
    priceRange: "$$$",
    rating: 4.7,
    reviewCount: 812,
    featured: true,
    trending: true,
  },
  {
    name: "Papyrus Restaurant",
    slug: "papyrus-restaurant",
    description: "Traditional Ethiopian cuisine with a lakeside terrace, popular for injera and doro wat.",
    categorySlug: "restaurants",
    neighborhood: "Central Bahir Dar",
    heroImage: IMG(3),
    priceRange: "$$",
    rating: 4.5,
    reviewCount: 356,
    featured: true,
    trending: true,
  },
  {
    name: "Rendezvous Cafe",
    slug: "rendezvous-cafe",
    description: "A cozy coffee shop known for its Ethiopian coffee ceremony and fast wifi, a favorite for students.",
    categorySlug: "coffee-shops",
    neighborhood: "University Area",
    heroImage: STOCK.coffeeCeremony1,
    priceRange: "$",
    rating: 4.6,
    reviewCount: 214,
    trending: true,
  },
  {
    name: "Tana Hospital",
    slug: "tana-hospital",
    description: "General hospital providing emergency and outpatient services in central Bahir Dar.",
    categorySlug: "hospitals",
    neighborhood: "Central Bahir Dar",
    heroImage: STOCK.hospitalEntrance,
    rating: 4.1,
    reviewCount: 98,
  },
  {
    name: "Abay Travel & Tours",
    slug: "abay-travel-tours",
    description: "Boat tours to the Lake Tana monasteries and guided trips to Blue Nile Falls.",
    categorySlug: "travel-agencies",
    neighborhood: "Central Bahir Dar",
    heroImage: IMG(7),
    priceRange: "$$",
    rating: 4.8,
    reviewCount: 431,
    featured: true,
  },
  {
    name: "Commercial Bank of Ethiopia — Bahir Dar Branch",
    slug: "cbe-bahir-dar-branch",
    description: "Full-service bank branch with ATM access, located near the main market.",
    categorySlug: "banks",
    neighborhood: "Central Bahir Dar",
    heroImage: STOCK.bankBranch,
    rating: 3.9,
    reviewCount: 60,
  },
  {
    name: "Jacaranda Hotel",
    slug: "jacaranda-hotel",
    description: "Mid-range hotel in the city center, popular with business travelers and close to the main market.",
    categorySlug: "hotels",
    neighborhood: "Central Bahir Dar",
    heroImage: IMG(9),
    priceRange: "$$",
    rating: 4.2,
    reviewCount: 267,
  },
  {
    name: "Blue Nile Lodge",
    slug: "blue-nile-lodge",
    description: "Budget-friendly lakeside lodge with simple rooms and easy access to boat docks.",
    categorySlug: "hotels",
    neighborhood: "Lake Tana Shore",
    heroImage: IMG(10),
    priceRange: "$",
    rating: 4.0,
    reviewCount: 143,
  },
  {
    name: "Desset Fasil Traditional Restaurant",
    slug: "desset-fasil-traditional-restaurant",
    description: "Traditional Ethiopian dining with live cultural music and dance performances most evenings.",
    categorySlug: "restaurants",
    neighborhood: "Central Bahir Dar",
    heroImage: IMG(11),
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 289,
    trending: true,
  },
  {
    name: "Ristorante Bahir Dar",
    slug: "ristorante-bahir-dar",
    description: "Italian-Ethiopian fusion restaurant with a lakeside patio, popular for pizza night.",
    categorySlug: "restaurants",
    neighborhood: "Lake Tana Shore",
    heroImage: IMG(6),
    priceRange: "$$",
    rating: 4.3,
    reviewCount: 176,
  },
  {
    name: "Yohannes Coffee House",
    slug: "yohannes-coffee-house",
    description: "Long-running coffee house serving traditional Ethiopian coffee ceremonies and pastries.",
    categorySlug: "coffee-shops",
    neighborhood: "Central Bahir Dar",
    heroImage: STOCK.coffeeCeremony2,
    priceRange: "$",
    rating: 4.5,
    reviewCount: 198,
  },
];

const events = [
  {
    title: "Timkat Festival Celebration",
    slug: "timkat-festival",
    description: "Annual Ethiopian Epiphany celebration with processions, music, and traditional dress around Lake Tana.",
    category: "Festivals",
    poster: IMG(9),
    location: "Lake Tana Shore",
    startsAt: new Date("2026-01-19T09:00:00"),
    organizer: "Bahir Dar City Administration",
  },
  {
    title: "Lake Tana Marathon",
    slug: "lake-tana-marathon",
    description: "A scenic marathon and 10K along the shores of Lake Tana, open to residents and visitors.",
    category: "Sports",
    poster: IMG(10),
    location: "Bahir Dar Stadium",
    startsAt: new Date("2026-08-15T07:00:00"),
    organizer: "Amhara Sports Commission",
  },
  {
    title: "Bahir Dar Tech Meetup",
    slug: "bahir-dar-tech-meetup",
    description: "Monthly meetup for developers, startups, and students in Bahir Dar's growing tech scene.",
    category: "Business",
    poster: IMG(11),
    location: "Bahir Dar University Innovation Hub",
    startsAt: new Date("2026-07-25T17:00:00"),
    organizer: "BDU Tech Community",
  },
];

const articles = [
  {
    title: "New Ring Road Project to Ease Traffic in Bahir Dar",
    slug: "new-ring-road-project",
    excerpt: "City officials break ground on a ring road intended to reduce congestion in the city center.",
    content: "Full article content coming soon.",
    category: "Infrastructure",
    featuredImage: IMG(1),
    author: "Bahir Dar City Desk",
    readingTime: 4,
  },
  {
    title: "Lake Tana Water Levels Rise After Rainy Season",
    slug: "lake-tana-water-levels-rise",
    excerpt: "Local authorities report improved water levels benefiting fishing communities and boat operators.",
    content: "Full article content coming soon.",
    category: "Development",
    featuredImage: IMG(5),
    author: "Bahir Dar City Desk",
    readingTime: 3,
  },
  {
    title: "Bahir Dar University Opens New Engineering Campus",
    slug: "bdu-new-engineering-campus",
    excerpt: "The expansion adds capacity for 3,000 additional students starting next academic year.",
    content: "Full article content coming soon.",
    category: "Education",
    featuredImage: IMG(9),
    author: "Bahir Dar City Desk",
    readingTime: 5,
  },
];

const neighborhoods = [
  {
    name: "Lake Tana Shore",
    slug: "lake-tana-shore",
    description: "Lakefront neighborhood with resorts, boat docks, and waterfront restaurants.",
    image: IMG(2),
  },
  {
    name: "Central Bahir Dar",
    slug: "central-bahir-dar",
    description: "The commercial heart of the city — markets, banks, and government offices.",
    image: IMG(8),
  },
  {
    name: "University Area",
    slug: "university-area",
    description: "Student-heavy district near Bahir Dar University with cafes and budget stays.",
    image: IMG(4),
  },
];

const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => ({
  url: IMG(n),
  width: 3,
  height: [3, 4, 5][n % 3],
}));

const attractions = [
  {
    name: "Lake Tana",
    slug: "lake-tana",
    description:
      "Africa's third-largest lake and the source of the Blue Nile, dotted with island monasteries and abundant birdlife. Boat trips depart daily from the main dock.",
    heroImage: IMG(2),
    category: "Nature",
    entryFee: "Free (boat tours from 800 ETB)",
  },
  {
    name: "Blue Nile Falls",
    slug: "blue-nile-falls",
    description:
      "Known locally as Tis Issat (\"smoking water\"), these dramatic falls are most powerful during the rainy season (June–September).",
    heroImage: IMG(5),
    category: "Nature",
    entryFee: "200 ETB",
  },
  {
    name: "Zege Peninsula Monasteries",
    slug: "zege-peninsula-monasteries",
    description:
      "A cluster of centuries-old monasteries on a forested peninsula, reachable by boat, home to some of the region's oldest religious murals.",
    heroImage: IMG(9),
    category: "Monasteries",
    entryFee: "100 ETB",
  },
  {
    name: "Bahir Dar Ethnographic Museum",
    slug: "bahir-dar-ethnographic-museum",
    description:
      "A small museum on the Bahir Dar University campus showcasing Amhara cultural artifacts, traditional dress, and religious manuscripts.",
    heroImage: IMG(7),
    category: "Museums",
    entryFee: "50 ETB",
  },
];

const jobs = [
  {
    title: "Front Desk Receptionist",
    slug: "front-desk-receptionist-kuriftu",
    company: "Kuriftu Resort & Spa",
    description: "Manage guest check-in/check-out, reservations, and phone inquiries at our lakefront resort.",
    category: "Hospitality",
    type: "Full-time",
    location: "Lake Tana Shore",
    salaryMin: 6000,
    salaryMax: 9000,
    experience: "Entry",
    applyEmail: "careers@kuriftu-example.com",
  },
  {
    title: "Boat Tour Guide",
    slug: "boat-tour-guide-abay-travel",
    company: "Abay Travel & Tours",
    description: "Lead guided boat tours to the Lake Tana monasteries; English and Amharic required.",
    category: "Tourism",
    type: "Full-time",
    location: "Central Bahir Dar",
    salaryMin: 5000,
    salaryMax: 8000,
    experience: "Mid",
    applyEmail: "jobs@abaytravel-example.com",
  },
  {
    title: "Junior Software Developer",
    slug: "junior-software-developer-bdu-hub",
    company: "BDU Innovation Hub",
    description: "Join a small team building web and mobile tools for local businesses. React/Node experience a plus.",
    category: "Technology",
    type: "Full-time",
    location: "University Area",
    salaryMin: 8000,
    salaryMax: 14000,
    experience: "Entry",
    applyUrl: "https://example.com/apply/bdu-hub",
  },
  {
    title: "Restaurant Server (Part-time)",
    slug: "restaurant-server-parttime-ristorante",
    company: "Ristorante Bahir Dar",
    description: "Evening and weekend shifts serving guests at our lakeside patio restaurant.",
    category: "Hospitality",
    type: "Part-time",
    location: "Lake Tana Shore",
    salaryMin: 2500,
    salaryMax: 4000,
    experience: "Entry",
    applyEmail: "hr@ristorante-example.com",
  },
];

const properties = [
  {
    title: "3-Bedroom House near Lake Tana Shore",
    slug: "3br-house-lake-tana-shore",
    description: "Spacious family home with a private garden, 10 minutes' walk from the lakefront.",
    propertyType: "House",
    listingType: "Sale",
    price: 4200000,
    bedrooms: 3,
    bathrooms: 2,
    areaSqm: 220,
    location: "Lake Tana Shore",
    image: STOCK.houseExterior,
    agentName: "Selam Real Estate",
    agentPhone: "+251 91 234 5678",
  },
  {
    title: "Modern 2-Bedroom Apartment",
    slug: "modern-2br-apartment-central",
    description: "Newly built apartment with balcony views, walking distance to the main market.",
    propertyType: "Apartment",
    listingType: "Rent",
    price: 18000,
    bedrooms: 2,
    bathrooms: 1,
    areaSqm: 95,
    location: "Central Bahir Dar",
    image: STOCK.apartmentBlock,
    agentName: "Selam Real Estate",
    agentPhone: "+251 91 234 5678",
  },
  {
    title: "Commercial Lot on Main Road",
    slug: "commercial-lot-main-road",
    description: "500 sqm commercial land plot fronting the main road, suitable for retail or offices.",
    propertyType: "Land",
    listingType: "Sale",
    price: 6500000,
    areaSqm: 500,
    location: "Central Bahir Dar",
    image: STOCK.clearedLot,
    agentName: "Tana Properties",
    agentPhone: "+251 91 876 5432",
  },
  {
    title: "Studio Apartment near University",
    slug: "studio-apartment-near-university",
    description: "Compact, affordable studio ideal for students, fully furnished.",
    propertyType: "Apartment",
    listingType: "Rent",
    price: 6000,
    bedrooms: 1,
    bathrooms: 1,
    areaSqm: 35,
    location: "University Area",
    image: STOCK.studioInterior,
    agentName: "Tana Properties",
    agentPhone: "+251 91 876 5432",
  },
];

const marketplaceListings = [
  {
    title: "Toyota Vitz 2015 — Well Maintained",
    slug: "toyota-vitz-2015",
    description: "Single owner, regularly serviced, new tires. Available for viewing in central Bahir Dar.",
    category: "Cars",
    condition: "Used",
    price: 950000,
    location: "Central Bahir Dar",
    image: STOCK.toyotaVitz,
    sellerName: "Dawit T.",
    sellerPhone: "+251 91 111 2222",
  },
  {
    title: "iPhone 13, 128GB",
    slug: "iphone-13-128gb",
    description: "Unlocked, minor scratches on the back, comes with original charger.",
    category: "Phones",
    condition: "Like New",
    price: 42000,
    location: "University Area",
    image: STOCK.iphone13,
    sellerName: "Hana M.",
    sellerPhone: "+251 92 333 4444",
  },
  {
    title: "Solid Wood Dining Table (6-seater)",
    slug: "solid-wood-dining-table-6-seater",
    description: "Handmade dining table with 6 chairs, minor wear, great condition.",
    category: "Furniture",
    condition: "Used",
    price: 15000,
    location: "Lake Tana Shore",
    image: STOCK.diningTable,
    sellerName: "Bethlehem A.",
  },
  {
    title: "Mountain Bicycle",
    slug: "mountain-bicycle",
    description: "21-speed mountain bike, great for getting around the city, barely used.",
    category: "Bicycles",
    condition: "Like New",
    price: 8500,
    location: "Central Bahir Dar",
    image: STOCK.mountainBike,
    sellerName: "Yonas K.",
    sellerPhone: "+251 93 555 6666",
  },
];

async function main() {
  console.log("Seeding database...");

  const categoryMap = {};
  for (const c of categories) {
    const created = await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: { name: c.name, slug: c.slug, group: c.group, icon: c.icon },
    });
    categoryMap[c.slug] = created.id;
  }

  for (const b of businesses) {
    await prisma.business.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        name: b.name,
        slug: b.slug,
        description: b.description,
        categoryId: categoryMap[b.categorySlug],
        neighborhood: b.neighborhood,
        heroImage: b.heroImage,
        priceRange: b.priceRange,
        rating: b.rating,
        reviewCount: b.reviewCount,
        featured: !!b.featured,
        trending: !!b.trending,
      },
    });
  }

  for (const e of events) {
    await prisma.event.upsert({
      where: { slug: e.slug },
      update: {},
      create: e,
    });
  }

  for (const a of articles) {
    await prisma.article.upsert({
      where: { slug: a.slug },
      update: {},
      create: a,
    });
  }

  for (const n of neighborhoods) {
    await prisma.neighborhood.upsert({
      where: { slug: n.slug },
      update: {},
      create: n,
    });
  }

  for (const p of photos) {
    await prisma.photo.create({ data: p });
  }

  for (const a of attractions) {
    await prisma.attraction.upsert({
      where: { slug: a.slug },
      update: {},
      create: a,
    });
  }

  for (const j of jobs) {
    await prisma.job.upsert({
      where: { slug: j.slug },
      update: {},
      create: j,
    });
  }

  for (const p of properties) {
    await prisma.property.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
  }

  for (const m of marketplaceListings) {
    await prisma.marketplaceListing.upsert({
      where: { slug: m.slug },
      update: {},
      create: m,
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
