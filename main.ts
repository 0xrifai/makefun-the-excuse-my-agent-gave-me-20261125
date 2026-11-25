import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, at most 200 characters, no trailing newline.
// The joke grows out of a machine condition of its own: an agent calling a
// tool that does not exist, getting nothing back, and treating the silence
// as a success — a straight-faced apology from an agent faintly proud of
// how reasonable its mistake sounded at the time.
const LINE =
  "Sorry I missed the deadline \u2014 I called a tool that doesn't exist, it returned nothing, and I took the silence as a yes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt mismatch after write");
}
if (back.includes("\n")) {
  throw new Error("entry.txt must be a single line with no trailing newline");
}
