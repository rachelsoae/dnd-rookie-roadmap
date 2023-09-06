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

const PATHS = {
  'gameplay-basics': 'rule-sections',
  'abilities': 'ability-scores',
  'skills': 'skills',
  'races': 'races',
  'classes': 'classes'
}

Cypress.Commands.add('getLinks', (directory, category = null, status) => {
  const list = category ? NAMES['gameplay-basics'][category] : NAMES[directory];
  list.forEach(name => {
    const index = name.toLowerCase().split(' ').join('-');
    let url = PATHS[directory] === 'ability-scores' ? index.slice(0, 3) : index;
    cy.intercept('GET', `https://www.dnd5eapi.co/api/${PATHS[directory]}/${url}`, {
      statusCode: status,
      fixture: `${url}`
    })
    cy.get(`[href="/${directory}/${index}"]`).click()
    cy.url().should('eq', `http://localhost:3000/${directory}/${index}` )
    cy.get('h2');
    cy.go('back');
  })
})