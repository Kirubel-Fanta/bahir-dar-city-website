"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, Waves } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  { title: "Explore", url: "/explore" },
  { title: "Businesses", url: "/businesses" },
  { title: "Events", url: "/events" },
  { title: "News", url: "/news" },
  { title: "Jobs", url: "/jobs" },
  { title: "Real Estate", url: "/real-estate" },
  { title: "Marketplace", url: "/marketplace" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-tana-900">
          <Waves className="h-6 w-6 text-tana-600" />
          Bahir Dar City
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="rounded-full px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {status === "authenticated" ? (
            <>
              <span className="px-2 text-sm text-stone-600">Hi, {session.user?.name?.split(" ")[0]}</span>
              <Button onClick={() => signOut()} variant="ghost" size="sm">
                Sign out
              </Button>
            </>
          ) : (
            <Button href="/signin" variant="ghost" size="sm">
              Sign in
            </Button>
          )}
          <Button href="/submit" variant="primary" size="sm">
            Add your business
          </Button>
        </div>

        <button
          className="lg:hidden rounded-full p-2 text-stone-700 hover:bg-stone-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-stone-200 bg-white px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
              >
                {link.title}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {status === "authenticated" ? (
                <Button onClick={() => signOut()} variant="secondary" size="sm" className="flex-1">
                  Sign out
                </Button>
              ) : (
                <Button href="/signin" variant="secondary" size="sm" className="flex-1">
                  Sign in
                </Button>
              )}
              <Button href="/submit" variant="primary" size="sm" className="flex-1">
                Add business
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
