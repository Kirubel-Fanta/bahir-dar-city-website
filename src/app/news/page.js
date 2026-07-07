import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import PageHeader from "@/components/layout/PageHeader";
import { getArticles } from "@/lib/data";

export const metadata = { title: "Local News" };

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <div>
      <PageHeader eyebrow="News" title="Local news" subtitle="Development, infrastructure, education, and culture in Bahir Dar." />
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.id} href={`/news/${a.slug}`}>
              <Card className="h-full">
                <div className="relative h-44 w-full">
                  <Image src={a.featuredImage} alt={a.title} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                </div>
                <div className="p-4">
                  <Badge tone="tana">{a.category}</Badge>
                  <h3 className="mt-2 line-clamp-2 font-medium text-stone-900">{a.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-stone-500">{a.excerpt}</p>
                  <div className="mt-3 text-xs text-stone-400">
                    {a.author} · {a.readingTime} min read
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
