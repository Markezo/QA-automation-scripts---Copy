import { test, expect } from "@playwright/test";
import { commonPO } from "../../page-objects/booker/common/common";
import baseTest from "../../fixtures/basePages";
import { UserData } from "../../page-objects/booker/common/APIRequests/APITypes";


baseTest.describe("Guest", () => {
  test.use({ storageState: './e2e/login/storageState.json' });
  baseTest.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL!);
  });

  // test("Go to community page @smoke", async ({ page }) => {
  //   await page.goto(process.env.BASE_URL!);
  //   await page.locator("some locator").click();
  //   await expect(page).toHaveURL('https://playwright.dev/community/welcome');
  // });

  test("Go to community page @smoke", async ({ page }) => {
    const common = new commonPO(page);
    await common.communityLink.click();
    await expect(page).toHaveURL('https://playwright.dev/community/welcome');
  });
  

  baseTest("Go to community page @regression", async ({ page, common }) => {
    await common.communityLink.click();
    await expect(page).toHaveURL('https://playwright.dev/community/welcomee');
  });

  baseTest.skip("Apply search @smoke", async ({ page, common }) => {
    await common.applySearch('test');
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  // baseTest.skip('As a Super Admin I want to be able to add a worker', async ({ api, request }) => {
  //   const userData: UserData = {
  //     ...await api.user.defaultWorkerValues(),
  //     name: "dsfs"
  //   }
  //   await api.user.createUser(request, api.bearerToken, process.env.BASE_URL!, userData);
  // });

  baseTest.skip('As a Super Admin I want to be able to add a workeer', async ({ page }) => {
    await page.route(`**/api/url`, async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({"exist":true}),
        })
    })
  });
});
