import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

async function uniqueSlug(name) {
  const base = slugify(name);
  let slug = base;
  let i = 1;
  while (await prisma.business.findUnique({ where: { slug } })) {
    slug = `${base}-${++i}`;
  }
  return slug;
}

export async function POST(request) {
  const body = await request.json();
  const { name, description, categorySlug, neighborhood, phone, email, website, heroImage } = body;

  if (!name || !description || !categorySlug) {
    return NextResponse.json({ error: "Name, description, and category are required." }, { status: 400 });
  }

  const category = await prisma.category.findUnique({ where: { slug: categorySlug } });
  if (!category) {
    return NextResponse.json({ error: "Unknown category." }, { status: 400 });
  }

  const slug = await uniqueSlug(name);

  const business = await prisma.business.create({
    data: {
      name,
      slug,
      description,
      categoryId: category.id,
      neighborhood: neighborhood || null,
      phone: phone || null,
      email: email || null,
      website: website || null,
      heroImage: heroImage || "/static/media/Bahir-dar-1.jpg",
      featured: false,
      trending: false,
    },
  });

  return NextResponse.json({ ok: true, slug: business.slug });
}
