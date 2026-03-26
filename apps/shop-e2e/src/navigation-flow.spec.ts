import { test, expect } from '@playwright/test';

test.describe('Navigation Flow', () => {
  test('should load the homepage at root URL', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const homeHeading = page.locator('h1').first();
    await expect(homeHeading).toContainText('Home');
  });

  test('should display all hero elements on homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const heroTitle = page.locator('h1').nth(1);
    await expect(heroTitle).toContainText('Welcmoe to our Demo');

    const heroSubtitle = page.locator('p').first();
    await expect(heroSubtitle).toContainText('Build something amazing today');

    const ctaButton = page.locator('button:has-text("Get Started")');
    await expect(ctaButton).toBeVisible();
  });

  test('should handle browser back/forward navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const homeHeading = page.locator('h1').first();
    await expect(homeHeading).toContainText('Home');

    await page.goBack();
    await page.goForward();
    await page.waitForLoadState('domcontentloaded');

    await expect(homeHeading).toContainText('Home');
  });

  test('should handle direct navigation to root', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    expect(page.url()).toMatch(/\/$/);

    const heroTitle = page.locator('h1').nth(1);
    await expect(heroTitle).toBeVisible();
  });
});
