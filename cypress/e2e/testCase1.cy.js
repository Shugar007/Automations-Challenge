describe('Test Case 1 - Console Error Check', () => {
    it('Should not log any console errors on the About page', () => {
        const environmentUrl = Cypress.env('baseUrlProduction') || Cypress.config('baseUrl');
        cy.visit(`${environmentUrl}`);
        
      cy.window().then((win) => {
        cy.spy(win.console, 'error').as('consoleError');
      });
      cy.get('@consoleError').should('not.have.been.called');
    });
  });