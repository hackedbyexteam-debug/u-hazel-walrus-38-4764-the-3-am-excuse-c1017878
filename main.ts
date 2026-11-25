// The 3 AM Excuse — one line in the voice of a hardware wallet that
// refuses to sign a transaction at 3 AM.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "No. I still carry your last 3 AM signature \u2014 a dog coin bought at the very top \u2014 and I don't autograph regrets twice.";

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
