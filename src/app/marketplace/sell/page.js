"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const categories = ["Cars", "Phones", "Furniture", "Electronics", "Clothing", "Bicycles", "Books", "Appliances"];
const conditions = ["New", "Like New", "Used"];

export default function SellItemPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: categories[0],
    condition: conditions[0],
    price: "",
    location: "",
    sellerName: "",
    sellerPhone: "",
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
    const res = await fetch("/api/marketplace", {
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
      <PageHeader eyebrow="Marketplace" title="Sell something" subtitle="List an item for the Bahir Dar community to see." />
      <div className="container-page max-w-2xl py-10">
        {done ? (
          <div className="rounded-2xl bg-palm-50 p-6 text-palm-800">
            Your listing is live. <a href="/marketplace" className="font-medium underline">View marketplace</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input id="title" label="Item title" required value={form.title} onChange={update("title")} className="sm:col-span-2" />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="category" className="text-sm font-medium text-stone-700">Category</label>
              <select id="category" value={form.category} onChange={update("category")} className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-tana-500">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="condition" className="text-sm font-medium text-stone-700">Condition</label>
              <select id="condition" value={form.condition} onChange={update("condition")} className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-tana-500">
                {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <Input id="price" label="Price (ETB)" required type="number" value={form.price} onChange={update("price")} />
            <Input id="location" label="Location" required value={form.location} onChange={update("location")} />
            <Input id="sellerName" label="Your name" required value={form.sellerName} onChange={update("sellerName")} />
            <Input id="sellerPhone" label="Phone (optional)" value={form.sellerPhone} onChange={update("sellerPhone")} />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="description" className="text-sm font-medium text-stone-700">Description</label>
              <textarea id="description" required rows={4} value={form.description} onChange={update("description")} className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none focus:border-tana-500" />
            </div>

            {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

            <Button type="submit" disabled={loading} className="sm:col-span-2">
              {loading ? "Listing..." : "List item"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
