describe('Resources Page', () => {
  it('should display the page, click links, and render the correct pages', () => {
    cy.visit('http://localhost:3000/') 
    cy.get('.nav__container').children().contains('Resources').click()
    cy.get('h2').contains('Resources');
    cy.get('.main__links').children().should('have.length', 4);
    cy.get('.main__links').children().contains('Dungeons & Dragons Official Website');
    cy.get('.main__links').children().contains('D&D on Wikipedia');
    cy.get('.main__links').children().contains('"A beginner\'s guide to playing Dungeons and Dragons" by Samantha Nelson');
    cy.get('.main__links').children().contains('"About Dungeons & Dragons 5E" on Dicebreaker');
  })  
})