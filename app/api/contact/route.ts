import { NextRequest, NextResponse } from "next/server";
import { db, initDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, problem, budget } = body;

    if (!name || !email || !problem) {
      return NextResponse.json(
        { error: "Name, email, and problem are required." },
        { status: 400 }
      );
    }

    // Ensure table exists (idempotent)
    await initDb();

    await db.execute({
      sql: `INSERT INTO contact_submissions (name, company, email, problem, budget, created_at)
            VALUES (?, ?, ?, ?, ?, datetime('now'))`,
      args: [name, company ?? null, email, problem, budget ?? null],
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
