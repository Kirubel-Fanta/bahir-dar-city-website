import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/layout/PageHeader";
import { getMarketplaceListings } from "@/lib/data";

export const metadata = { title: "Marketplace" };

export default async function MarketplacePage() {
  const listings = await getMarketplaceListings();

  return (
    <div>
      <PageHeader eyebrow="Community" title="Marketplace" subtitle="Buy and sell cars, electronics, furniture, and more within the community.">
        <Button href="/marketplace/sell" variant="primary" size="sm" className="mt-4">
          Sell something
        </Button>
      </PageHeader>

      <div className="container-page py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {listings.map((item) => (
            <Card key={item.id} className="h-full">
              <div className="relative h-36 w-full sm:h-44">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" />
                <Badge tone="neutral" className="absolute left-2 top-2">{item.condition}</Badge>
              </div>
              <div className="p-3">
                <h3 className="line-clamp-1 text-sm font-medium text-stone-900">{item.title}</h3>
                <p className="mt-1 font-semibold text-tana-700">{item.price.toLocaleString()} ETB</p>
                <p className="mt-1 text-xs text-stone-400">{item.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
