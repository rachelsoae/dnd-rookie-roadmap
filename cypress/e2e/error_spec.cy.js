describe('Error Handling', () => {
  it('should display the page when visiting an incorrect URL', () => {
    cy.visit('http://localhost:3000/something-weird') 
    cy.get('h2').contains('Sorry about this...');
    cy.get('.main__subheading').contains('There\'s been an error. Please try again.')
  })  

  it('should display the page when a network request goes wrong', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav__container').children().contains('Abilities & Skills').click();
    cy.intercept('GET', `https://www.dnd5eapi.co/api/ability-scores/cha`, {
          statusCode: 500,
        }).as('failedRequest')
    cy.get(`[href="/abilities/charisma"]`).click()
    cy.get('h2').contains('Sorry about this...');
    cy.get('.main__subheading').contains('There\'s been an error. Please try again.')
  })
})
