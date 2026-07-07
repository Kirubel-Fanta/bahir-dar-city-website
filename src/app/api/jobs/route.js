import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

async function uniqueSlug(title) {
  const base = slugify(title);
  let slug = base;
  let i = 1;
  while (await prisma.job.findUnique({ where: { slug } })) {
    slug = `${base}-${++i}`;
  }
  return slug;
}

export async function POST(request) {
  const body = await request.json();
  const { title, company, description, category, type, location, applyEmail } = body;

  if (!title || !company || !description || !category || !type || !location || !applyEmail) {
    return NextResponse.json({ error: "All fields except salary are required." }, { status: 400 });
  }

  const slug = await uniqueSlug(title);

  const job = await prisma.job.create({
    data: { title, slug, company, description, category, type, location, applyEmail },
  });

  return NextResponse.json({ ok: true, slug: job.slug });
}
