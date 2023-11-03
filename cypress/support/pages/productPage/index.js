import { productPageElements } from './elements';

// Function to verify product sorting
export const verifyProductSort = (sortOption) => {
  cy.get(productPageElements.productSortContainer).select(sortOption);
  cy.get(productPageElements.inventoryList).should('not.be.visible');
  cy.get(productPageElements.inventoryItemNames).should('be.visible')

};
