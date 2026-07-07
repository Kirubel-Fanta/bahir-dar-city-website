import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const { url, caption } = await request.json();

  if (!url) {
    return NextResponse.json({ error: "An image URL is required." }, { status: 400 });
  }

  await prisma.photo.create({ data: { url, caption: caption || null } });

  return NextResponse.json({ ok: true });
}
