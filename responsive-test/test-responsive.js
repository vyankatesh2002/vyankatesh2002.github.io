const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const output = path.join(__dirname, 'reports');
const screenshots = path.join(output, 'screenshots');

const pages = [
  'index.html',
  'About.html',
  'Contact.html',
  'Experince.html',
  'Project.html',
  'Resume.html',
  'Skills.html',
  'joke-generator.html'
];

const widths = [320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440];

(async () => {
  fs.mkdirSync(screenshots, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const file of pages) {
    const filePath = path.join(root, file);

    if (!fs.existsSync(filePath)) {
      console.log(`MISSING PAGE: ${file}`);
      continue;
    }

    for (const width of widths) {
      const page = await browser.newPage({
        viewport: { width, height: 900 },
        deviceScaleFactor: 1
      });

      const pageErrors = [];
      page.on('pageerror', error => pageErrors.push(error.message));

      try {
        await page.goto(pathToFileURL(filePath).href, {
          waitUntil: 'domcontentloaded',
          timeout: 30000
        });

        await page.waitForTimeout(700);

        const metrics = await page.evaluate(() => ({
          viewportWidth: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body ? document.body.scrollWidth : 0,
          documentHeight: document.documentElement.scrollHeight
        }));

        const overflow =
          metrics.documentWidth > width + 1 ||
          metrics.bodyWidth > width + 1;

        const result = {
          page: file,
          width,
          status: overflow || pageErrors.length ? 'FAIL' : 'PASS',
          horizontalOverflow: overflow,
          documentWidth: metrics.documentWidth,
          bodyWidth: metrics.bodyWidth,
          pageErrors: pageErrors.join(' | ')
        };

        results.push(result);

        if (overflow || pageErrors.length) {
          const safeName = file.replace(/[^a-z0-9]/gi, '_');
          await page.screenshot({
            path: path.join(screenshots, `${safeName}_${width}px.png`),
            fullPage: false
          });
        }

        console.log(
          `${result.status} | ${file} | ${width}px | ` +
          `Doc: ${metrics.documentWidth}px | ` +
          `Body: ${metrics.bodyWidth}px`
        );

        if (pageErrors.length) {
          console.log(`  JS ERROR: ${pageErrors.join(' | ')}`);
        }
      } catch (error) {
        results.push({
          page: file,
          width,
          status: 'ERROR',
          horizontalOverflow: null,
          documentWidth: null,
          bodyWidth: null,
          pageErrors: error.message
        });

        console.log(`ERROR | ${file} | ${width}px | ${error.message}`);
      }

      await page.close();
    }
  }

  await browser.close();

  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  const errors = results.filter(r => r.status === 'ERROR').length;

  fs.writeFileSync(
    path.join(output, 'responsive-report.json'),
    JSON.stringify(results, null, 2)
  );

  const csv = [
    'Page,Width,Status,HorizontalOverflow,DocumentWidth,BodyWidth,PageErrors',
    ...results.map(r =>
      [r.page, r.width, r.status, r.horizontalOverflow,
       r.documentWidth, r.bodyWidth, `"${String(r.pageErrors).replace(/"/g, '""')}"`].join(',')
    )
  ].join('\n');

  fs.writeFileSync(path.join(output, 'responsive-report.csv'), csv);

  console.log('\n===== FINAL RESPONSIVE REPORT =====');
  console.log(`Total tests: ${results.length}`);
  console.log(`PASS: ${passed}`);
  console.log(`FAIL: ${failed}`);
  console.log(`ERROR: ${errors}`);
  console.log(`Report: ${path.join(output, 'responsive-report.csv')}`);
  console.log(`Screenshots: ${screenshots}`);
})();
