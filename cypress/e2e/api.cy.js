describe('API Tests', () => {
  it('should call the API and verify the response', () => {
    cy.request('GET', 'https://api.publicapis.org/entries').then((response) => {
      // Verify if the response was successful
      expect(response.status).to.equal(200);

      //JSON response stored
      const apiObjects = response.body.entries;

      // Storing objects with Category: Authentication & Authorization
      const authObjects = [];

      // Checking the "Category" property
      apiObjects.forEach((entry) => {
        // Check if the object has the "Category" property
        if (entry.Category === 'Authentication & Authorization') {
          // Add the object to the list
          authObjects.push(entry);
        }
      });

      // Check if there are objects with the specified category
      expect(authObjects.length).to.be.greaterThan(0);

      // Print the number of objects found in the console
      cy.log(`Found ${authObjects.length} objects with Category: Authentication & Authorization`);
      cy.log('Objects:');
      authObjects.forEach((authObject) => {
        cy.log(JSON.stringify(authObject, null, 2));
      });
    });
  });
});
