import { test, expect } from '@playwright/test';

test.describe('Hero Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero title text', async ({ page }) => {
    const heroTitle = page.locator('h1').nth(1);
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toHaveText('Welcmoe to our Demo');
  });

  test('should display hero subtitle text', async ({ page }) => {
    const subtitle = page.locator('p').first();
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toHaveText('Build something amazing today');
  });

  test('should display CTA button with correct label', async ({ page }) => {
    const ctaButton = page.locator('button').first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText('Get Started');
  });

  test('should render the hero section container', async ({ page }) => {
    const heroTitle = page.locator('h1:has-text("Welcmoe to our Demo")');
    await expect(heroTitle).toBeVisible();

    const heroSubtitle = page.locator(
      'p:has-text("Build something amazing today")'
    );
    await expect(heroSubtitle).toBeVisible();

    const ctaButton = page.locator('button:has-text("Get Started")');
    await expect(ctaButton).toBeVisible();
  });

  test('should not show out of stock overlay', async ({ page }) => {
    const outOfStockOverlay = page.locator('text="Out of Stock"');
    await expect(outOfStockOverlay).toHaveCount(0);
  });

  test('should display the home heading', async ({ page }) => {
    const homeHeading = page.locator('h1').first();
    await expect(homeHeading).toContainText('Home');
  });
});
