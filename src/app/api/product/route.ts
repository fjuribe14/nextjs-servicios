import prisma from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const params = new URL(request.url).searchParams;

  const relations: { [key: string]: boolean } = {};

  params
    .get("with")
    ?.split(",")
    .forEach((key: string) => (relations[key] = true));

  return NextResponse.json(await prisma.product.findMany({ include: relations }));
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const product = await prisma.product.create({
    include: { images: true },
    data: { ...body, images: { create: body.images } },
  });

  return NextResponse.json(product);
}
