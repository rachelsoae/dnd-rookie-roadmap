describe('Navigation Error Handling', () => {
  it('should display the page when visiting an incorrect URL', () => {
    cy.getAllData()
    cy.visit('http://localhost:3000/something-weird') 
    cy.wait('@lastFetch').then((interception) => {
      cy.get('h2').contains('Sorry about this...');
      cy.get('.main__subheading').contains('There\'s been an error. Please try again.')
    })
  })  
})

