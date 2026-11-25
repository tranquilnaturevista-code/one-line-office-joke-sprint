// One-Line Office Joke: 24-Hour Sprint
// Entry for make.fun bounty u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.
// Writes exactly one line of office humour to /output/entry.txt.
//
// The joke, written for this entry alone: the boss who says "ping me
// anytime" and then answers eight hours later with the classic excuse.
// One sentence, one specific detail every office worker recognises —
// the 4:59pm "just seeing this" — no explanation needed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My manager told me to ping her anytime, so I pinged her at 9am and she replied at 4:59pm with 'sorry, just seeing this now'.";

// The gate: UTF-8 text, 1 to 200 characters, not only whitespace, one line.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

validate(JOKE);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Read it back and prove the file holds exactly the joke, byte for byte.
const back = readFileSync(outPath, "utf8");
if (back !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
console.log(`wrote ${outPath} (${JOKE.length} characters)`);
