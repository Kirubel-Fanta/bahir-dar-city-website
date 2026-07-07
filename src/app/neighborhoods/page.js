import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { getNeighborhoods } from "@/lib/data";

export const metadata = { title: "Neighborhoods" };

export default async function NeighborhoodsPage() {
  const neighborhoods = await getNeighborhoods();

  return (
    <div>
      <PageHeader eyebrow="Explore" title="Neighborhoods" subtitle="Get to know the districts of Bahir Dar." />
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((n) => (
            <Link key={n.id} href={`/neighborhoods/${n.slug}`} className="group relative h-56 overflow-hidden rounded-2xl">
              <Image src={n.image} alt={n.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
              <span className="absolute bottom-3 left-3 font-medium text-white">{n.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
