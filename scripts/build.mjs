import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");

const files = [
  "index.html",
  "styles.css",
  "styles-refinement.css",
  "script.js",
  "campaign.css",
  "campaign.js",
  "solution.css",
  "solution.js",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "assets",
  "campanha-form-contexto",
  "campanha-form-hero",
  "ia-qualidade",
  "ia-servicos-sap",
  "ia-hiperautomacao",
  "obrigado"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(output, file), { recursive: true });
}

console.log("Prime Control AI: build estático gerado em dist/.");
