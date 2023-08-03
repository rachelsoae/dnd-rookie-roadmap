import '../output.css';
import '../search.png';
import Form from './Form';
import Nav from './Nav';
import Home from './Home';
import Gameplay from './Gameplay';
import Rule from './Rule';
import AbilitySkill from './AbilitySkill';
import Proficiency from './Proficiency';
import RaceClass from './RaceClass';
import Race from './Race';
import Class from './Class';
import { Routes, Route } from 'react-router-dom';

function App() {
  // fetch dynamically by interpolating id into path; maybe fetch all data at once and then create arrays of data - kind of like a local 
  // Gameplay Basics: `https://www.dnd5eapi.co/api/rule-sections/${id}`
  // Ability Scores 

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
          <Route path='/gameplay-basics' element={<Gameplay />} />
          <Route path='/gameplay-basics/:id' element={<Rule />} />
          <Route path='/abilities-and-skills' element={<AbilitySkill />} />
          <Route path='/abilities-and-skills/:id' element={<Proficiency />} />
          <Route path='/races-and-classes' element={<RaceClass />} />
          <Route path='/races/:id' element={<Race />} />
          <Route path='/classes/:id' element={<Class />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
