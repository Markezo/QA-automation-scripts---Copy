import { Locator, Page } from '@playwright/test';


export class repoPage {
  //  readonly page: Page;
    readonly settingsButton: Locator;
    readonly repoNameField: Locator;
    readonly renameButton: Locator;
    readonly repoNewName : Locator;
  

  constructor(readonly page: Page) {
    this.page = page;
    this.settingsButton = page.locator('//*[@id="settings-tab"]');
    this.repoNameField = page.locator('//*[@id="rename-field"]');
    this.renameButton = page.getByText('Rename',{exact: true });
    this.repoNewName = page.locator('//*[@id="repository-container-header"]/div[1]/div/div[1]/strong/a');
  
  }


}