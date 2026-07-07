import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function NeighborhoodExplorer({ neighborhoods }) {
  if (!neighborhoods?.length) return null;

  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeader title="Explore neighborhoods" subtitle="Get to know the districts of Bahir Dar" href="/neighborhoods" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {neighborhoods.map((n) => (
          <Link
            key={n.id}
            href={`/neighborhoods/${n.slug}`}
            className="group relative h-44 overflow-hidden rounded-2xl sm:h-56"
          >
            <Image src={n.image} alt={n.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 640px) 33vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
            <span className="absolute bottom-3 left-3 font-medium text-white">{n.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
