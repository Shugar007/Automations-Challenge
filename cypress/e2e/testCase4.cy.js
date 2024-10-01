// const fs = require('fs');
// const path = require('path');
// const csvWriter = require('csv-writer').createObjectCsvWriter;

// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false
// })

// describe('Test Case 4 - Fetch Open Pull Requests', () => {
//   it('Should fetch open PRs and generate a CSV file', () => {
//     cy.request('GET', 'https://api.github.com/repos/appwrite/appwrite/pulls').then((response) => {
    //       const prList = response.body.map(pr => ({
    //         title: pr.title,
    //         created_at: pr.created_at,
    //         author: pr.user.login
    //       }));
          
    //       const writer = csvWriter({
    //         path: path.join(__dirname, '../../downloads/open_prs.csv'),
    //         header: [
    //           { id: 'title', title: 'PR Title' },
    //           { id: 'created_at', title: 'Created Date' },
    //           { id: 'author', title: 'Author' }
    //         ]
    //       });
    
    //       writer.writeRecords(prList).then(() => {
    //         cy.log('CSV file has been successfully generated.');
    //       });
    //     });
    //   });
    // });