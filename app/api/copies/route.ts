import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { copies } from "@/lib/db/schema";

export async function POST() {
  try {
    await db.insert(copies).values({});
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("/api/copies error", e);
    return NextResponse.json({ ok: false, error: "Failed to record copy" }, { status: 500 });
  }
}
