import { test, expect } from './fixtures/xyz';

test('Make a deposit', async ({ homePage, page }) => {
  await homePage.gotoUrl();
  await homePage.deposit.click();
  await page.getByPlaceholder('amount').fill('750');
  await page.locator('form').locator("button[type=submit]").click();
  await expect(page.getByText('Deposit Successful')).toBeVisible();
  await page.waitForTimeout(5000);
  await homePage.transactions.click();
  const cellCount = await page.locator('td').count();
  await expect(page.locator('td').nth(Number(cellCount) - 2)).toHaveText('750');
});

