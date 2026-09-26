import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("/workspace/.grok/favicon.svg.tmp", "utf8");
const browser = await chromium.launch({
  executablePath:
    "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell",
  args: ["--no-sandbox", "--disable-gpu"],
});
const page = await browser.newPage({ viewport: { width: 64, height: 64 }, deviceScaleFactor: 1 });
await page.setContent(`<!doctype html><html><body style="margin:0;background:#ddd">
  <div style="display:flex;gap:8px;padding:8px;background:#888">
    <img id="i16" src="data:image/svg+xml;utf8,${encodeURIComponent(svg)}" width="16" height="16" style="display:block;background:#fff">
    <img id="i32" src="data:image/svg+xml;utf8,${encodeURIComponent(svg)}" width="32" height="32" style="display:block;background:#fff">
    <img id="i64" src="data:image/svg+xml;utf8,${encodeURIComponent(svg)}" width="64" height="64" style="display:block;background:#fff">
  </div>
</body></html>`);
await page.locator("#i16").screenshot({ path: "/workspace/.grok/favicon-16.png" });
await page.locator("#i32").screenshot({ path: "/workspace/.grok/favicon-32.png" });
await page.locator("#i64").screenshot({ path: "/workspace/.grok/favicon-64.png" });
await browser.close();
console.log("rasterized");
