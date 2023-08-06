Cypress.Commands.add('getData', (fixture, url) => {
  cy.intercept('GET', `https://www.dnd5eapi.co/api/${url}`, {
    statusCode: 200,
    fixture: `${fixture}`
  })
})

Cypress.Commands.add('getAllData', () => {
  cy.getData('rule01', 'rule-sections/what-is-a-spell');
  cy.getData('rule02', 'rule-sections/casting-a-spell');
  cy.getData('rule03', 'rule-sections/time');
  cy.getData('rule04', 'rule-sections/resting');
  cy.getData('rule05', 'rule-sections/the-order-of-combat');
  cy.getData('rule06', 'rule-sections/movement-and-position');
  cy.getData('rule07', 'rule-sections/actions-in-combat');
  cy.getData('rule08', 'rule-sections/making-an-attack');
  cy.getData('rule09', 'rule-sections/damage-and-healing');
  cy.getData('rule10', 'rule-sections/ability-checks');
  cy.getData('rule11', 'rule-sections/using-each-ability');
  cy.getData('rule12', 'rule-sections/proficiency-bonus');
  cy.getData('rule13', 'rule-sections/saving-throws');
  cy.getData('ability01', 'ability-scores/cha');
  cy.getData('ability02', 'ability-scores/con');
  cy.getData('ability03', 'ability-scores/dex');
  cy.getData('ability04', 'ability-scores/int');
  cy.getData('ability05', 'ability-scores/str');
  cy.getData('ability06', 'ability-scores/wis');
  cy.getData('skill01', 'skills/acrobatics');
  cy.getData('skill02', 'skills/animal-handling');
  cy.getData('skill03', 'skills/arcana');
  cy.getData('skill04', 'skills/athletics');
  cy.getData('skill05', 'skills/deception');
  cy.getData('skill06', 'skills/history');
  cy.getData('skill07', 'skills/insight');
  cy.getData('skill08', 'skills/intimidation');
  cy.getData('skill09', 'skills/investigation');
  cy.getData('skill10', 'skills/medicine');
  cy.getData('skill11', 'skills/nature');
  cy.getData('skill12', 'skills/perception');
  cy.getData('skill13', 'skills/performance');
  cy.getData('skill14', 'skills/persuasion');
  cy.getData('skill15', 'skills/religion');
  cy.getData('skill16', 'skills/sleight-of-hand');
  cy.getData('skill17', 'skills/stealth');
  cy.getData('skill18', 'skills/survival');
  cy.getData('race01', 'races/dragonborn');
  cy.getData('race02', 'races/dwarf');
  cy.getData('race03', 'races/elf');
  cy.getData('race04', 'races/gnome');
  cy.getData('race05', 'races/half-elf');
  cy.getData('race06', 'races/half-orc');
  cy.getData('race07', 'races/halfling');
  cy.getData('race08', 'races/human');
  cy.getData('race09', 'races/tiefling');
  cy.getData('charClass01', 'classes/barbarian');
  cy.getData('charClass02', 'classes/bard');
  cy.getData('charClass03', 'classes/cleric');
  cy.getData('charClass04', 'classes/druid');
  cy.getData('charClass05', 'classes/fighter');
  cy.getData('charClass06', 'classes/monk');
  cy.getData('charClass07', 'classes/paladin');
  cy.getData('charClass08', 'classes/ranger');
  cy.getData('charClass09', 'classes/rogue');
  cy.getData('charClass10', 'classes/sorcerer');
  cy.getData('charClass11', 'classes/warlock');
  cy.getData('charClass12', 'classes/wizard').as('lastFetch')
})

Cypress.Commands.add('checkLink', (url1, url2, id, name) => {
  cy.get(`#${id}`).click()
  cy.url().should('eq', `http://localhost:3000/${url1}/${url2}`)
  cy.get('h2').contains(`${name}`)
  cy.go('back')
})

Cypress.Commands.add('getBadData', () => {
  cy.getData('rule01', 'rule-sections/what-is-a-spell');
  cy.getData('rule02', 'rule-sections/casting-a-spell');
  cy.getData('rule03', 'rule-sections/time');
  cy.getData('rule04', 'rule-sections/resting');
  cy.getData('rule05', 'rule-sections/the-order-of-combat');
  cy.getData('rule06', 'rule-sections/movement-and-position');
  cy.getData('rule07', 'rule-sections/actions-in-combat');
  cy.getData('rule08', 'rule-sections/making-an-attack');
  cy.getData('rule09', 'rule-sections/damage-and-healing');
  cy.getData('rule10', 'rule-sections/ability-checks');
  cy.getData('rule11', 'rule-sections/using-each-ability');
  cy.getData('rule12', 'rule-sections/proficiency-bonus');
  cy.getData('rule13', 'rule-sections/saving-throws');
  cy.getData('ability01', 'ability-scores/cha');
  cy.getData('ability02', 'ability-scores/con');
  cy.getData('ability03', 'ability-scores/dex');
  cy.getData('ability04', 'ability-scores/int');
  cy.getData('ability05', 'ability-scores/str');
  cy.getData('ability06', 'ability-scores/wis');
  cy.getData('skill01', 'skills/acrobatics');
  cy.getData('skill02', 'skills/animal-handling');
  cy.getData('skill03', 'skills/arcana');
  cy.getData('skill04', 'skills/athletics');
  cy.getData('skill05', 'skills/deception');
  cy.getData('skill06', 'skills/history');
  cy.getData('skill07', 'skills/insight');
  cy.getData('skill08', 'skills/intimidation');
  cy.getData('skill09', 'skills/investigation');
  cy.getData('skill10', 'skills/medicine');
  cy.getData('skill11', 'skills/nature');
  cy.getData('skill12', 'skills/perception');
  cy.getData('skill13', 'skills/performance');
  cy.getData('skill14', 'skills/persuasion');
  cy.getData('skill15', 'skills/religion');
  cy.getData('skill16', 'skills/sleight-of-hand');
  cy.getData('skill17', 'skills/stealth');
  cy.getData('skill18', 'skills/survival');
  cy.getData('race01', 'races/dragonborn');
  cy.getData('race02', 'races/dwarf');
  cy.getData('race03', 'races/elf');
  cy.getData('race04', 'races/gnome');
  cy.getData('race05', 'races/half-elf');
  cy.getData('race06', 'races/half-orc');
  cy.getData('race07', 'races/halfling');
  cy.getData('race08', 'races/human');
  cy.getData('race09', 'races/tiefling');
  cy.getData('charClass01', 'classes/barbarian');
  cy.getData('charClass02', 'classes/bard');
  cy.getData('charClass03', 'classes/cleric');
  cy.getData('charClass04', 'classes/druid');
  cy.getData('charClass05', 'classes/fighter');
  cy.getData('charClass06', 'classes/monk');
  cy.getData('charClass07', 'classes/paladin');
  cy.getData('charClass08', 'classes/ranger');
  cy.getData('charClass09', 'classes/rogue');
  cy.getData('charClass10', 'classes/sorcerer');
  cy.getData('charClass11', 'classes/warlock');
  cy.intercept('GET', `https://www.dnd5eapi.co/api/classes/wizard`, {
    statusCode: 500,
    fixture: 'charClass12'
  }).as('badFetch')
})