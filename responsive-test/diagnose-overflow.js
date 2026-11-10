const { chromium } = require('playwright');
const path = require('path');
const { pathToFileURL } = require('url');

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const file of ['Contact.html', 'joke-generator.html']) {
    for (const width of [320, 390, 768, 1440]) {
      const page = await browser.newPage({
        viewport: { width, height: 900 }
      });

      await page.goto(
        pathToFileURL(path.resolve(__dirname, '..', file)).href,
        { waitUntil: 'domcontentloaded' }
      );

      const issues = await page.evaluate(() => {
        return [...document.querySelectorAll('body *')]
          .map(el => {
            const r = el.getBoundingClientRect();
            const css = getComputedStyle(el);
            return {
              tag: el.tagName,
              id: el.id,
              className: typeof el.className === 'string'
                ? el.className.slice(0, 100) : '',
              left: Math.round(r.left),
              right: Math.round(r.right),
              width: Math.round(r.width),
              scrollWidth: el.scrollWidth,
              clientWidth: el.clientWidth,
              overflow: css.overflowX,
              text: (el.innerText || '').trim().slice(0, 65)
            };
          })
          .filter(x =>
            x.right > window.innerWidth + 1 ||
            (x.scrollWidth > x.clientWidth + 2 &&
             x.clientWidth > 0)
          )
          .sort((a, b) => b.right - a.right)
          .slice(0, 15);
      });

      console.log(`\n===== ${file} | ${width}px =====`);
      console.table(issues);
      await page.close();
    }
  }

  await browser.close();
})();
