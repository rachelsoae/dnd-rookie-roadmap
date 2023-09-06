describe('Gameplay Basics Page', () => {
  it('should display the page, click links, and render the correct pages', () => {
    cy.visit('http://localhost:3000/') 
    cy.get('.nav__container').children().contains('Gameplay Basics').click()
    cy.get('h2').contains('Gameplay Basics');
    cy.get(':nth-child(1) > .main__subheading').contains('Spellcasting');
    cy.get(':nth-child(2) > .main__subheading').contains('Adventuring');
    cy.get(':nth-child(3) > .main__subheading').contains('Combat');
    cy.get(':nth-child(4) > .main__subheading').contains('Ability Scores');

    const NAMES = {
      'gameplay-basics': {
          spellcasting: ['What is a Spell', 'Casting a Spell'],
          adventuring: ['Time', 'Resting'],
          combat: ['The Order of Combat', 'Movement and Position', 'Actions in Combat', 'Making an Attack', 'Damage and Healing'], 
          'using ability scores': ['Ability Checks', 'Using Each Ability', 'Proficiency Bonus', 'Saving Throws']
        },
      abilities: ['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Strength', 'Wisdom'],
      skills:['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],
      races: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling'],
      classes:['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    }

    Object.keys(NAMES['gameplay-basics']).forEach(key => cy.getLinks('gameplay-basics', key, 200))
  })
})