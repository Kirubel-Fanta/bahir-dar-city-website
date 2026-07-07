import PageHeader from "@/components/layout/PageHeader";
import BusinessCard from "@/components/business/BusinessCard";
import { getBusinesses } from "@/lib/data";

export const metadata = { title: "Restaurants" };

export default async function RestaurantsPage() {
  const restaurants = await getBusinesses({ categorySlug: "restaurants" });

  return (
    <div>
      <PageHeader
        eyebrow="Eat"
        title="Restaurants in Bahir Dar"
        subtitle="Traditional Ethiopian cuisine, lakeside dining, and everything else worth a visit."
      />
      <div className="container-page py-10">
        {restaurants.length === 0 ? (
          <p className="text-stone-500">No restaurants listed yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
