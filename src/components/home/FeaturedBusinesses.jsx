import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeader from "./SectionHeader";

export default function FeaturedBusinesses({ businesses }) {
  if (!businesses?.length) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-page">
        <SectionHeader title="Featured businesses" subtitle="Premium listings from Bahir Dar's best" href="/businesses?featured=1" />
        <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {businesses.map((b) => (
            <Link
              key={b.id}
              href={`/businesses/${b.slug}`}
              className="group relative h-72 w-64 shrink-0 overflow-hidden rounded-2xl shadow-soft"
            >
              <Image src={b.heroImage} alt={b.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="256px" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
              <Badge tone="sunset" className="absolute left-3 top-3">Featured</Badge>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-medium text-white">{b.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-stone-200">
                  <Star className="h-4 w-4 fill-sunset-400 text-sunset-400" />
                  {b.rating.toFixed(1)} · {b.category?.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
