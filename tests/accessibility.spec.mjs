import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

async function checkAccessibility(page, testInfo) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  await testInfo.attach('axe-violations.json', {
    body: Buffer.from(JSON.stringify(results.violations, null, 2)),
    contentType: 'application/json',
  });

  const blockingViolations = results.violations.filter(({ impact }) =>
    ['critical', 'serious'].includes(impact),
  );

  expect(
    blockingViolations,
    blockingViolations
      .map(({ id, impact, help, nodes }) =>
        `${impact}: ${id} — ${help} (${nodes.length} affected nodes)`,
      )
      .join('\n'),
  ).toEqual([]);
}

test('homepage has no critical or serious WCAG 2.1 AA violations', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.locator('#main-content')).toBeVisible();
  await checkAccessibility(page, testInfo);
});

test('custom 404 page has no critical or serious WCAG 2.1 AA violations', async ({ page }, testInfo) => {
  await page.goto('/__a11y_404_check__');
  await expect(
    page.getByRole('heading', { name: 'Page not found.' }),
  ).toBeVisible();
  await checkAccessibility(page, testInfo);
});

test('mobile navigation opens, passes an accessibility check, and closes with Escape', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const openButton = page.getByRole('button', { name: 'Open navigation menu' });
  await openButton.click();

  const mobileNavigation = page.getByRole('navigation', {
    name: 'Mobile Portfolio Navigation',
  });
  await expect(mobileNavigation).toBeVisible();
  await checkAccessibility(page, testInfo);

  await page.keyboard.press('Escape');
  await expect(mobileNavigation).toHaveCount(0);
  await expect(
    page.getByRole('button', { name: 'Open navigation menu' }),
  ).toBeFocused();
});
