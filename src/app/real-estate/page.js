import Image from "next/image";
import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/layout/PageHeader";
import { getProperties } from "@/lib/data";

export const metadata = { title: "Real Estate" };

export default async function RealEstatePage() {
  const properties = await getProperties();

  return (
    <div>
      <PageHeader eyebrow="Property" title="Real estate" subtitle="Houses, apartments, land, and commercial property for rent or sale.">
        <Button href="/real-estate/list" variant="primary" size="sm" className="mt-4">
          List a property
        </Button>
      </PageHeader>

      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <Card key={p.id} className="h-full">
              <div className="relative h-48 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                <Badge tone={p.listingType === "Rent" ? "tana" : "sunset"} className="absolute left-3 top-3">
                  For {p.listingType}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-stone-900">{p.title}</h3>
                <p className="mt-1 text-lg font-semibold text-tana-700">
                  {p.price.toLocaleString()} ETB{p.listingType === "Rent" && "/mo"}
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-stone-500">
                  {p.bedrooms && (
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-3.5 w-3.5" /> {p.bedrooms} bd
                    </span>
                  )}
                  {p.bathrooms && (
                    <span className="flex items-center gap-1">
                      <Bath className="h-3.5 w-3.5" /> {p.bathrooms} ba
                    </span>
                  )}
                  {p.areaSqm && (
                    <span className="flex items-center gap-1">
                      <Ruler className="h-3.5 w-3.5" /> {p.areaSqm} m²
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-stone-400">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
