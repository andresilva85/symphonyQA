import { login } from '../support/pages/loginPage';
import { verifyProductSort } from '../support/pages/productPage';
import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');

describe('Sauce Demo Test', () => {
  it('should login and verify sorting', () => {
    cy.visit('https://www.saucedemo.com');

    // Use the login function to log in to the page
    login('standard_user', 'secret_sauce');

    // Use the function to verify product sorting
    verifyProductSort('az');

    // Change sorting and verify again
    verifyProductSort('za');
  });
});
