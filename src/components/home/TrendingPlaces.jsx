import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "./SectionHeader";

export default function TrendingPlaces({ businesses }) {
  if (!businesses?.length) return null;

  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeader
        title="Trending places"
        subtitle="What people in Bahir Dar are checking out right now"
        href="/businesses?sort=trending"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((b) => (
          <Link key={b.id} href={`/businesses/${b.slug}`}>
            <Card className="h-full">
              <div className="relative h-48 w-full">
                <Image src={b.heroImage} alt={b.name} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                <Badge tone={b.isOpenNow ? "open" : "closed"} className="absolute left-3 top-3">
                  {b.isOpenNow ? "Open now" : "Closed"}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-stone-900">{b.name}</h3>
                  <div className="flex shrink-0 items-center gap-1 text-sm text-stone-700">
                    <Star className="h-4 w-4 fill-sunset-400 text-sunset-400" />
                    {b.rating.toFixed(1)}
                  </div>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-stone-500">{b.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-stone-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {b.neighborhood ?? b.category?.name}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
