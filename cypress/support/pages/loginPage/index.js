import { loginPageElements } from './elements';

// Login function
export const login = (username, password) => {
  cy.get(loginPageElements.usernameInput).type(username);
  cy.get(loginPageElements.passwordInput).type(password);
  cy.get(loginPageElements.loginButton).click();
};