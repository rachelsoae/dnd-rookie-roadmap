describe('Races & Classes Page', () => {
  it('should display the page, click links, and render the correct pages', () => {
    cy.getAllData()
    cy.visit('http://localhost:3000/') 
    cy.wait('@lastFetch').then((interception) => {
      cy.get('.nav__container').children().contains('Races & Classes').click()
      cy.get('h2').contains('Races & Classes');
      cy.get(':nth-child(1) > .main__subheading').contains('Races');
      cy.get(':nth-child(2) > .main__subheading').contains('Classes');

      cy.checkLink('races', 'dragonborn', 'dragonborn', 'Dragonborn');
      cy.checkLink('races', 'dwarf', 'dwarf', 'Dwarf');
      cy.checkLink('races', 'elf', 'elf', 'Elf');
      cy.checkLink('races', 'gnome', 'gnome', 'Gnome');
      cy.checkLink('races', 'half-elf', 'half-elf', 'Half-Elf');
      cy.checkLink('races', 'half-orc', 'half-orc', 'Half-Orc');    
      cy.checkLink('races', 'halfling', 'halfling', 'Halfling');    
      cy.checkLink('races', 'human', 'human', 'Human');    
      cy.checkLink('races', 'tiefling', 'tiefling', 'Tiefling');    

      cy.checkLink('classes', 'barbarian', 'barbarian', 'Barbarian');
      cy.checkLink('classes', 'bard', 'bard', 'Bard');
      cy.checkLink('classes', 'cleric', 'cleric', 'Cleric');
      cy.checkLink('classes', 'druid', 'druid', 'Druid');
      cy.checkLink('classes', 'fighter', 'fighter', 'Fighter');
      cy.checkLink('classes', 'monk', 'monk', 'Monk');
      cy.checkLink('classes', 'paladin', 'paladin', 'Paladin');
      cy.checkLink('classes', 'ranger', 'ranger', 'Ranger');
      cy.checkLink('classes', 'rogue', 'rogue', 'Rogue');
      cy.checkLink('classes', 'sorcerer', 'sorcerer', 'Sorcerer');
      cy.checkLink('classes', 'warlock', 'warlock', 'Warlock');
      cy.checkLink('classes', 'wizard', 'wizard', 'Wizard');
    })
  })
})  