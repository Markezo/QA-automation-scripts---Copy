import { test, expect, Locator } from '@playwright/test';
import { createFlow } from "../../page-objects/gitCreatePage";
import { deleteFlow } from "../../page-objects/gitDeletePage";
import { repoPage } from "../../page-objects/gitRepoPage"
import baseTest from "../../fixtures/basePages";
import { fakeData } from "../../../utils/git_data";
import { personalPage } from '../../page-objects/PersonalPage';
import { faker } from '@faker-js/faker';
import { randomGen } from '../../page-objects/booker/common/randomGenerator';
import { issueFlow } from '../../page-objects/gitIssuePage';
import { secondWay } from '../../fixtures/gitCreateBase';


baseTest.describe.serial("UI Git tests", () => {
  test.use({ storageState: 'playwright/.auth/cookies.json' });
 
  const randomData = new randomGen();
  const fakedata = new fakeData();
  const fakeRepoName = fakedata.repoName;
  const fakeDescription = fakedata.description;
  const fakeNewRepoName = fakeRepoName + randomData.rand;
  

    test('New repo creation', async ({ page }) => {
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
      await gitCreatePage.createButton.click();
      await page.waitForURL('https://github.com/Markezo/'+fakeRepoName);
      await gitCreatePage.createButton.click();
    })


    test('Second repo creation', async ({ page }) => {
      await secondWay(page);
    })

    test('Update repo ', async ({ page }) => {
      const gitRepoPage = new repoPage(page);
      await page.goto('https://github.com/Markezo/'+fakeRepoName);
      await gitRepoPage.settingsButton.click();
      await gitRepoPage.repoNameField.fill(fakeNewRepoName);
      await expect(gitRepoPage.renameButton).toBeEnabled();
      await gitRepoPage.renameButton.click();
      const NewRepoName = await gitRepoPage.repoNewName.innerText();
      await expect (NewRepoName).toEqual(fakeNewRepoName);
      
    })

    test('Create/Delete Issue', async ({page}) => {
     const gitIssuePage = new issueFlow(page); 
     await page.goto('https://github.com/Markezo/'+'protocol-connect910681');
     await gitIssuePage.issueButton.click();
     await expect (gitIssuePage.newIssueButton).toBeEnabled();
     await gitIssuePage.newIssueButton.click();
     //Fill new issue data
     await gitIssuePage.titleField.fill("Probably new titile");
     await gitIssuePage.commentField.fill("Later random data");
     await gitIssuePage.assigneesBox.click();
     await expect (gitIssuePage.selectAssignee).toBeVisible();
     await gitIssuePage.selectAssignee.click();
     await page.keyboard.press('Escape');
     await gitIssuePage.labelsBox.click();
     await gitIssuePage.selectLabel.click();
     await page.keyboard.press('Escape');
     //Submit Issue
     await expect (gitIssuePage.submitButton).toBeEnabled();
     await gitIssuePage.submitButton.click();
     const pageUrl = page.url();
     //Delete issue
     await expect (gitIssuePage.deleteButton).toBeVisible();
     await gitIssuePage.deleteButton.click();
     await gitIssuePage.confirmDeleteButton.click();     
     await page.goto(pageUrl);
     const pageContent = await page.locator('body').innerText();
     const deletingText = 'This issue has been deleted.';
     expect(pageContent).toContain(deletingText);
    }
    )
    test('Repo delete', async ({ page }) => {
      const gitDeletePage = new deleteFlow(page);
      await page.goto('https://github.com/Markezo/'+fakeRepoName);
      await gitDeletePage.settingsButton.click();
      await gitDeletePage.settingsButton.click();
      await gitDeletePage.deleteButton.click();
      await gitDeletePage.confirmDeleteButton.click();
      await gitDeletePage.acknowledgeEffectsButton.click();
      await gitDeletePage.confirmInput.click();

      const repo_name_locator = await page.locator('//*[@id="repo-delete-menu-dialog"]/div[2]/div[1]/p')
      const repo_name = await repo_name_locator.innerText();

      await gitDeletePage.confirmInput.fill(repo_name); //add scrab
      await gitDeletePage.proceedButton.click();

    })

    test('Ckeck personal info', async ({ page }) => {
      const myPersonalPage = new personalPage(page);
      await page.goto('https://github.com');
      await myPersonalPage.avatarPic.click();
      await myPersonalPage.yourProfile.click();
      await myPersonalPage.editProfile.click();

      //await page.waitForTimeout(1000);

      const profileName = await myPersonalPage.nameProfile.inputValue();
      const profileBio = await myPersonalPage.bioProfile.inputValue();
      const profileCompany = await myPersonalPage.companyProfile.inputValue();
     // const profileSex = await myPersonalPage.pronounsProfile.innerText();
      

      await expect(profileName).toEqual("Alex");
      await expect(profileBio).toEqual("Test Bio");
      await expect(profileCompany).toEqual("Own");
    // expect(await profileSex.evaluate(node => node.innerText)).toBe('10 retweets');

      await myPersonalPage.locationProfile.fill(faker.location.city());

    })
    test('Ckeck UI elements', async ({ page }) => {
     
      await page.goto('https://github.com/discussions');
      await expect(page).toHaveScreenshot();
     
    })

  });
