import Link from "next/link";
import { Compass, Bed, Utensils, Store, Calendar, Briefcase, Home, ShoppingBag, Newspaper, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

const sections = [
  { title: "Attractions", description: "Lake Tana, Blue Nile Falls, monasteries, and museums.", url: "/attractions", icon: Compass },
  { title: "Hotels", description: "Lakefront resorts to budget-friendly lodges.", url: "/hotels", icon: Bed },
  { title: "Restaurants", description: "Traditional Ethiopian food and lakeside dining.", url: "/restaurants", icon: Utensils },
  { title: "Businesses", description: "The full directory — every category in Bahir Dar.", url: "/businesses", icon: Store },
  { title: "Neighborhoods", description: "Explore the districts of the city.", url: "/neighborhoods", icon: MapPin },
  { title: "Events", description: "Festivals, sports, and community gatherings.", url: "/events", icon: Calendar },
  { title: "News", description: "Development, infrastructure, and culture.", url: "/news", icon: Newspaper },
  { title: "Jobs", description: "Open roles from local businesses.", url: "/jobs", icon: Briefcase },
  { title: "Real Estate", description: "Buy, sell, and rent property.", url: "/real-estate", icon: Home },
  { title: "Marketplace", description: "Buy and sell within the community.", url: "/marketplace", icon: ShoppingBag },
];

export const metadata = { title: "Explore" };

export default function ExplorePage() {
  return (
    <div>
      <PageHeader eyebrow="Explore" title="Everything Bahir Dar" subtitle="Jump into any part of the city's digital home." />
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.url} href={s.url}>
              <Card className="flex h-full items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tana-50 text-tana-600">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium text-stone-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{s.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
