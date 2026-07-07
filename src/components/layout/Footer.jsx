import Link from "next/link";
import { Facebook, Instagram, Twitter, Waves } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { title: "Attractions", url: "/attractions" },
      { title: "Hotels", url: "/hotels" },
      { title: "Restaurants", url: "/restaurants" },
      { title: "Neighborhoods", url: "/neighborhoods" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Events", url: "/events" },
      { title: "Jobs", url: "/jobs" },
      { title: "Real Estate", url: "/real-estate" },
      { title: "Marketplace", url: "/marketplace" },
    ],
  },
  {
    title: "Business",
    links: [
      { title: "Add your business", url: "/submit" },
      { title: "Business dashboard", url: "/dashboard" },
      { title: "Advertise", url: "/advertise" },
      { title: "Premium listings", url: "/premium" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "Government", url: "/government" },
      { title: "Tourism office", url: "/tourism" },
      { title: "Emergency contacts", url: "/emergency" },
      { title: "Contact us", url: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Waves className="h-6 w-6 text-tana-400" />
              Bahir Dar City
            </div>
            <p className="mt-3 max-w-xs text-sm text-stone-400">
              The digital home of Bahir Dar — for residents, businesses, tourists, students, and the diaspora.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="rounded-full bg-stone-800 p-2 hover:bg-stone-700">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-stone-800 p-2 hover:bg-stone-700">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-full bg-stone-800 p-2 hover:bg-stone-700">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.url}>
                    <Link href={link.url} className="text-sm text-stone-400 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bahir Dar City. Built for the community.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-stone-300">Privacy</Link>
            <Link href="/terms" className="hover:text-stone-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
