import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.ts';


type XYZFixtures = {

  homePage: HomePage;

};

export const test = base.extend<XYZFixtures>({

  homePage: async ({ page }, use) => {
    await use(new HomePage( page ));
  },

});

export { expect } from '@playwright/test';

