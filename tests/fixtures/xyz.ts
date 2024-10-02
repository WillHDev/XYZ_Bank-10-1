import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.ts';
import { LoginPage } from '../pages/auth.ts';

type XYZFixtures = {

  homePage: HomePage;
  loginPage: LoginPage;
 
};

export const test = base.extend<XYZFixtures>({

  homePage: async ({ page }, use) => {
    await use(new HomePage( page ));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage( page ));
  },

});

export { expect } from '@playwright/test';

