import { createFlow } from "../page-objects/gitCreatePage";
import { expect } from '@playwright/test';
import { fakeData } from "../../utils/git_data";


const fakedata = new fakeData();
const fakeRepoName = fakedata.repoName;
const fakeDescription = fakedata.description;


export async function secondWay(page){
const gitCreatePage = new createFlow(page);
await page.goto("https://github.com/");
await gitCreatePage.newButton.click();
await gitCreatePage.repoName.fill(fakeRepoName);
await gitCreatePage.description.fill(fakeDescription);
await gitCreatePage.privateCheckBox.click;
await gitCreatePage.gitNore.click();
await page.waitForSelector('span:has-text("Android")', { state: 'visible' });
await page.click('span:has-text("Android")');
await gitCreatePage.license.click();
await page.locator('span:has-text("Apache License 2.0")').click();
await expect(gitCreatePage.createButton).toBeEnabled();
await page.waitForURL('https://github.com/Markezo/'+fakeRepoName);

return
}