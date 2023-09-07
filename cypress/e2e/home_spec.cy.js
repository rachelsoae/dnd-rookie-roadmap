describe('Home Page', () => {
  it('should display home page and navigate using nav bar', () => {
    cy.visit('http://localhost:3000/') 
    cy.get('h1').contains('D&D: The Rookie\'s Roadmap');
    cy.get('h2').contains('Welcome to The Rookie\'s Roadmap!');
    cy.get('.main__body').children().should('have.length', 5)
      .get('.main__body').children().first().contains('p', 'Dear Novices, Newbies, and Neophytes,')
      .get('.main__body').children().last().contains('p', 'Rachel & the Dragons')
    cy.get('.nav__container').children().should('have.length', 6)
      .get('.nav__container').children().first().contains('Home')
      .get('.nav__container').children().last().contains('Resources');
    
    cy.get('.nav__container').children().contains('Gameplay Basics').click();
    cy.url().should('eq', 'http://localhost:3000/gameplay-basics');
    cy.get('.nav__container').children().contains('Home').click();
    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('.nav__container').children().contains('Abilities & Skills').click();
    cy.url().should('eq', 'http://localhost:3000/abilities-and-skills');
    cy.get('.nav__container').children().contains('Home').click();


    cy.get('.nav__container').children().contains('Races & Classes').click();
    cy.url().should('eq', 'http://localhost:3000/races-and-classes');
    cy.get('.nav__container').children().contains('Home').click();


    cy.get('.nav__container').children().contains('Glossary & Search').click();
    cy.url().should('eq', 'http://localhost:3000/glossary');
    cy.get('.nav__container').children().contains('Home').click();


    cy.get('.nav__container').children().contains('Resources').click();
    cy.url().should('eq', 'http://localhost:3000/resources');
  })
})