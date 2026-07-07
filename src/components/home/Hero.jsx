import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Bed,
  Utensils,
  Store,
  Calendar,
  Briefcase,
  Home as HomeIcon,
  ShoppingBag,
} from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

const ICONS = {
  compass: Compass,
  bed: Bed,
  utensils: Utensils,
  store: Store,
  calendar: Calendar,
  briefcase: Briefcase,
  home: HomeIcon,
  "shopping-bag": ShoppingBag,
};

export default function Hero({ quickLinks }) {
  return (
    <section className="relative isolate">
      <div className="relative h-[560px] w-full sm:h-[620px]">
        <Image
          src="/static/media/Bahir-dar-5.jpg"
          alt="Aerial view of Lake Tana and Bahir Dar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/35 to-stone-950/70" />

        <div className="container-page relative flex h-full flex-col items-center justify-center text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-tana-200">
            Bahir Dar, Ethiopia
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Everything Bahir Dar, in one place.
          </h1>
          <p className="mt-4 max-w-xl text-base text-stone-100/90 sm:text-lg">
            Discover businesses, attractions, events, jobs, and more — built by and for the Bahir Dar community.
          </p>

          <div className="mt-8 w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="container-page -mt-10 relative z-10 sm:-mt-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-lifted sm:grid-cols-4 sm:gap-4 sm:p-4 lg:grid-cols-8">
          {quickLinks.map((link) => {
            const Icon = ICONS[link.icon] ?? Compass;
            return (
              <Link
                key={link.url}
                href={link.url}
                className="flex flex-col items-center gap-2 rounded-xl px-2 py-4 text-center transition-colors hover:bg-stone-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tana-50 text-tana-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium text-stone-700 sm:text-sm">{link.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
