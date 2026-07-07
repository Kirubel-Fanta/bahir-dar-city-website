import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function BusinessCard({ business }) {
  return (
    <Link href={`/businesses/${business.slug}`}>
      <Card className="h-full">
        <div className="relative h-48 w-full">
          <Image
            src={business.heroImage}
            alt={business.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <Badge tone={business.isOpenNow ? "open" : "closed"} className="absolute left-3 top-3">
            {business.isOpenNow ? "Open now" : "Closed"}
          </Badge>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-stone-900">{business.name}</h3>
            <div className="flex shrink-0 items-center gap-1 text-sm text-stone-700">
              <Star className="h-4 w-4 fill-sunset-400 text-sunset-400" />
              {business.rating.toFixed(1)}
            </div>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-stone-500">{business.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-stone-400">
              <MapPin className="h-3.5 w-3.5" />
              {business.neighborhood ?? business.category?.name}
            </div>
            {business.priceRange && <span className="text-xs font-medium text-stone-500">{business.priceRange}</span>}
          </div>
        </div>
      </Card>
    </Link>
  );
}
