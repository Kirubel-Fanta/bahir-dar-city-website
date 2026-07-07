import PageHeader from "@/components/layout/PageHeader";
import BusinessCard from "@/components/business/BusinessCard";
import { getBusinesses } from "@/lib/data";

export const metadata = { title: "Hotels" };

export default async function HotelsPage() {
  const hotels = await getBusinesses({ categorySlug: "hotels" });

  return (
    <div>
      <PageHeader
        eyebrow="Stay"
        title="Hotels in Bahir Dar"
        subtitle="Lakefront resorts, budget lodges, and everything in between."
      />
      <div className="container-page py-10">
        {hotels.length === 0 ? (
          <p className="text-stone-500">No hotels listed yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
