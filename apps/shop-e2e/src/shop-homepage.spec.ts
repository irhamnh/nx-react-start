import { test, expect } from '@playwright/test';

test.describe('Shop Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the home heading', async ({ page }) => {
    const header = page.locator('h1').first();
    await expect(header).toContainText('Home');
  });

  test('should display the hero section', async ({ page }) => {
    const heroTitle = page.locator('h1').nth(1);
    await expect(heroTitle).toContainText('Welcmoe to our Demo');
  });

  test('should have proper page title', async ({ page }) => {
    await expect(page).toHaveTitle(/shop/i);
  });

  test('should display the hero subtitle', async ({ page }) => {
    const subtitle = page.locator('p').first();
    await expect(subtitle).toContainText('Build something amazing today');
  });
});
