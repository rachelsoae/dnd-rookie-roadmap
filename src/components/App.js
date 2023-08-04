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
  const [rules, setRules] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [skills, setSkills] = useState([]);
  const [races, setRaces] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    let updateRules = true;
    const rule01 = getData('rule-sections/what-is-a-spell');
    const rule02 = getData('rule-sections/casting-a-spell');
    const rule03 = getData('rule-sections/time');
    const rule04 = getData('rule-sections/resting');
    const rule05 = getData('rule-sections/the-order-of-combat');
    const rule06 = getData('rule-sections/movement-and-position');
    const rule07 = getData('rule-sections/actions-in-combat');
    const rule08 = getData('rule-sections/making-an-attack');
    const rule09 = getData('rule-sections/damage-and-healing');
    const rule10 = getData('rule-sections/ability-checks');
    const rule11 = getData('rule-sections/using-each-ability');
    const rule12 = getData('rule-sections/proficiency-bonus');
    const rule13 = getData('rule-sections/saving-throws');

    Promise.all([rule01, rule02, rule03, rule04, rule05, rule06, rule07, rule08, rule09, rule10, rule11, rule12, rule13])
    .then(responses => {
      if (updateRules) {
        responses.forEach(response => setRules(prevState => [...prevState, response]))
      }
    })
    .catch(error => alert(error))
    return () => updateRules = false;
  }, [])

  useEffect(() => {
    let updateAbilities = true;
    const ability01 = getData('ability-scores/cha');
    const ability02 = getData('ability-scores/con');
    const ability03 = getData('ability-scores/dex');
    const ability04 = getData('ability-scores/int');
    const ability05 = getData('ability-scores/str');
    const ability06 = getData('ability-scores/wis');

    Promise.all([ability01, ability02, ability03, ability04, ability05, ability06])
    .then(responses => {
      if (updateAbilities) {
        responses.forEach(response => setAbilities((prevState => [...prevState, response])))
      }
   })
    .catch(error => alert(error))

    return () => updateAbilities = false;
  }, [])

  useEffect(() => {
    let updateSkills = true;
    const skill01 = getData('skills/acrobatics');
    const skill02 = getData('skills/animal-handling');
    const skill03 = getData('skills/arcana');
    const skill04 = getData('skills/athletics');
    const skill05 = getData('skills/deception');
    const skill06 = getData('skills/history');
    const skill07 = getData('skills/insight');
    const skill08 = getData('skills/intimidation');
    const skill09 = getData('skills/investigation');
    const skill10 = getData('skills/medicine');
    const skill11 = getData('skills/nature');
    const skill12 = getData('skills/perception');
    const skill13 = getData('skills/performance');
    const skill14 = getData('skills/persuasion');
    const skill15 = getData('skills/religion');
    const skill16 = getData('skills/sleight-of-hand');
    const skill17 = getData('skills/stealth');
    const skill18 = getData('skills/survival');

    Promise.all([skill01, skill02, skill03, skill04, skill05, skill06, skill07, skill08, skill09, skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18])
    .then(responses => {
      if (updateSkills) {
        responses.forEach(response => setSkills(prevState => [...prevState, response]))
      }
    })
    .catch(error => alert(error))

    return () => updateSkills = false;
  }, [])

  useEffect(() => {
    let updateRaces = true;
    const race01 = getData('races/dragonborn');
    const race02 = getData('races/dwarf');
    const race03 = getData('races/elf');
    const race04 = getData('races/gnome');
    const race05 = getData('races/half-elf');
    const race06 = getData('races/half-orc');
    const race07 = getData('races/halfling');
    const race08 = getData('races/human');
    const race09 = getData('races/tiefling');

    Promise.all([race01, race02, race03, race04, race05, race06, race07, race08, race09])
    .then(responses => {
      if (updateRaces) {
        responses.forEach(response => setRaces(prevState => [...prevState, response]))
      }
    })      
    .catch(error => alert(error))

    return () => updateRaces = false;
  }, [])

  useEffect(() => {
    let updateClasses;
    const charClass01 = getData('classes/barbarian');
    const charClass02 = getData('classes/bard');
    const charClass03 = getData('classes/cleric');
    const charClass04 = getData('classes/druid');
    const charClass05 = getData('classes/fighter');
    const charClass06 = getData('classes/monk');
    const charClass07 = getData('classes/paladin');
    const charClass08 = getData('classes/ranger');
    const charClass09 = getData('classes/rogue');
    const charClass10 = getData('classes/sorcerer');
    const charClass11 = getData('classes/warlock');
    const charClass12 = getData('classes/wizard');

    Promise.all([charClass01, charClass02, charClass03, charClass04, charClass05, charClass06, charClass07, charClass08, charClass09, charClass10, charClass11, charClass12])
    .then(responses => {
      if (updateClasses) {
        responses.forEach(response => setClasses(prevState => [...prevState, response]))
      }
    })
    .catch(error => alert(error))

    return () => updateClasses = false;
  }, [])

  const [rule, setRule] = useState('');
  

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
          <Route path='/gameplay-basics' element={<Gameplay rules={rules} setRule={setRule} />} />
          <Route path='/gameplay-basics/:id' element={<Rule rule={rule} />} />
          <Route path='/abilities-and-skills' element={<AbilitySkill />} />
          <Route path='/abilities/:id' element={<Ability abilities={abilities} />} />
          <Route path='/skills/:id' element={<Skill skills={skills} />} />
          <Route path='/races-and-classes' element={<RaceClass />} />
          <Route path='/races/:id' element={<Race />} />
          <Route path='/classes/:id' element={<Class />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
