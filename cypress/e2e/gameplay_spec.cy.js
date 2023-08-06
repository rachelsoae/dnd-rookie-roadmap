describe('Gameplay Basics Page', () => {
  it('should display the page, click links, and render the correct pages', () => {
    cy.getAllData()
    cy.visit('http://localhost:3000/') 
    cy.wait('@lastFetch').then((interception) => {
      cy.get('.nav__container').children().contains('Gameplay Basics').click()
      cy.get('h2').contains('Gameplay Basics');
      cy.get(':nth-child(1) > .main__subheading').contains('Spellcasting');
      cy.get(':nth-child(2) > .main__subheading').contains('Adventuring');
      cy.get(':nth-child(3) > .main__subheading').contains('Combat');
      cy.get(':nth-child(4) > .main__subheading').contains('Ability Scores');
      cy.checkLink('gameplay-basics', 'what-is-a-spell', 'what-is-a-spell', 'What Is a Spell?');
      cy.checkLink('gameplay-basics', 'casting-a-spell', 'casting-a-spell', 'Casting a Spell');
      cy.checkLink('gameplay-basics', 'time', 'time', 'Time');
      cy.checkLink('gameplay-basics', 'resting', 'resting', 'Resting');
      cy.checkLink('gameplay-basics', 'the-order-of-combat', 'the-order-of-combat', 'The Order of Combat');
      cy.checkLink('gameplay-basics', 'movement-and-position',  'movement-and-position','Movement and Position');
      cy.checkLink('gameplay-basics', 'actions-in-combat', 'actions-in-combat', 'Actions in Combat');
      cy.checkLink('gameplay-basics', 'making-an-attack', 'making-an-attack', 'Making an Attack');
      cy.checkLink('gameplay-basics', 'damage-and-healing', 'damage-and-healing', 'Damage and Healing');
      cy.checkLink('gameplay-basics', 'ability-checks',  'ability-checks', 'Ability Checks');
      cy.checkLink('gameplay-basics', 'using-each-ability',  'using-each-ability', 'Using Each Ability');
      cy.checkLink('gameplay-basics', 'proficiency-bonus',  'proficiency-bonus', 'Proficiency Bonus');
      cy.checkLink('gameplay-basics', 'saving-throws', 'saving-throws', 'Saving Throws');
    })
  })
})