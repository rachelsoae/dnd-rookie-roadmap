describe('Glossary Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/glossary');
  })
  
  it('should display the page, click links, and render the correct pages', () => {
    cy.get('h2').contains('Glossary / Search');
    cy.get('.main__links').children().should('have.length', 58);
    
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/rule-sections/ability-checks', {
      statusCode: 200,
      fixture: 'ability-checks'
    })
    cy.get('.main__links').children().first().click();
    cy.url().should('eq', 'http://localhost:3000/gameplay-basics/ability-checks')
    cy.get('h2').contains('Ability Checks');
    cy.go('back');

    cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/wizard', {
      statusCode: 200,
      fixture: 'wizard'
    })
    cy.get('.main__links').children().last().click();
    cy.url().should('eq', 'http://localhost:3000/classes/wizard')
    cy.get('h2').contains('Wizard');
    cy.go('back');
  });

  it('should be able to search by concept title', () => {
    cy.get('label').contains('Search');
    cy.get('input').type('wi'); 
    cy.get('.main__links').children().first().contains('Wisdom');
    cy.get('.main__links').children().last().contains('Wizard');
  })

  it('should display a message if a search returns 0 results', () => {
    cy.get('input').type('random');
    cy.get('p').contains('Sorry, no matches found.')
  })
})  