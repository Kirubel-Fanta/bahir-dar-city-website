import { prisma } from "@/lib/prisma";

const CATEGORY_QUICK_LINKS = [
  { title: "Explore Attractions", url: "/attractions", icon: "compass" },
  { title: "Hotels", url: "/hotels", icon: "bed" },
  { title: "Restaurants", url: "/restaurants", icon: "utensils" },
  { title: "Businesses", url: "/businesses", icon: "store" },
  { title: "Events", url: "/events", icon: "calendar" },
  { title: "Jobs", url: "/jobs", icon: "briefcase" },
  { title: "Real Estate", url: "/real-estate", icon: "home" },
  { title: "Marketplace", url: "/marketplace", icon: "shopping-bag" },
];

export function getQuickLinks() {
  return CATEGORY_QUICK_LINKS;
}

export async function getTrendingBusinesses() {
  return prisma.business.findMany({
    where: { trending: true },
    include: { category: true },
    orderBy: { rating: "desc" },
    take: 6,
  });
}

export async function getFeaturedBusinesses() {
  return prisma.business.findMany({
    where: { featured: true },
    include: { category: true },
    orderBy: { rating: "desc" },
    take: 6,
  });
}

export async function getUpcomingEvents() {
  return prisma.event.findMany({
    where: { approved: true, startsAt: { gte: new Date("2026-01-01") } },
    orderBy: { startsAt: "asc" },
    take: 5,
  });
}

export async function getLatestArticles() {
  return prisma.article.findMany({
    orderBy: { publishedAt: "desc" },
    take: 3,
  });
}

export async function getNeighborhoods() {
  return prisma.neighborhood.findMany({ take: 6 });
}

export async function getCommunityPhotos() {
  return prisma.photo.findMany({
    orderBy: { createdAt: "desc" },
    take: 12,
  });
}

export async function getCategories() {
  return prisma.category.findMany({ orderBy: { name: "asc" } });
}

export async function getBusinesses({ categorySlug, sort } = {}) {
  return prisma.business.findMany({
    where: categorySlug ? { category: { slug: categorySlug } } : undefined,
    include: { category: true },
    orderBy: sort === "trending" ? { rating: "desc" } : { name: "asc" },
  });
}

export async function getBusinessBySlug(slug) {
  return prisma.business.findUnique({
    where: { slug },
    include: { category: true, reviews: { include: { user: true } } },
  });
}

export async function getRelatedBusinesses(business) {
  return prisma.business.findMany({
    where: { categoryId: business.categoryId, id: { not: business.id } },
    take: 4,
  });
}

export async function getAttractions() {
  return prisma.attraction.findMany({ orderBy: { name: "asc" } });
}

export async function getAttractionBySlug(slug) {
  return prisma.attraction.findUnique({ where: { slug } });
}

export async function getNeighborhoodBySlug(slug) {
  return prisma.neighborhood.findUnique({ where: { slug } });
}

export async function getAllEvents() {
  return prisma.event.findMany({
    where: { approved: true },
    orderBy: { startsAt: "asc" },
  });
}

export async function getEventBySlug(slug) {
  return prisma.event.findUnique({ where: { slug } });
}

export async function getArticles() {
  return prisma.article.findMany({ orderBy: { publishedAt: "desc" } });
}

export async function getArticleBySlug(slug) {
  return prisma.article.findUnique({ where: { slug } });
}

export async function getJobs() {
  return prisma.job.findMany({ where: { isOpen: true }, orderBy: { postedAt: "desc" } });
}

export async function getProperties() {
  return prisma.property.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getMarketplaceListings() {
  return prisma.marketplaceListing.findMany({ orderBy: { createdAt: "desc" } });
}

export async function searchAll(query) {
  if (!query?.trim()) {
    return { businesses: [], events: [], articles: [], attractions: [] };
  }

  const [businesses, events, articles, attractions] = await Promise.all([
    prisma.business.findMany({ where: { name: { contains: query } }, include: { category: true }, take: 8 }),
    prisma.event.findMany({ where: { title: { contains: query } }, take: 8 }),
    prisma.article.findMany({ where: { title: { contains: query } }, take: 8 }),
    prisma.attraction.findMany({ where: { name: { contains: query } }, take: 8 }),
  ]);

  return { businesses, events, articles, attractions };
}
