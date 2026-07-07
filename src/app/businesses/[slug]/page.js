import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, MapPin, Phone, Globe, Flag } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import BusinessCard from "@/components/business/BusinessCard";
import { getBusinessBySlug, getRelatedBusinesses } from "@/lib/data";

export async function generateMetadata({ params }) {
  const business = await getBusinessBySlug(params.slug);
  if (!business) return {};
  return { title: business.name, description: business.description };
}

export default async function BusinessDetailPage({ params }) {
  const business = await getBusinessBySlug(params.slug);
  if (!business) notFound();

  const related = await getRelatedBusinesses(business);

  return (
    <div>
      <div className="relative h-72 w-full sm:h-96">
        <Image src={business.heroImage} alt={business.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
        <div className="container-page absolute bottom-0 left-0 right-0 pb-6 text-white">
          <Badge tone="tana">{business.category?.name}</Badge>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{business.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-sunset-400 text-sunset-400" />
              {business.rating.toFixed(1)} ({business.reviewCount} reviews)
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {business.neighborhood}
            </span>
            <Badge tone={business.isOpenNow ? "open" : "closed"}>{business.isOpenNow ? "Open now" : "Closed"}</Badge>
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-semibold text-stone-900">About</h2>
          <p className="mt-3 text-stone-600">{business.description}</p>

          <h2 className="mt-10 font-display text-xl font-semibold text-stone-900">Reviews</h2>
          {business.reviews.length === 0 ? (
            <p className="mt-3 text-sm text-stone-500">No reviews yet. Be the first to share your experience.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {business.reviews.map((r) => (
                <li key={r.id} className="rounded-xl bg-white p-4 shadow-soft">
                  <div className="flex items-center gap-2 text-sm font-medium text-stone-900">
                    {r.user?.name ?? "Anonymous"}
                    <span className="flex items-center gap-0.5 text-sunset-500">
                      <Star className="h-3.5 w-3.5 fill-sunset-400" /> {r.rating}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-stone-500">{r.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h3 className="font-medium text-stone-900">Contact & details</h3>
            <dl className="mt-3 space-y-2 text-sm text-stone-600">
              {business.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                  <span>{business.address}</span>
                </div>
              )}
              {business.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-stone-400" />
                  <span>{business.phone}</span>
                </div>
              )}
              {business.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 shrink-0 text-stone-400" />
                  <a href={business.website} className="text-tana-700 hover:underline">
                    {business.website}
                  </a>
                </div>
              )}
              {!business.address && !business.phone && !business.website && (
                <p className="text-stone-400">Contact details haven&apos;t been added yet.</p>
              )}
            </dl>
            <Button variant="secondary" className="mt-4 w-full">
              Claim this business
            </Button>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white p-3 text-sm font-medium text-stone-600 hover:bg-stone-50">
            <Flag className="h-4 w-4" />
            Report incorrect information
          </button>
        </aside>
      </div>

      {related.length > 0 && (
        <div className="container-page pb-14">
          <h2 className="mb-6 font-display text-xl font-semibold text-stone-900">Nearby & related businesses</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
