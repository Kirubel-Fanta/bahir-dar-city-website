import Hero from "@/components/home/Hero";
import TrendingPlaces from "@/components/home/TrendingPlaces";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import LatestNews from "@/components/home/LatestNews";
import FeaturedBusinesses from "@/components/home/FeaturedBusinesses";
import NeighborhoodExplorer from "@/components/home/NeighborhoodExplorer";
import CommunityPhotos from "@/components/home/CommunityPhotos";
import {
  getQuickLinks,
  getTrendingBusinesses,
  getUpcomingEvents,
  getLatestArticles,
  getFeaturedBusinesses,
  getNeighborhoods,
  getCommunityPhotos,
} from "@/lib/data";

export default async function Home() {
  const [trending, events, articles, featured, neighborhoods, photos] = await Promise.all([
    getTrendingBusinesses(),
    getUpcomingEvents(),
    getLatestArticles(),
    getFeaturedBusinesses(),
    getNeighborhoods(),
    getCommunityPhotos(),
  ]);

  return (
    <>
      <Hero quickLinks={getQuickLinks()} />
      <TrendingPlaces businesses={trending} />
      <UpcomingEvents events={events} />
      <LatestNews articles={articles} />
      <FeaturedBusinesses businesses={featured} />
      <NeighborhoodExplorer neighborhoods={neighborhoods} />
      <CommunityPhotos photos={photos} />
    </>
  );
}
