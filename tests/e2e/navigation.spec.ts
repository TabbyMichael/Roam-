
import { test, expect } from '@playwright/test';

test.describe('Critical User Journeys', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Navigation and Product Discovery Flow', async ({ page }) => {
    // 1. Check Home Title
    await expect(page).toHaveTitle(/Roam | Leading Electric Mobility/i);

    // 2. Navigate to Motorcycles
    await page.click('text=Motorcycles');
    await expect(page).toHaveURL(/\/motorcycles/);
    await expect(page.locator('h1')).toContainText('ROAM AIR');

    // 3. Open Pre-order Modal
    await page.click('button:has-text("Pre-order")');
    const modal = page.locator('div[role="dialog"]'); // Assuming ARIA role
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Pre-order Roam Air');
  });

  test('Language Switcher Persistence', async ({ page }) => {
    // Switch to Swahili
    await page.click('button:has-text("EN")');
    await expect(page.locator('h1')).toContainText('USAFI WA UMEME');

    // Navigate and check if language persists
    await page.click('text=Kuhusu Sisi');
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('h1')).toContainText('SISI NI ROAM');
  });

  test('Responsive Navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check burger menu
    const burgerBtn = page.locator('nav button svg').nth(1);
    await burgerBtn.click();
    await expect(page.locator('text=Motorcycles')).toBeVisible();
  });
});
