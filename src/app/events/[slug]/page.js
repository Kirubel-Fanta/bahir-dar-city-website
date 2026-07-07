import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, MapPin, User } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getEventBySlug } from "@/lib/data";

export async function generateMetadata({ params }) {
  const event = await getEventBySlug(params.slug);
  if (!event) return {};
  return { title: event.title, description: event.description };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function EventDetailPage({ params }) {
  const event = await getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <div>
      <div className="relative h-72 w-full sm:h-96">
        <Image src={event.poster} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
        <div className="container-page absolute bottom-0 left-0 right-0 pb-6 text-white">
          <Badge tone="sunset">{event.category}</Badge>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{event.title}</h1>
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-semibold text-stone-900">About this event</h2>
          <p className="mt-3 text-stone-600">{event.description}</p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <dl className="space-y-3 text-sm text-stone-600">
              <div className="flex items-start gap-2">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-tana-600" />
                <span>{formatDate(event.startsAt)}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tana-600" />
                <span>{event.location}</span>
              </div>
              {event.organizer && (
                <div className="flex items-start gap-2">
                  <User className="mt-0.5 h-4 w-4 shrink-0 text-tana-600" />
                  <span>Organized by {event.organizer}</span>
                </div>
              )}
            </dl>
            {event.ticketUrl ? (
              <Button href={event.ticketUrl} className="mt-4 w-full">
                Get tickets
              </Button>
            ) : (
              <Button variant="secondary" className="mt-4 w-full">
                Add to calendar
              </Button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
