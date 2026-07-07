import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/layout/PageHeader";
import { getAllEvents } from "@/lib/data";

export const metadata = { title: "Events" };

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <div>
      <PageHeader eyebrow="Community" title="Events" subtitle="Music, sports, festivals, and community gatherings around Bahir Dar.">
        <Button href="/events/submit" variant="primary" size="sm" className="mt-4">
          Submit an event
        </Button>
      </PageHeader>

      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <Link key={e.id} href={`/events/${e.slug}`}>
              <Card className="h-full">
                <div className="relative h-44 w-full">
                  <Image src={e.poster} alt={e.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="tana">{formatDate(e.startsAt)}</Badge>
                    <Badge tone="sunset">{e.category}</Badge>
                  </div>
                  <h3 className="mt-2 font-medium text-stone-900">{e.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{e.location}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
