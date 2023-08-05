describe('Abilities & Skills Page', () => {
  it('should display the page, click links, and render the correct pages', () => {
    cy.getAllData()
    cy.visit('http://localhost:3000/') 
    cy.wait('@lastFetch').then((interception) => {
      cy.get('.nav__container').children().contains('Abilities & Skills').click()
      cy.get('h2').contains('Abilities & Skills');
      cy.get(':nth-child(1) > .main__subheading').contains('Abilities');
      cy.get(':nth-child(2) > .main__subheading').contains('Skills');
      cy.checkLink('abilities', 'charisma', 'cha', 'Charisma');
      cy.checkLink('abilities', 'constitution', 'con', 'Constitution');
      cy.checkLink('abilities', 'dexterity', 'dex', 'Dexterity');
      cy.checkLink('abilities', 'intelligence', 'int', 'Intelligence');
      cy.checkLink('abilities', 'strength', 'str', 'Strength');
      cy.checkLink('abilities', 'wisdom', 'wis', 'Wisdom');    

      cy.checkLink('skills', 'acrobatics', 'acrobatics', 'Acrobatics');
      cy.checkLink('skills', 'animal-handling', 'animal-handling', 'Animal Handling');
      cy.checkLink('skills', 'arcana', 'arcana', 'Arcana');
      cy.checkLink('skills', 'athletics', 'athletics', 'Athletics');
      cy.checkLink('skills', 'deception', 'deception', 'Deception');
      cy.checkLink('skills', 'history', 'history', 'History');
      cy.checkLink('skills', 'insight', 'insight', 'Insight');
      cy.checkLink('skills', 'intimidation', 'intimidation', 'Intimidation');
      cy.checkLink('skills', 'investigation', 'investigation', 'Investigation');
      cy.checkLink('skills', 'medicine', 'medicine', 'Medicine');
      cy.checkLink('skills', 'nature', 'nature', 'Nature');
      cy.checkLink('skills', 'perception', 'perception', 'Perception');
      cy.checkLink('skills', 'performance', 'performance', 'Performance');
      cy.checkLink('skills', 'persuasion', 'persuasion', 'Persuasion');
      cy.checkLink('skills', 'religion', 'religion', 'Religion');
      cy.checkLink('skills', 'sleight-of-hand', 'sleight-of-hand', 'Sleight of Hand');
      cy.checkLink('skills', 'stealth', 'stealth', 'Stealth');
      cy.checkLink('skills', 'survival', 'survival', 'Survival');

    })
  })
})