import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home';

test('Make a deposit', async ({ page }) => {

  const homePage = new HomePage(page);
  
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

  await page.getByText('Customer Login').click();
  
  await page.locator('select.form-control').selectOption('Ron Weasly');
    
  await page.getByText('Login').click();

  await expect(page.locator('.fontBig.ng-binding')).toHaveText('Ron Weasly');

  await homePage.deposit.click();

  await page.getByPlaceholder('amount').fill('750');

  await page.locator('form').locator("button[type=submit]").click();

  await expect(page.getByText('Deposit Successful')).toBeVisible();

  await page.waitForTimeout(5000);

  await homePage.transactions.click();

  const cellCount = await page.locator('td').count();

  await expect(page.locator('td').nth(Number(cellCount) - 2)).toHaveText('750');

});

