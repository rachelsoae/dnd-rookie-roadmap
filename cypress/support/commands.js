Cypress.Commands.add('getData', (url) => {
  cy.intercept('GET', `https://www.dnd5eapi.co/api/${url}`, {
    statusCode: 200,
    fixture:
  })
})

// on page load, there are 58 fetch calls
// for each fetch call, the response is pushed into an array
// need to provide a fixture response for each one
// need to be able to interpolate fixture into dynamic command
// 