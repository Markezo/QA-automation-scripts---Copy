import { Locator, Page } from '@playwright/test';


export class deleteFlow {
    readonly page: Page;
    readonly settingsButton: Locator;
    readonly deleteButton: Locator;
    readonly confirmDeleteButton: Locator;
    readonly acknowledgeEffectsButton: Locator;
    readonly confirmInput: Locator;
    readonly proceedButton: Locator;
   

  constructor(page: Page) {
    this.page = page;
    this.settingsButton = page.locator('//*[@id="settings-tab"]');
    this.deleteButton = page.getByRole('button', { name: 'Delete this repository' });
    this.confirmDeleteButton = page.getByRole('button', { name: 'I want to delete this repository' });
    this.acknowledgeEffectsButton = page.getByRole('button', { name: 'I have read and understand these effects' });
    this.confirmInput = page.locator('//*[@id="verification_field"]');
    this.proceedButton = page.locator('#repo-delete-proceed-button');
  }
}