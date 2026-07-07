import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

async function uniqueSlug(title) {
  const base = slugify(title);
  let slug = base;
  let i = 1;
  while (await prisma.event.findUnique({ where: { slug } })) {
    slug = `${base}-${++i}`;
  }
  return slug;
}

export async function POST(request) {
  const body = await request.json();
  const { title, description, category, location, startsAt, organizer, poster } = body;

  if (!title || !description || !category || !location || !startsAt) {
    return NextResponse.json({ error: "Title, description, category, location, and date are required." }, { status: 400 });
  }

  const slug = await uniqueSlug(title);

  const event = await prisma.event.create({
    data: {
      title,
      slug,
      description,
      category,
      location,
      startsAt: new Date(startsAt),
      organizer: organizer || null,
      poster: poster || "/static/media/Bahir-dar-9.jpg",
      approved: false,
    },
  });

  return NextResponse.json({ ok: true, slug: event.slug });
}
