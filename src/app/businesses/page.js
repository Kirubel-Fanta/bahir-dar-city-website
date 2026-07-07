import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import BusinessCard from "@/components/business/BusinessCard";
import { getBusinesses, getCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata = { title: "Business Directory" };

export default async function BusinessesPage({ searchParams }) {
  const categorySlug = searchParams?.category;
  const [businesses, categories] = await Promise.all([
    getBusinesses({ categorySlug, sort: searchParams?.sort }),
    getCategories(),
  ]);

  return (
    <div>
      <PageHeader
        eyebrow="Directory"
        title="Business directory"
        subtitle="Hotels, restaurants, hospitals, banks, and every other business in Bahir Dar — searchable and up to date."
      />

      <div className="container-page py-10">
        <div className="mb-8 flex flex-wrap gap-2">
          <Link
            href="/businesses"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium",
              !categorySlug ? "bg-tana-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            )}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/businesses?category=${c.slug}`}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                categorySlug === c.slug ? "bg-tana-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              )}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {businesses.length === 0 ? (
          <p className="text-stone-500">No businesses found in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
