import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata = { title: "Tourism Office" };

export default function TourismPage() {
  return (
    <div>
      <PageHeader eyebrow="Visit" title="Bahir Dar Tourism Office" subtitle="Official visitor information for Ethiopia's lakeside gem." />
      <div className="container-page py-10">
        <Card hover={false} className="p-6">
          <p className="text-stone-600">
            The Bahir Dar Tourism Office supports visitors with licensed guides, boat tour bookings to the Lake Tana
            monasteries, and up-to-date travel advisories for the Blue Nile Falls and surrounding region.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button href="/attractions">Browse attractions</Button>
            <Button href="/hotels" variant="secondary">Find a place to stay</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
