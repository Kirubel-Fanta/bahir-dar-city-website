import Image from "next/image";
import { notFound } from "next/navigation";
import BusinessCard from "@/components/business/BusinessCard";
import { getNeighborhoodBySlug, getBusinesses } from "@/lib/data";

export async function generateMetadata({ params }) {
  const neighborhood = await getNeighborhoodBySlug(params.slug);
  if (!neighborhood) return {};
  return { title: neighborhood.name, description: neighborhood.description };
}

export default async function NeighborhoodDetailPage({ params }) {
  const neighborhood = await getNeighborhoodBySlug(params.slug);
  if (!neighborhood) notFound();

  const allBusinesses = await getBusinesses();
  const localBusinesses = allBusinesses.filter((b) => b.neighborhood === neighborhood.name);

  return (
    <div>
      <div className="relative h-64 w-full sm:h-80">
        <Image src={neighborhood.image} alt={neighborhood.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
        <div className="container-page absolute bottom-0 left-0 right-0 pb-6 text-white">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">{neighborhood.name}</h1>
        </div>
      </div>

      <div className="container-page py-10">
        <p className="max-w-2xl text-stone-600">{neighborhood.description}</p>

        <h2 className="mt-10 mb-6 font-display text-xl font-semibold text-stone-900">Businesses in this area</h2>
        {localBusinesses.length === 0 ? (
          <p className="text-stone-500">No businesses tagged in this neighborhood yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {localBusinesses.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
