describe('Open Application', () => {
  it('should navigate to the home page', () => {
    // Start from the home page
    // Cypress.config().baseUrl;
    cy.visit('/');

    // Get if exists Home and Login links
    cy.get('a[href*="/"]:contains("Home")');
    cy.get('a[href*="/login"]:contains("Login")');

    // Get if exists title with the project's name
    cy.get('h4').contains('Henry´s Polls');
  });
});
