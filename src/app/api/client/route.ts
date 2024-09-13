import prisma from "@/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await prisma.client.findMany());
}

export async function POST(request: Request) {
  const body = await request.json();
  const client = await prisma.client.create({ data: body });
  return NextResponse.json(client);
}
