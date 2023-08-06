describe('Network Request Error Handling', () => {
  it('should display the page when a network request goes wrong', () => {
    cy.getBadData()
    cy.visit('http://localhost:3000/') 
    cy.wait('@badFetch').then((interception) => {
      cy.get('h2').contains('Sorry about this...');
      cy.get('.main__subheading').contains('There\'s been an error. Please try again.')
    })
  })   
})