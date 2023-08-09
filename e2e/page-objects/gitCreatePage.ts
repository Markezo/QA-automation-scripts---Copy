import { Locator, Page } from '@playwright/test';


export class createFlow {
  //  readonly page: Page;
    readonly newButton: Locator;
    readonly repoName: Locator;
    readonly description: Locator;
    readonly createButton: Locator;
    readonly privateCheckBox: Locator;
    readonly gitNore: Locator;
    readonly license: Locator;

  constructor(readonly page: Page) {
    this.page = page;
    this.newButton = page.getByRole('link', { name: 'New', exact: true });
    this.repoName = page.locator('//*[@id="react-aria-2"]');
    this.description = page.locator('//*[@id="react-aria-3"]');
    this.createButton = page.getByRole('button', { name: 'Create repository' });
    this.privateCheckBox = page.locator('//*[@id="react-aria-6"]');
    this.gitNore = page.locator('//*[@id=":r3:"]');
    this.license = page.locator('//*[@id=":r6:"]');
  }


}