describe('Glossary Page', () => {
  it('should display the page, click links, and render the correct pages', () => {
    cy.getAllData()
    cy.visit('http://localhost:3000/') 
    cy.wait('@lastFetch').then((interception) => {
      cy.get('.nav__container').children().contains('Glossary & Search').click()
      cy.get('h2').contains('Glossary / Search');
      cy.get('.main__links').children().should('have.length', 58);
      cy.get('.main__links').children().first().contains('Ability Checks');
      cy.get('.main__links').children().last().contains('Wizard');
      cy.checkLink('gameplay-basics', 'ability-checks',  'ability-checks', 'Ability Checks');
      cy.checkLink('classes', 'wizard', 'wizard', 'Wizard');

      cy.get('label').contains('Search');
      cy.get('input').type('wi');
      cy.get('.main__links').children().first().contains('Wisdom');
      cy.get('.main__links').children().last().contains('Wizard');
      cy.checkLink('abilities', 'wisdom', 'wis', 'Wisdom');

      cy.get('input').type('random');
      cy.get('p').contains('Sorry, no matches found.')
    })
  })  
})