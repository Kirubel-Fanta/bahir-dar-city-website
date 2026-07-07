"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const types = ["Full-time", "Part-time", "Contract", "Internship"];

export default function PostJobPage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    category: "",
    type: types[0],
    location: "",
    applyEmail: "",
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
    const res = await fetch("/api/jobs", {
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
      <PageHeader eyebrow="Employers" title="Post a job" subtitle="Reach job seekers across Bahir Dar for free." />
      <div className="container-page max-w-2xl py-10">
        {done ? (
          <div className="rounded-2xl bg-palm-50 p-6 text-palm-800">
            Your job posting is live. <a href="/jobs" className="font-medium underline">View job board</a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input id="title" label="Job title" required value={form.title} onChange={update("title")} className="sm:col-span-2" />
            <Input id="company" label="Company" required value={form.company} onChange={update("company")} />
            <Input id="category" label="Category" required value={form.category} onChange={update("category")} placeholder="e.g. Hospitality" />

            <div className="flex flex-col gap-1.5">
              <label htmlFor="type" className="text-sm font-medium text-stone-700">Job type</label>
              <select id="type" value={form.type} onChange={update("type")} className="h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm outline-none focus:border-tana-500">
                {types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <Input id="location" label="Location" required value={form.location} onChange={update("location")} />
            <Input id="applyEmail" label="Application email" required type="email" value={form.applyEmail} onChange={update("applyEmail")} className="sm:col-span-2" />

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="description" className="text-sm font-medium text-stone-700">Description</label>
              <textarea id="description" required rows={4} value={form.description} onChange={update("description")} className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none focus:border-tana-500" />
            </div>

            {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

            <Button type="submit" disabled={loading} className="sm:col-span-2">
              {loading ? "Posting..." : "Post job"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
