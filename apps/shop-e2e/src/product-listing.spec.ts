import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero title', async ({ page }) => {
    const heroTitle = page.locator('h1').nth(1);
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('Welcmoe to our Demo');
  });

  test('should display hero subtitle', async ({ page }) => {
    const subtitle = page.locator('p').first();
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toContainText('Build something amazing today');
  });

  test('should display the CTA button', async ({ page }) => {
    const ctaButton = page.locator('button:has-text("Get Started")');
    await expect(ctaButton).toBeVisible();
  });

  test('should render the home heading above the hero', async ({ page }) => {
    const headings = page.locator('h1');
    await expect(headings).toHaveCount(2);
    await expect(headings.first()).toContainText('Home');
  });

  test('should display the CTA button with correct text', async ({ page }) => {
    const ctaButton = page.locator('button').first();
    await expect(ctaButton).toContainText('Get Started');
  });
});
