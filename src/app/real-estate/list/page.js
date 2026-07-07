"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const propertyTypes = ["House", "Apartment", "Villa", "Land", "Commercial", "Office"];
const listingTypes = ["Rent", "Sale"];

export default function ListPropertyPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    propertyType: propertyTypes[0],
    listingType: listingTypes[0],
    price: "",
    location: "",
    agentName: "",
    agentPhone: "",
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
    const res = await fetch("/api/properties", {
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
      <PageHeader eyebrow="Real estate" title="List a property" subtitle="Reach buyers and renters across Bahir Dar." />
      <div className="container-page max-w-2xl py-10">
        {done ? (
          <div className="rounded-2xl bg-palm-50 p-6 text-palm-800">
            Your property is listed. <a href="/real-estate" className="font-medium underline">View listings</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input id="title" label="Listing title" required value={form.title} onChange={update("title")} className="sm:col-span-2" />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="propertyType" className="text-sm font-medium text-stone-700">Property type</label>
              <select id="propertyType" value={form.propertyType} onChange={update("propertyType")} className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-tana-500">
                {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="listingType" className="text-sm font-medium text-stone-700">For</label>
              <select id="listingType" value={form.listingType} onChange={update("listingType")} className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-tana-500">
                {listingTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <Input id="price" label="Price (ETB)" required type="number" value={form.price} onChange={update("price")} />
            <Input id="location" label="Location" required value={form.location} onChange={update("location")} />
            <Input id="agentName" label="Agent / contact name" value={form.agentName} onChange={update("agentName")} />
            <Input id="agentPhone" label="Agent phone" value={form.agentPhone} onChange={update("agentPhone")} />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="description" className="text-sm font-medium text-stone-700">Description</label>
              <textarea id="description" required rows={4} value={form.description} onChange={update("description")} className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none focus:border-tana-500" />
            </div>

            {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

            <Button type="submit" disabled={loading} className="sm:col-span-2">
              {loading ? "Listing..." : "List property"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
