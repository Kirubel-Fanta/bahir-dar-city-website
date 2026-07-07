import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

async function uniqueSlug(title) {
  const base = slugify(title);
  let slug = base;
  let i = 1;
  while (await prisma.property.findUnique({ where: { slug } })) {
    slug = `${base}-${++i}`;
  }
  return slug;
}

export async function POST(request) {
  const body = await request.json();
  const { title, description, propertyType, listingType, price, location, agentName, agentPhone } = body;

  if (!title || !description || !propertyType || !listingType || !price || !location) {
    return NextResponse.json({ error: "Title, description, type, listing type, price, and location are required." }, { status: 400 });
  }

  const slug = await uniqueSlug(title);

  const property = await prisma.property.create({
    data: {
      title,
      slug,
      description,
      propertyType,
      listingType,
      price: parseInt(price, 10),
      location,
      image: "/static/media/Bahir-dar-3.jpg",
      agentName: agentName || null,
      agentPhone: agentPhone || null,
    },
  });

  return NextResponse.json({ ok: true, slug: property.slug });
}
