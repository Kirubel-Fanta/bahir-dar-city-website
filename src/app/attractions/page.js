import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import PageHeader from "@/components/layout/PageHeader";
import { getAttractions } from "@/lib/data";

export const metadata = { title: "Attractions" };

export default async function AttractionsPage() {
  const attractions = await getAttractions();

  return (
    <div>
      <PageHeader
        eyebrow="Tourism"
        title="Attractions & things to do"
        subtitle="Lake Tana, Blue Nile Falls, island monasteries, museums, and more."
      />
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((a) => (
            <Link key={a.id} href={`/attractions/${a.slug}`}>
              <Card className="h-full">
                <div className="relative h-52 w-full">
                  <Image src={a.heroImage} alt={a.name} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                  <Badge tone="tana" className="absolute left-3 top-3">{a.category}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">{a.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-stone-500">{a.description}</p>
                  {a.entryFee && <p className="mt-2 text-xs font-medium text-stone-400">Entry: {a.entryFee}</p>}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
