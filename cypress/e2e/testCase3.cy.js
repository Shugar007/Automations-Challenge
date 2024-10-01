describe('Test Case 3 - Login Verification', () => {
    it('Should log in successfully with the correct credentials', () => {
        const environmentUrl = Cypress.env('baseUrlProduction') || Cypress.config('baseUrl');
        cy.visit(`${environmentUrl}/login.html`);

      cy.get('input[name="username"]').type('demouser', { delay: 300 });
      cy.get('input[name="password"]').type('fashion123', { delay: 300 });
      cy.get('[type="submit"]').click();
      
    });
  });