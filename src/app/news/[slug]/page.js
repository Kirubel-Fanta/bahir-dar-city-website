import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { getArticleBySlug } from "@/lib/data";

export async function generateMetadata({ params }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ArticleDetailPage({ params }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <article>
      <div className="relative h-72 w-full sm:h-96">
        <Image src={article.featuredImage} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
        <div className="container-page absolute bottom-0 left-0 right-0 pb-6 text-white">
          <Badge tone="tana">{article.category}</Badge>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold sm:text-4xl">{article.title}</h1>
          <p className="mt-2 text-sm text-stone-200">
            {article.author} · {formatDate(article.publishedAt)} · {article.readingTime} min read
          </p>
        </div>
      </div>

      <div className="container-page max-w-3xl py-10">
        <p className="text-lg text-stone-600">{article.excerpt}</p>
        <div className="prose prose-stone mt-6 max-w-none text-stone-700">
          <p>{article.content}</p>
        </div>
      </div>
    </article>
  );
}
