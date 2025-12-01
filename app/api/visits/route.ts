import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { visits } from "@/lib/db/schema";

export async function POST() {
  try {
    await db.insert(visits).values({}).run?.();
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("/api/visits error", e);
    return NextResponse.json({ ok: false, error: "Failed to record visit" }, { status: 500 });
  }
}
