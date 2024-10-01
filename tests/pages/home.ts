import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly deposit: Locator;
  readonly transactions: Locator;
 



  constructor(page: Page) {
    this.page = page;
    this.deposit =  page.locator('text=Deposit');
    this.transactions =  page.locator('text=Transactions')
  
}

  async gotoUrl() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account');
  }

}