import { Locator, Page } from '@playwright/test';

export class personalPage {
    readonly page: Page;
    readonly avatarPic: Locator;
    readonly yourProfile: Locator;
    readonly editProfile: Locator;
    readonly nameProfile: Locator;
    readonly bioProfile: Locator;
    readonly pronounsProfile: Locator;
    readonly companyProfile: Locator;
    readonly locationProfile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.avatarPic = page.locator('button[aria-label="Open user account menu"]');
    this.yourProfile = page.getByRole('link', { name: 'Your profile' });
    this.editProfile = page.getByRole('button', { name: 'Edit profile' });
    this.nameProfile = page.locator('//*[@id="user_profile_name"]');
    this.bioProfile = page.getByPlaceholder('Add a bio');
    this.pronounsProfile = page.locator('//*[@id="user_profile_pronouns"]');
    this.companyProfile =  page.getByPlaceholder('Company');
    this.locationProfile =  page.getByPlaceholder('Location');
  }
}