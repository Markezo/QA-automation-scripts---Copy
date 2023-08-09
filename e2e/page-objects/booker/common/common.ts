import { Locator, Page } from '@playwright/test';

export class commonPO {
  readonly page: Page;
  readonly communityLink: Locator;
  readonly docSearchButton: Locator;
  readonly docSearchInput: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.communityLink = page.locator('a[href="/community/welcome"]');
    this.docSearchButton = page.locator('button.DocSearch');
    this.docSearchInput = page.locator('input[class="DocSearch-Input"]');
  }


/**
 * Use search by given text  
 *
 * @param content[] text for search input
 * @returns here can be someinfo about return
*/
  async applySearch(text: string){
    await this.docSearchButton.click();
    await this.docSearchInput.fill(text);
  }

/**
 * Go to specific user page 
 *
 * @param content[] user id
 * @returns here can be someinfo about return
*/
  async goToEditUserPage(userId: number){
    await this.page.goto(`admin/edit-user/${userId}`)
  }

/**
 * Deletes a file in the given path
 *
 * @param content[] file path
 * @returns here can be someinfo about return
*/
  async removeFile(filePath: string) {
    const fs = require('fs');
    await fs.unlink(filePath, (err: any) => {
      if (err) {
        console.error(err)
      }
    })
  }

}