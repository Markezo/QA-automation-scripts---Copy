// global-setup.ts
import { chromium } from '@playwright/test';
import fs from 'fs';

const authFile = 'playwright/.auth/user.json';
const cookiesFile = 'playwright/.auth/cookies.json';
interface UserCredentials {
    username: string;
    password: string;
  }

async function globalSetup() {

    console.log('Starting Global Setup');
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    const data = await fs.promises.readFile(authFile, 'utf-8');
    const { username, password }: UserCredentials = JSON.parse(data);

    await page.goto('https://github.com/login');
    await page.getByLabel('Username or email address').fill(username);
    await page.getByLabel('Password').fill(password);
    
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForURL('https://github.com/');
    //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();
    
  //idk
    await page.context().storageState({ path: cookiesFile });
    // await page.goto('https://playwright.dev/')
    // await expect(page.locator('button.DocSearch')).toBeVisible();
    //await page.waitForTimeout(5000);
    //await context.storageState({ path: './e2e/login/storageState.json' });
    await browser.close();
    console.log('Global Setup Completed Successfully');
}

export default globalSetup;
