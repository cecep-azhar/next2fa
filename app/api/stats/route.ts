import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { copies, visits } from "@/lib/db/schema";
import { count } from "drizzle-orm";

export async function GET() {
  try {
    const [{ value: views }] = await db.select({ value: count() }).from(visits);
    const [{ value: copiesCount }] = await db.select({ value: count() }).from(copies);
    return NextResponse.json({ views, copies: copiesCount });
  } catch (e) {
    console.error("/api/stats error", e);
    return NextResponse.json({ views: 0, copies: 0 });
  }
}
