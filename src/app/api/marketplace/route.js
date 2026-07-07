import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

async function uniqueSlug(title) {
  const base = slugify(title);
  let slug = base;
  let i = 1;
  while (await prisma.marketplaceListing.findUnique({ where: { slug } })) {
    slug = `${base}-${++i}`;
  }
  return slug;
}

export async function POST(request) {
  const body = await request.json();
  const { title, description, category, condition, price, location, sellerName, sellerPhone } = body;

  if (!title || !description || !category || !condition || !price || !location || !sellerName) {
    return NextResponse.json({ error: "All fields except phone are required." }, { status: 400 });
  }

  const slug = await uniqueSlug(title);

  const listing = await prisma.marketplaceListing.create({
    data: {
      title,
      slug,
      description,
      category,
      condition,
      price: parseInt(price, 10),
      location,
      image: "/static/media/Bahir-dar-4.jpg",
      sellerName,
      sellerPhone: sellerPhone || null,
    },
  });

  return NextResponse.json({ ok: true, slug: listing.slug });
}
