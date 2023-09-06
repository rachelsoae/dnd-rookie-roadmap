describe('Directory Pages', () => {
  it('should display the Gameplay Basics page, click links, and render the correct pages', () => {
    cy.visit('http://localhost:3000/gameplay-basics');
    cy.get('h2').contains('Gameplay Basics');
    cy.get(':nth-child(1) > .main__subheading').contains('Spellcasting');
    cy.get(':nth-child(2) > .main__subheading').contains('Adventuring');
    cy.get(':nth-child(3) > .main__subheading').contains('Combat');
    cy.get(':nth-child(4) > .main__subheading').contains('Ability Scores');

    const categories = {
      spellcasting: ['What is a Spell', 'Casting a Spell'],
      adventuring: ['Time', 'Resting'],
      combat: ['The Order of Combat', 'Movement and Position', 'Actions in Combat', 'Making an Attack', 'Damage and Healing'], 
      'using ability scores': ['Ability Checks', 'Using Each Ability', 'Proficiency Bonus', 'Saving Throws']
    }

    Object.keys(categories).forEach(key => cy.getLinks(200, 'gameplay-basics', key))
  })

  it('should display the Abilities & Skills page, click links, and render the correct pages', () => {
    cy.visit('http://localhost:3000/abilities-and-skills');
    cy.get('h2').contains('Abilities & Skills');
    cy.get(':nth-child(1) > .main__subheading').contains('Abilities');
    cy.get(':nth-child(2) > .main__subheading').contains('Skills');
    cy.getLinks(200, 'abilities')
    cy.getLinks(200, 'skills')
  })

  it('should display the Races & Classes page, click links, and render the correct pages', () => {
    cy.visit('http://localhost:3000/races-and-classes');
    cy.get('h2').contains('Races & Classes');
    cy.get(':nth-child(1) > .main__subheading').contains('Races');
    cy.get(':nth-child(2) > .main__subheading').contains('Classes');
    cy.getLinks(200, 'races')
    cy.getLinks(200, 'classes')
  })
})