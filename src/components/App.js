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
// import Error from './Error';
import Page from './Page';
import { getData } from '../apiCalls';
import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

const App = () => {
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

  const getLinks = (directory, category = null) => {
    const list = category ? NAMES['gameplay-basics'][category] : NAMES[directory];
    return list.map(name => {
      const index = name.toLowerCase().split(' ').join('-');
      return <NavLink key={`${index}`} to={`/${directory}/${index}`} className='main__link'>{`${name}`}</NavLink>
    })
  }

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

  const getAllLinks = () => {
    const allLinks = []
    const addLinks = (directory, category = null) => {
      const links = getLinks(directory, category)
      links.forEach(link => allLinks.push(link))
    }
    Object.keys(NAMES).forEach(name => {
      if (name === 'gameplay-basics') {
        Object.keys(NAMES[name]).forEach(key => addLinks(name, key))
      } else {
        addLinks(name)
      }     
    })
    const alphabetizedLinks = allLinks.sort((a, b) => a.key.localeCompare(b.key))
    return alphabetizedLinks;
  }


  return (
    <div className='app'>
      <header className='app__header'>
        <h1>D&D: The Rookie's Roadmap</h1>
      </header>
      <section className='app__body'>
        <Nav />
        {/* {error && <Navigate to='/error' />} */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/error' element={<Error />} /> */}
          <Route path='/gameplay-basics' element={<Gameplay getLinks={getLinks} />} />
          <Route path='/abilities-and-skills' element={<AbilitySkill getLinks={getLinks} />} />
          <Route path='/races-and-classes' element={<RaceClass getLinks={getLinks} />} />
          <Route path='/glossary' element={<Glossary getAllLinks={getAllLinks} />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/gameplay-basics/:id' element={<Page />} />
          <Route path='/abilities/:id' element={<Page />} />
          <Route path='/skills/:id' element={<Page />} />
          <Route path='/races/:id' element={<Page />} />
          <Route path='/classes/:id' element={<Page />} />
          {/* <Route path='*'element={<Error />} /> */}
        </Routes>
      </section>
    </div>
  );
}

export default App;
