describe('Test Case 2 - Verify Page Status Codes', () => {
    it('Should verify that all links return 200 or 30x and no 40x status codes', () => {
        const environmentUrl = Cypress.env('baseUrlProduction') || Cypress.config('baseUrl');
        cy.visit(`${environmentUrl}`);
      cy.get('a').each(link => {
        const href = link.prop('href');
        cy.request(href).then(response => {
          expect(response.status).to.be.oneOf([200, 301, 302]);
        });
      });
    });
  });