"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function BusinessSubmitForm({ categories }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    categorySlug: categories[0]?.slug ?? "",
    description: "",
    neighborhood: "",
    phone: "",
    email: "",
    website: "",
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

    const res = await fetch("/api/businesses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }

    const data = await res.json();
    setDone(true);
    setTimeout(() => router.push(`/businesses/${data.slug}`), 1200);
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-palm-50 p-6 text-palm-800">
        Thanks! Your business has been added. Redirecting you to its page...
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Input id="name" label="Business name" required value={form.name} onChange={update("name")} className="sm:col-span-2" />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="category" className="text-sm font-medium text-stone-700">
          Category
        </label>
        <select
          id="category"
          required
          value={form.categorySlug}
          onChange={update("categorySlug")}
          className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none focus:border-tana-500"
        >
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <Input id="neighborhood" label="Neighborhood" value={form.neighborhood} onChange={update("neighborhood")} />

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

      <Input id="phone" label="Phone" value={form.phone} onChange={update("phone")} />
      <Input id="email" label="Email" type="email" value={form.email} onChange={update("email")} />
      <Input id="website" label="Website" value={form.website} onChange={update("website")} className="sm:col-span-2" />

      {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

      <Button type="submit" disabled={loading} className="sm:col-span-2">
        {loading ? "Submitting..." : "Submit business"}
      </Button>
    </form>
  );
}
