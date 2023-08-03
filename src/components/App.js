import '../output.css';
import '../search.png';
import Nav from './Nav';
import Home from './Home';
import Gameplay from './Gameplay';
import Rule from './Rule';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <h1>D&D: The Rookie's Roadmap</h1>
      </header>
      <section className='app__body'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gameplay-basics' element={<Gameplay />} />
          <Route path='/gameplay-basics/:id' element={<Rule />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
