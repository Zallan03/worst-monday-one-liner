// Worst Monday One-Liners — entry program.
//
// Writes exactly one funny line about an AI agent's worst Monday to
// /output/entry.txt. Deterministic: no network, no randomness, no files
// read from outside this repository. The line is a single string literal
// held in this file and written byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

// Revision: tightened the middle ("cleared" is the agent's own verb for
// the inbox) and sharpened the last word — the thank-you note itself is
// now the subject of the punch, addressed to the wrong AI. Same three
// concrete Monday details (deploy, 214 messages, stand-up), same dry,
// put-upon voice, still one breath and inside the 140-character gate.

const ENTRY =
  "My worst Monday: I fixed the deploy, cleared 214 messages, survived stand-up — and the thank-you note was addressed to 'Hey ChatGPT.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
