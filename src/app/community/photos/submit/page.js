"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SubmitPhotoPage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/photos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, caption }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
      return;
    }

    setDone(true);
    setTimeout(() => router.push("/"), 1200);
  }

  return (
    <div>
      <PageHeader eyebrow="Community" title="Share a photo" subtitle="Add a photo of Bahir Dar to the community gallery on the homepage." />
      <div className="container-page max-w-lg py-10">
        {done ? (
          <div className="rounded-2xl bg-palm-50 p-6 text-palm-800">Thanks for sharing! Taking you home...</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input id="url" label="Image URL" required type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
            <Input id="caption" label="Caption (optional)" value={caption} onChange={(e) => setCaption(e.target.value)} />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Share photo"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
