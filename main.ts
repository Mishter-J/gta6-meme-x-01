// gta6-meme-x-01 entrypoint: hand the post's address to the grader.
// Copies POST.json from the repository into the output directory, and
// nothing else. No network, no clock, no files outside the repository;
// the same input always produces the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
