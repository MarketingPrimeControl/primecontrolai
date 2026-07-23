import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "index.html"), "utf8");
const pages = [
  "ia-qualidade/index.html",
  "ia-servicos-sap/index.html",
  "ia-hiperautomacao/index.html",
];

const headerMatch = source.match(/<header\b[\s\S]*?<\/header>/);
const footerMatch = source.match(/<footer\b[\s\S]*?<\/footer>/);

if (!headerMatch || !footerMatch) {
  throw new Error("Não foi possível localizar o menu ou o rodapé canônico em index.html.");
}

const sharedHeader = headerMatch[0]
  .replace('<header class="topbar" data-header>', '<header class="topbar standard-topbar" data-header>')
  .replaceAll('src="assets/', 'src="../assets/')
  .replaceAll('href="#arquitetura"', 'href="https://primecontrol.ai/#arquitetura"')
  .replaceAll('href="#blog"', 'href="https://primecontrol.ai/#blog"')
  .replace('<button class="menu-toggle"', '<button class="menu-toggle" data-menu-toggle')
  .replace('<nav class="mobile-nav"', '<nav class="mobile-nav" data-mobile-menu');

const sharedFooter = footerMatch[0]
  .replace("<footer>", '<footer class="standard-footer">')
  .replaceAll('src="assets/', 'src="../assets/');

for (const relativeFile of pages) {
  const file = path.join(root, relativeFile);
  let html = fs.readFileSync(file, "utf8");

  html = html
    .replace(/<header\b[\s\S]*?<\/header>/, sharedHeader)
    .replace(/<footer\b[\s\S]*?<\/footer>/, sharedFooter)
    .replace(
      /<link rel="stylesheet" href="\.\.\/solution\.css\?v=[^"]+">(?:\s*<link rel="stylesheet" href="\.\.\/shared-chrome\.css\?v=[^"]+">)?/,
      '<link rel="stylesheet" href="../solution.css?v=20260723.4">\n<link rel="stylesheet" href="../shared-chrome.css?v=20260723.4">',
    )
    .replace(/\.\.\/solution\.js\?v=[^"]+/, "../solution.js?v=20260723.4");

  fs.writeFileSync(file, html, "utf8");
  console.log(`Sincronizado: ${relativeFile}`);
}
