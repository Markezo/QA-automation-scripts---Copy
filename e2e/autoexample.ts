import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Good day for Y');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'real TodoMVC app.' }).click();
  await page.getByText('JavaScript', { exact: true }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByPlaceholder('Search Medium').click();
  await page.getByPlaceholder('Search Medium').fill('kjk');
  await page.getByPlaceholder('Search Medium').press('Enter');
});