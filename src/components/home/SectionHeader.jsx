import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHeader({ title, subtitle, href, cta = "See all" }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-stone-500 sm:text-base">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-tana-700 hover:text-tana-800 sm:flex"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
