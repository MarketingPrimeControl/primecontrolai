import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");

const files = [
  "index.html",
  "styles.css",
  "script.js",
  "campaign.css",
  "campaign.js",
  "assets",
  "campanha-form-contexto",
  "campanha-form-hero"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(output, file), { recursive: true });
}

console.log("Prime Control AI: build estático gerado em dist/.");
