//Fix: 
await expect(page.locator('.fontBig ng-binding')).toHaveText('Ron Weasly');



await expect(page.locator('.fontBig.ng-binding')).toHaveText('Ron Weasly');


//What works: [needed "" after = within attribute brackets]:

await page.locator('[name="userSelect"]').selectOption('Ron Weasly');

await page.locator('select[name="userSelect"]').selectOption('Ron Weasly');


await page.locator('select.form-control').selectOption('Ron Weasly');

//Does not work
const Ron = await page.locator('name="userSelect"').selectOption('Ron Weasly');
               // Only with text?
               //This works:
               const submitButton = await page.locator('text="Submit"');

// no click after select

await expect(page.getByText('Deposit Successful')).toBeVisible({
    timeout: 10000,
  });


   //const { deposit, transactions } = HomePage;