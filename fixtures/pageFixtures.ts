// import { test as base, expect } from '@playwright/test';
// import { HomePage } from '../pages/opencart/HomePage';
// import { RegisterPage } from '../pages/opencart/RegisterPage';
// import { LoginPage } from '../pages/opencart/LoginPage';
// import { LogoutPage } from '../pages/opencart/LogoutPage';
// import { MyAccountPage } from '../pages/opencart/MyAccountPage';
// import { SearchResultsPage } from '../pages/opencart/SearchResultsPage';
// import { ProductDetailsPage } from '../pages/opencart/ProductDetailsPage';
// import { CartPage } from '../pages/opencart/CartPage';

// type PageFixtures = {
//   homePage: HomePage;
//   registerPage: RegisterPage;
//   loginPage: LoginPage;
//   logoutPage: LogoutPage;
//   myAccountPage: MyAccountPage;
//   searchResultsPage: SearchResultsPage;
//   productDetailsPage: ProductDetailsPage;
//   cartPage: CartPage;
// };

// export const test = base.extend<PageFixtures>({
//   homePage: async ({ page }, use) => {
//     await use(new HomePage(page));
//   },
//   registerPage: async ({ page }, use) => {
//     await use(new RegisterPage(page));
//   },
//   loginPage: async ({ page }, use) => {
//     await use(new LoginPage(page));
//   },
//   logoutPage: async ({ page }, use) => {
//     await use(new LogoutPage(page));
//   },
//   myAccountPage: async ({ page }, use) => {
//     await use(new MyAccountPage(page));
//   },
//   searchResultsPage: async ({ page }, use) => {
//     await use(new SearchResultsPage(page));
//   },
//   productDetailsPage: async ({ page }, use) => {
//     await use(new ProductDetailsPage(page));
//   },
//   cartPage: async ({ page }, use) => {
//     await use(new CartPage(page));
//   },
// });

// export { expect } from '@playwright/test';



import { test as base } from '@playwright/test';
import dotenv from 'dotenv';

import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { SuccessPage } from '../pages/SuccessPage';
import { LogoutPage } from '../pages/LogoutPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { AdminCustomersPage } from '../pages/AdminCustomersPage';
import { AdminCustomerEditPage } from '../pages/AdminCustomerEditPage';

dotenv.config();

const APP_URL = process.env.WEB_APP_URL || 'http://localhost/opencart/upload/';

type PageFixtures = {
    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    myAccountPage: MyAccountPage;
    successPage: SuccessPage;
    logoutPage: LogoutPage;
    searchResultsPage: SearchResultsPage;
    productPage: ProductPage;
    cartPage: CartPage;
    adminLoginPage: AdminLoginPage;
    adminCustomersPage: AdminCustomersPage;
    adminCustomerEditPage: AdminCustomerEditPage;
};

export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        await page.goto(APP_URL);
        await use(new HomePage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    successPage: async ({ page }, use) => {
        await use(new SuccessPage(page));
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },
    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    adminLoginPage: async ({ page }, use) => {
        await use(new AdminLoginPage(page));
    },
    adminCustomersPage: async ({ page }, use) => {
        await use(new AdminCustomersPage(page));
    },
    adminCustomerEditPage: async ({ page }, use) => {
        await use(new AdminCustomerEditPage(page));
    },
});

export { expect } from '@playwright/test';