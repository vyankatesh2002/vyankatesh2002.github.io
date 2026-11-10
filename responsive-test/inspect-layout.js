const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const file of ["Contact.html", "joke-generator.html"]) {
    const page = await browser.newPage({ viewport: { width: 320, height: 900 } });
    await page.goto("file://" + path.resolve("..", file));
    await page.waitForTimeout(1500);

    const result = await page.evaluate(() => ({
      bodyMargin: getComputedStyle(document.body).margin,
      bodyWidth: document.body.scrollWidth,
      documentWidth: document.documentElement.scrollWidth,
      mobileCssLoaded: [...document.styleSheets].some(s => s.href && s.href.includes("mobile.css")),
      overflowing: [...document.querySelectorAll("*")]
        .filter(el => {
          const r = el.getBoundingClientRect();
          return r.right > innerWidth + 1 || r.left < -1;
        })
        .slice(0, 10)
        .map(el => ({
          tag: el.tagName,
          className: String(el.className).slice(0, 100),
          left: Math.round(el.getBoundingClientRect().left),
          right: Math.round(el.getBoundingClientRect().right),
          width: Math.round(el.getBoundingClientRect().width)
        }))
    }));

    console.log("\n" + file, JSON.stringify(result, null, 2));
    await page.close();
  }

  await browser.close();
})();
