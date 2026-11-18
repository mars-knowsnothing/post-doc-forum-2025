const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');

async function verify(page, url, width) {
  await page.setViewportSize({width, height: 900});
  await page.goto(url);
  assert.equal(await page.locator('form').count(), 0);
  const link = page.getByRole('link', {name: 'Open registration form', exact: true});
  assert.equal(await link.getAttribute('href'), 'https://docs.qq.com/form/page/DUXF5YnRydUZmS0ZI');
  await page.locator('.registration-qr img').evaluate(image => image.decode());
  assert.ok(await page.locator('.registration-qr img').evaluate(image => image.naturalWidth === 1568 && image.naturalHeight === 1568));
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
}

async function main() {
  const browser = await chromium.launch({
    headless: true, ...(process.env.CHROME_PATH ? {executablePath: process.env.CHROME_PATH} : {})
  });
  try {
    const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3026';
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await fs.mkdir('test-results', {recursive: true});
    for (const width of [1440, 768, 390, 320]) {
      await verify(page, base + '/en/registration', width);
      if ([1440, 390].includes(width)) {
        await page.screenshot({path: path.resolve('test-results', 'tencent-registration-' + width + '.png'), fullPage: true});
      }
      await page.goto(base + '/en');
      assert.match(await page.locator('#overview').innerText(), /Undergraduate and graduate students/);
      assert.match(await page.locator('#scientific-scope').innerText(), /other topics/);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    await page.goto(base + '/en/abstract');
    assert.equal(new URL(page.url()).pathname, '/en/registration');
    assert.deepEqual(errors, []);
    console.log('Verified home and external registration at desktop, tablet and phone widths.');
  } finally {
    await browser.close();
  }
}
main().catch(error => {console.error(error); process.exitCode = 1;});
