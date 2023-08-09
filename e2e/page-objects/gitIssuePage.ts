import { Locator, Page } from '@playwright/test';


export class issueFlow {  
    readonly issueButton: Locator;
    readonly newIssueButton: Locator;
    readonly titleField: Locator;
    readonly commentField: Locator;
    readonly assigneesBox: Locator;
    readonly labelsBox: Locator;
    readonly selectAssignee: Locator;
    readonly selectLabel: Locator;
    readonly submitButton: Locator;
    readonly deleteButton: Locator;
    readonly confirmDeleteButton: Locator;

  constructor(readonly page: Page) {
    this.page = page;
    this.issueButton = page.locator('//*[@id="issues-tab"]');
    this.newIssueButton = page.getByRole('link', { name: 'New issue' });
    this.titleField = page.getByPlaceholder('Title');
    this.commentField = page.getByPlaceholder('Leave a comment');
    this.assigneesBox = page.getByRole('button', { name : 'Assignees'});
    this.labelsBox = page.getByRole('button', { name : 'Labels'});
    this.selectAssignee = page.locator('#assignees-select-menu').getByText('Markezo Alex');
    this.selectLabel = page.locator('#labels-select-menu').getByText('bug');
    this.submitButton = page.getByRole('button', { name : 'Submit new issue'});
    this.deleteButton = page.getByRole('button', { name : 'Delete issue'});
    this.confirmDeleteButton = page.getByRole('button', { name : 'Delete this issue'});
    
  }


}