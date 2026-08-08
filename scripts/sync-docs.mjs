import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const src = join(process.cwd(), "out");
const dest = join(process.cwd(), "docs");

const entries = await readdir(src, { withFileTypes: true });
for (const entry of entries) {
  await rm(join(dest, entry.name), { recursive: true, force: true });
}
await mkdir(dest, { recursive: true });
await cp(src, dest, { recursive: true });
console.log("synced out/ -> docs/");
