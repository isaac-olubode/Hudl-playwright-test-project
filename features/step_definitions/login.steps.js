import { expect} from '@playwright/test';
import {Given, When, Then} from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage.js';

Given('the user navigates to login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToLoginPage();
});

When('the user enters a valid {string} and {string}', async function (email, password) {
  await this.loginPage.login(email, password);
});

When('the user enters an invalid {string} and {string}', async function (email, password) {
  await this.loginPage.login(email, password);
});

When('the user enters an invalid email address {string}', async function (email) {
  await this.loginPage.invalidLogin(email);
});

Then('the {string} should occur', async function (outcome) {
  switch (outcome) {
    case 'Login is Successful':
      await expect(this.page).toHaveURL('https://www.hudl.com/home');
      break;
    case 'Incorrect password error':
      await expect(this.page.getByText('Your email or password is incorrect. Try again.', { exact: false })).toBeVisible();
      break;
    case 'Invalid email format error':
      await expect(this.page.getByText('Enter a valid email.', { exact: true })).toBeVisible();
      break;
    case 'Email required error':
      await expect(this.page.getByText('Enter an email address', { exact: true })).toBeVisible();
      break;
    default:
      throw new Error(`Unknown outcome: ${outcome}`);
    }
});