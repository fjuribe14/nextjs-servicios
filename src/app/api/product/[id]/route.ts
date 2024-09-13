import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
  const id = context.params.id; // '1'

  return NextResponse.json({ id });
}
