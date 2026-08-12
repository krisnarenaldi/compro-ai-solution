import { createClient } from "@libsql/client";
import { readFileSync } from "fs";

// Load .env manually
const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => {
      const idx = l.indexOf("=");
      const val = l.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      return [l.slice(0, idx).trim(), val];
    })
);

const db = createClient({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});

await db.execute("DROP TABLE IF EXISTS contact_submissions");
console.log("Dropped old table (if any).");

await db.execute(
  "CREATE TABLE contact_submissions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, company TEXT, email TEXT NOT NULL, problem TEXT NOT NULL, budget TEXT, created_at TEXT NOT NULL)"
);
console.log("Table contact_submissions created.");

const result = await db.execute(
  "SELECT name FROM sqlite_master WHERE type = 'table'"
);
console.log("Tables in DB:", result.rows.map((r) => r.name).join(", "));

process.exit(0);
