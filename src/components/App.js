import '../styles/output.css';
import Nav from './Nav';
import Home from './Home';
import Gameplay from './Gameplay';
import Rule from './Rule';
import AbilitySkill from './AbilitySkill';
import Ability from './Ability';
import Skill from './Skill';
import RaceClass from './RaceClass';
import Race from './Race';
import Class from './Class';
import Glossary from './Glossary';
import Resources from './Resources';
import Error from './Error';
import Page from './Page';
import { getData } from '../apiCalls';
import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

function App() {
  // remove all these repeated fetch calls and states
  // when a user clicks on a specific page link, route to that page
  // fetch that specific rule
    // add a loading page/animation
  // make the get function more dynamic so it takes two arguments
  // arg1 = left side of URL
    // create an object
    // keys are MY left side URLs
    // values are API left side URLs
      // 'rules': 'rule-sections'
  // arg2 = right side of URL
      // useParams will give ID
      // add a conditional with the splice for ability-scores

  // when data is received, use it to populate the page
  // generate different components based on location? or just use different processing operations by location.
  
  // const [rules, setRules] = useState([]);
  // const [abilities, setAbilities] = useState([]);
  // const [skills, setSkills] = useState([]);
  // const [races, setRaces] = useState([]);
  // const [classes, setClasses] = useState([]);
  // const [rule, setRule] = useState({});
  // const [ability, setAbility] = useState({});
  // const [skill, setSkill] = useState({});
  // const [race, setRace] = useState({});
  // const [charClass, setCharClass] = useState({});
  const [error, setError] = useState('');

  // useEffect(() => {
  //   let updateRules = true;
  //   const rule01 = getData('rule-sections/what-is-a-spell');
  //   const rule02 = getData('rule-sections/casting-a-spell');
  //   const rule03 = getData('rule-sections/time');
  //   const rule04 = getData('rule-sections/resting');
  //   const rule05 = getData('rule-sections/the-order-of-combat');
  //   const rule06 = getData('rule-sections/movement-and-position');
  //   const rule07 = getData('rule-sections/actions-in-combat');
  //   const rule08 = getData('rule-sections/making-an-attack');
  //   const rule09 = getData('rule-sections/damage-and-healing');
  //   const rule10 = getData('rule-sections/ability-checks');
  //   const rule11 = getData('rule-sections/using-each-ability');
  //   const rule12 = getData('rule-sections/proficiency-bonus');
  //   const rule13 = getData('rule-sections/saving-throws');

  //   Promise.all([rule01, rule02, rule03, rule04, rule05, rule06, rule07, rule08, rule09, rule10, rule11, rule12, rule13])
  //   .then(responses => {
  //     if (updateRules) {
  //       responses.forEach(response => setRules(prevState => [...prevState, response]))
  //     }
  //   })
  //   .catch(error => setError(error.message))
  //   return () => updateRules = false;
  // }, [])



  // useEffect(() => {
  //   let updateAbilities = true;
  //   const ability01 = getData('ability-scores/cha');
  //   const ability02 = getData('ability-scores/con');
  //   const ability03 = getData('ability-scores/dex');
  //   const ability04 = getData('ability-scores/int');
  //   const ability05 = getData('ability-scores/str');
  //   const ability06 = getData('ability-scores/wis');

  //   Promise.all([ability01, ability02, ability03, ability04, ability05, ability06])
  //   .then(responses => {
  //     if (updateAbilities) {
  //       responses.forEach(response => setAbilities((prevState => [...prevState, response])))
  //     }
  //  })
  //   .catch(error => setError(error.message))

  //   return () => updateAbilities = false;
  // }, [])

  // useEffect(() => {
  //   let updateSkills = true;
  //   const skill01 = getData('skills/acrobatics');
  //   const skill02 = getData('skills/animal-handling');
  //   const skill03 = getData('skills/arcana');
  //   const skill04 = getData('skills/athletics');
  //   const skill05 = getData('skills/deception');
  //   const skill06 = getData('skills/history');
  //   const skill07 = getData('skills/insight');
  //   const skill08 = getData('skills/intimidation');
  //   const skill09 = getData('skills/investigation');
  //   const skill10 = getData('skills/medicine');
  //   const skill11 = getData('skills/nature');
  //   const skill12 = getData('skills/perception');
  //   const skill13 = getData('skills/performance');
  //   const skill14 = getData('skills/persuasion');
  //   const skill15 = getData('skills/religion');
  //   const skill16 = getData('skills/sleight-of-hand');
  //   const skill17 = getData('skills/stealth');
  //   const skill18 = getData('skills/survival');

  //   Promise.all([skill01, skill02, skill03, skill04, skill05, skill06, skill07, skill08, skill09, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18])
  //   .then(responses => {
  //     if (updateSkills) {
  //       responses.forEach(response => setSkills(prevState => [...prevState, response]))
  //     }
  //   })
  //   .catch(error => setError(error.message))

  //   return () => updateSkills = false;
  // }, [])

  // useEffect(() => {
  //   let updateRaces = true;
  //   const race01 = getData('races/dragonborn');
  //   const race02 = getData('races/dwarf');
  //   const race03 = getData('races/elf');
  //   const race04 = getData('races/gnome');
  //   const race05 = getData('races/half-elf');
  //   const race06 = getData('races/half-orc');
  //   const race07 = getData('races/halfling');
  //   const race08 = getData('races/human');
  //   const race09 = getData('races/tiefling');

  //   Promise.all([race01, race02, race03, race04, race05, race06, race07, race08, race09])
  //   .then(responses => {
  //     if (updateRaces) {
  //       responses.forEach(response => setRaces(prevState => [...prevState, response]))
  //     }
  //   })      
  //   .catch(error => setError(error.message))

  //   return () => updateRaces = false;
  // }, [])

  // useEffect(() => {
  //   let updateClasses = true;
  //   const charClass01 = getData('classes/barbarian');
  //   const charClass02 = getData('classes/bard');
  //   const charClass03 = getData('classes/cleric');
  //   const charClass04 = getData('classes/druid');
  //   const charClass05 = getData('classes/fighter');
  //   const charClass06 = getData('classes/monk');
  //   const charClass07 = getData('classes/paladin');
  //   const charClass08 = getData('classes/ranger');
  //   const charClass09 = getData('classes/rogue');
  //   const charClass10 = getData('classes/sorcerer');
  //   const charClass11 = getData('classes/warlock');
  //   const charClass12 = getData('classes/wizard');

  //   Promise.all([charClass01, charClass02, charClass03, charClass04, charClass05, charClass06, charClass07, charClass08, charClass09, charClass10, charClass11, charClass12])
  //   .then(responses => {
  //     if (updateClasses) {
  //       responses.forEach(response => setClasses(prevState => [...prevState, response]))
  //     }
  //   })
  //   .catch(error => setError(error.message))

  //   return () => updateClasses = false;
  // }, [])

  // const updateRule = e => {
  //   setRule(rules.find(rule => rule.index === e.target.id))
  // }

  // const updateAbility = e => {
  //   setAbility(abilities.find(ability => ability.index === e.target.id))
  // }

  // const updateSkill = e => {
  //   setSkill(skills.find(skill => skill.index === e.target.id))
  // }

  // const updateRace = e => {
  //   setRace(() => races.find(race => race.index === e.target.id))
  // }
  
  // const updateClass = e => {
  //   setCharClass(() => classes.find(c => c.index === e.target.id))
  // }

  const getRulesLinks = (category) => {
    const rulesNames = {
      spellcasting: ['What is a Spell', 'Casting a Spell'],
      adventuring: ['Time', 'Resting'],
      combat: ['The Order of Combat', 'Movement and Position', 'Actions in Combat', 'Making an Attack', 'Damage and Healing'], 
      'using ability scores': ['Ability Checks', 'Using Each Ability', 'Proficiency Bonus', 'Saving Throws']
    }
    
    return rulesNames[category].map(name => {
      const index = name.toLowerCase().split(' ').join('-');
      return <NavLink key={`${index}`} to={`/gameplay-basics/${index}`} id={`${index}`} className='main__link'>{`${name}`}</NavLink>
    })
  }

  // const getAbilitiesLinks = () => {
  //   const abilitiesNames = ['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Strength', 'Wisdom'];
  //   const abilitiesLinks = abilitiesNames.map(name => {
  //     const index = name.toLowerCase();
  //     const id = index.slice(0, 3)
  //     return <NavLink key={`${id}`} to={`/abilities/${index}`} className='main__link' onClick={e => updateAbility(e)} id={`${id}`}>{`${name}`}</NavLink>
  //   })
  //   return abilitiesLinks;
  // }

  // const getSkillsLinks = () => {
  //   const skillsNames = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'];
  //   const skillsLinks = skillsNames.map(name => {
  //     const index = name.toLowerCase().split(' ').join('-')
  //     return <NavLink key={`${index}`} to={`/skills/${index}`} className='main__link' onClick={e => updateSkill(e)} id={`${index}`}>{`${name}`}</NavLink>
  //   })
  //   return skillsLinks;
  // }

  // const getRacesLinks = () => {
  //   const racesNames = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling'];
  //   const racesLinks = racesNames.map(name => {
  //     const index = name.toLowerCase();
  //     return <NavLink key={`${index}`} to={`/races/${index}`} className='main__link' onClick={e => updateRace(e)} id={`${index}`}>{`${name}`}</NavLink>
  //   })
  //   return racesLinks;
  // }
  
  // const getClassesLinks = () => {
  //   const classesNames = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
  //   const classesLinks = classesNames.map(name => {
  //     const index = name.toLowerCase();
  //     return <NavLink key={`${index}`} to={`/classes/${index}`} className='main__link' onClick={e => updateClass(e)} id={`${index}`}>{`${name}`}</NavLink>
  //   })
  //   return classesLinks;
  // }

  // const getAllLinks = () => {
  //   const a = getRulesLinks('spellcasting');
  //   const b = getRulesLinks('adventuring');
  //   const c = getRulesLinks('combat');
  //   const d = getRulesLinks('using ability scores');
  //   const e = getRacesLinks();
  //   const f = getClassesLinks();
  //   const g = getAbilitiesLinks();
  //   const h = getSkillsLinks();

  //   const allLinks = a.concat(b, c, d, e, f, g, h)
  //   const alphabetizedLinks = allLinks.sort((a, b) => a.key.localeCompare(b.key))
  //   return alphabetizedLinks;
  // }






  return (
    <div className='app'>
      <header className='app__header'>
        <h1>D&D: The Rookie's Roadmap</h1>
      </header>
      <section className='app__body'>
        <Nav />
        {error && <Navigate to='/error' />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/error' element={<Error />} />
          <Route path='/gameplay-basics' element={<Gameplay getRulesLinks={getRulesLinks} />} />
          {/* <Route path='/abilities-and-skills' element={<AbilitySkill getAbilitiesLinks={getAbilitiesLinks} getSkillsLinks={getSkillsLinks} />} />
          <Route path='/races-and-classes' element={<RaceClass getRacesLinks={getRacesLinks} getClassesLinks={getClassesLinks} />} />
          <Route path='/glossary' element={<Glossary getAllLinks={getAllLinks} />} />
          <Route path='/resources' element={<Resources />} /> */}
          <Route path='/gameplay-basics/:id' element={<Page />} />
          {/* <Route path='/abilities/:id' element={<Ability ability={ability} />} />
          <Route path='/skills/:id' element={<Skill abilities={abilities} skill={skill} />} />
          <Route path='/races/:id' element={<Race abilities={abilities} race={race} />} />
          <Route path='/classes/:id' element={<Class abilities={abilities} charClass={charClass}/>} /> */}
          <Route path='*'element={<Error />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
