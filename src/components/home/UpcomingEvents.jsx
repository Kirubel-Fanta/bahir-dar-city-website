import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import SectionHeader from "./SectionHeader";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function UpcomingEvents({ events }) {
  if (!events?.length) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-page">
        <SectionHeader title="Upcoming events" subtitle="Things happening around the city" href="/events" />

        <ol className="relative space-y-8 border-l border-stone-200 pl-6 sm:pl-8">
          {events.map((e) => (
            <li key={e.id} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-tana-600 ring-4 ring-tana-100 sm:-left-[39px]" />
              <Link
                href={`/events/${e.slug}`}
                className="flex flex-col gap-4 rounded-2xl p-2 transition-colors hover:bg-stone-50 sm:flex-row sm:items-center"
              >
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
                  <Image src={e.poster} alt={e.title} fill className="object-cover" sizes="200px" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="tana">{formatDate(e.startsAt)}</Badge>
                    <Badge tone="sunset">{e.category}</Badge>
                  </div>
                  <h3 className="mt-2 font-medium text-stone-900">{e.title}</h3>
                  <p className="mt-1 text-sm text-stone-500">{e.location}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
