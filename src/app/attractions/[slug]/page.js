import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { getAttractionBySlug } from "@/lib/data";

export async function generateMetadata({ params }) {
  const attraction = await getAttractionBySlug(params.slug);
  if (!attraction) return {};
  return { title: attraction.name, description: attraction.description };
}

export default async function AttractionDetailPage({ params }) {
  const attraction = await getAttractionBySlug(params.slug);
  if (!attraction) notFound();

  return (
    <div>
      <div className="relative h-72 w-full sm:h-96">
        <Image src={attraction.heroImage} alt={attraction.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
        <div className="container-page absolute bottom-0 left-0 right-0 pb-6 text-white">
          <Badge tone="tana">{attraction.category}</Badge>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{attraction.name}</h1>
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-semibold text-stone-900">About</h2>
          <p className="mt-3 text-stone-600">{attraction.description}</p>

          <h2 className="mt-10 font-display text-xl font-semibold text-stone-900">Travel tips</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-600">
            <li>Best visited in the morning to avoid midday heat and crowds.</li>
            <li>Hire a licensed local guide at the dock or entrance for historical context.</li>
            <li>Bring cash — most entry fees and boat tours aren&apos;t payable by card.</li>
          </ul>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <h3 className="font-medium text-stone-900">Visitor info</h3>
            <dl className="mt-3 space-y-2 text-sm text-stone-600">
              <div className="flex justify-between">
                <dt className="text-stone-400">Entry fee</dt>
                <dd>{attraction.entryFee ?? "Free"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-400">Category</dt>
                <dd>{attraction.category}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
