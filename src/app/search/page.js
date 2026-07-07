import Link from "next/link";
import NextImage from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import SearchBar from "@/components/ui/SearchBar";
import Badge from "@/components/ui/Badge";
import { searchAll } from "@/lib/data";

export const metadata = { title: "Search" };

export default async function SearchPage({ searchParams }) {
  const query = searchParams?.q ?? "";
  const { businesses, events, articles, attractions } = await searchAll(query);
  const totalResults = businesses.length + events.length + articles.length + attractions.length;

  return (
    <div>
      <PageHeader eyebrow="Search" title={query ? `Results for "${query}"` : "Search Bahir Dar City"}>
        <div className="mt-4 max-w-xl">
          <SearchBar size="md" />
        </div>
      </PageHeader>

      <div className="container-page py-10">
        {query && totalResults === 0 && (
          <p className="text-stone-500">No results found for &quot;{query}&quot;. Try a different search term.</p>
        )}

        {businesses.length > 0 && (
          <ResultSection title="Businesses">
            {businesses.map((b) => (
              <ResultRow key={b.id} href={`/businesses/${b.slug}`} image={b.heroImage} title={b.name} subtitle={b.category?.name} />
            ))}
          </ResultSection>
        )}

        {attractions.length > 0 && (
          <ResultSection title="Attractions">
            {attractions.map((a) => (
              <ResultRow key={a.id} href={`/attractions/${a.slug}`} image={a.heroImage} title={a.name} subtitle={a.category} />
            ))}
          </ResultSection>
        )}

        {events.length > 0 && (
          <ResultSection title="Events">
            {events.map((e) => (
              <ResultRow key={e.id} href={`/events/${e.slug}`} image={e.poster} title={e.title} subtitle={e.location} />
            ))}
          </ResultSection>
        )}

        {articles.length > 0 && (
          <ResultSection title="News">
            {articles.map((a) => (
              <ResultRow key={a.id} href={`/news/${a.slug}`} image={a.featuredImage} title={a.title} subtitle={a.category} />
            ))}
          </ResultSection>
        )}
      </div>
    </div>
  );
}

function ResultSection({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-stone-900">
        {title}
        <Badge tone="neutral">{Array.isArray(children) ? children.length : 1}</Badge>
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ResultRow({ href, image, title, subtitle }) {
  return (
    <Link href={href} className="flex items-center gap-4 rounded-xl bg-white p-3 shadow-soft hover:shadow-card">
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
        <NextImage src={image} alt={title} fill className="object-cover" sizes="80px" />
      </div>
      <div>
        <p className="font-medium text-stone-900">{title}</p>
        {subtitle && <p className="text-sm text-stone-500">{subtitle}</p>}
      </div>
    </Link>
  );
}
