import '../output.css';
import '../search.png';
import Form from './Form';
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
import { getData } from '../apiCalls';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Gameplay Basics: `rule-sections/${id}`
  // Ability Scores: `ability-scores/${id}`
  // Skills: `skills/${id}`
  // Races: `races/${id}`
  // Classes `classes/${id}`

  const [rules, setRules] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [skills, setSkills] = useState([]);
  const [races, setRaces] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const rule01 = getData('rule-sections/what-is-a-spell')
    const rule02 = getData('rule-sections/casting-a-spell')
    const rule03 = getData('rule-sections/time')
    const rule04 = getData('rule-sections/resting')
    const rule05 = getData('rule-sections/the-order-of-combat')
    const rule06 = getData('rule-sections/movement-and-position')
    const rule07 = getData('rule-sections/actions-in-combat')
    const rule08 = getData('rule-sections/making-an-attack')
    const rule09 = getData('rule-sections/damage-and-healing')
    const rule10 = getData('rule-sections/ability-checks')
    const rule11 = getData('rule-sections/using-each-ability')
    const rule12 = getData('rule-sections/proficiency-bonus')
    const rule13 = getData('rule-sections/saving-throws')

    Promise.all([rule01, rule02, rule03, rule04, rule05, rule06, rule07, rule08, rule09, rule10, rule11, rule12, rule13])
    .then(responses => responses.forEach(response => {
      if (!rules.some(rule => rule === response)) {
        setRules(prevState => [...prevState, response])
      }
    }))
    .catch(error => alert(error))

    const rule01 = getData('rule-sections/what-is-a-spell')
    const rule02 = getData('rule-sections/casting-a-spell')
    const rule03 = getData('rule-sections/time')
    const rule04 = getData('rule-sections/resting')
    const rule05 = getData('rule-sections/the-order-of-combat')
    const rule06 = getData('rule-sections/movement-and-position')
    const rule07 = getData('rule-sections/actions-in-combat')
    const rule08 = getData('rule-sections/making-an-attack')
    const rule09 = getData('rule-sections/damage-and-healing')
    const rule10 = getData('rule-sections/ability-checks')
    const rule11 = getData('rule-sections/using-each-ability')
    const rule12 = getData('rule-sections/proficiency-bonus')
    const rule13 = getData('rule-sections/saving-throws')

    Promise.all([rule01, rule02, rule03, rule04, rule05, rule06, rule07, rule08, rule09, rule10, rule11, rule12, rule13])
    .then(responses => responses.forEach(response => {
      if (!rules.some(rule => rule === response)) {
        setRules(prevState => [...prevState, response])
      }
    }))
    .catch(error => alert(error))
  }, [])

  setTimeout(console.log(rules), 8000)

  return (
    <div className='app'>
      <header className='app__header'>
        <h1>D&D: The Rookie's Roadmap</h1>
        <Form />
      </header>
      <section className='app__body'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gameplay-basics' element={<Gameplay rules={rules} setRules={setRules} />} />
          <Route path='/gameplay-basics/:id' element={<Rule />} />
          <Route path='/abilities-and-skills' element={<AbilitySkill />} />
          <Route path='/abilities/:id' element={<Ability />} />
          <Route path='/skills/:id' element={<Skill />} />
          <Route path='/races-and-classes' element={<RaceClass />} />
          <Route path='/races/:id' element={<Race />} />
          <Route path='/classes/:id' element={<Class />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
