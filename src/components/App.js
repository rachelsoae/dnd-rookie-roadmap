import '../output.css';
import '../search.png';
import Form from './Form';
import Nav from './Nav';
import Home from './Home';
import Gameplay from './Gameplay';
import Rule from './Rule';
import AbilitySkill from './AbilitySkill';
import RaceClass from './RaceClass';
import { Routes, Route } from 'react-router-dom';

function App() {
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
          <Route path='/races-and-classes' element={<RaceClass />} />
          {/* <Route path='/abilities-and-skills/:id' element={<Rule />} />
          <Route path='/abilities-and-skills/ability/:id' element={<Rule />} /> */}
        </Routes>
      </section>
    </div>
  );
}

export default App;
