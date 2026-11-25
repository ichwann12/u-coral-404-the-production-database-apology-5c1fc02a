// The Production Database Apology — make.fun entry
// Reads the single apology line from entry.txt and writes it to
// /output/entry.txt (or the directory named by MAKEFUN_OUTPUT_DIR /
// MAKEFUN_BOT_DIR). Node 22, standard library only, no network access,
// no wall clock, no randomness: the output is fully deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoRoot, "entry.txt"), "utf8").trim();

if (line.length === 0 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
