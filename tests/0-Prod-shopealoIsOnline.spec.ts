import { test, expect } from '@playwright/test';

test('Evalúa si el sitio está online', async ({ page }) => {
  await page.goto('https://www.shopealo.com.co/home');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Shopealo/);
  
});