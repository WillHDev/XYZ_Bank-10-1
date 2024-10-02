import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly goToLoginBtn: Locator;
  readonly loginBtn: Locator;
  readonly selectUser: Locator;
 



  constructor(page: Page) {
    this.page = page;
    this.goToLoginBtn = page.getByText('Customer Login');
    this.selectUser = page.locator('select.form-control');
    this.loginBtn= page.getByText('Login');
}

  async gotoUrl() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  }


  async login(user:string) {
    await this.goToLoginBtn.click();
    await this.selectUser.selectOption(user);
    await this.loginBtn.click();
    await expect(this.page.locator('.fontBig.ng-binding')).toHaveText(user);

  }


}

