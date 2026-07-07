"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const categories = ["Music", "Sports", "Community", "Education", "Church", "Business", "Festivals", "Conferences"];

export default function SubmitEventPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    category: categories[0],
    description: "",
    location: "",
    startsAt: "",
    organizer: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
      return;
    }

    setDone(true);
  }

  return (
    <div>
      <PageHeader eyebrow="Community" title="Submit an event" subtitle="Events are reviewed by our team before appearing publicly." />
      <div className="container-page max-w-2xl py-10">
        {done ? (
          <div className="rounded-2xl bg-palm-50 p-6 text-palm-800">
            Thanks! Your event has been submitted and is pending review.{" "}
            <button onClick={() => router.push("/events")} className="font-medium underline">
              Back to events
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input id="title" label="Event title" required value={form.title} onChange={update("title")} className="sm:col-span-2" />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="category" className="text-sm font-medium text-stone-700">
                Category
              </label>
              <select
                id="category"
                value={form.category}
                onChange={update("category")}
                className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none focus:border-tana-500"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <Input id="location" label="Location" required value={form.location} onChange={update("location")} />
            <Input id="startsAt" label="Date & time" required type="datetime-local" value={form.startsAt} onChange={update("startsAt")} />
            <Input id="organizer" label="Organizer" value={form.organizer} onChange={update("organizer")} />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="description" className="text-sm font-medium text-stone-700">
                Description
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={form.description}
                onChange={update("description")}
                className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-tana-500"
              />
            </div>

            {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

            <Button type="submit" disabled={loading} className="sm:col-span-2">
              {loading ? "Submitting..." : "Submit event"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
