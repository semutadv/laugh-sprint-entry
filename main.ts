// One-Line Laugh Sprint — entry program.
//
// The whole entry is a single original one-liner about everyday life.
// This program's only job is to place that line, byte for byte, into
// entry.txt inside the output directory the grader gives us.
//
// Output directory contract (program/v1):
//   - The directory comes from OUTPUT_DIR, falling back to /output.
//   - In the grader that directory is a mounted volume, so it must
//     never be removed itself; only the files inside it are cleared.
//   - The run must be deterministic: two runs, identical bytes.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke itself. Kept as one named constant so the sentence reads as
// a single deliberate line, exactly as it will be judged: a fridge checked
// three times in ten minutes, as if groceries shipped software updates.
const JOKE_LINE =
  "I opened the fridge three times in ten minutes, just in case the developers had pushed an update.";

// Resolve where the entry file belongs for this run.
function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

// Empty a directory without ever deleting the directory itself:
// the grader mounts /output, and removing a mount point fails.
function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  // One line, one trailing newline, nothing else in the file.
  writeFileSync(join(dir, "entry.txt"), JOKE_LINE + "\n", "utf8");
}

main();
