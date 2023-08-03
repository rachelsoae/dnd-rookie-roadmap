import '../output.css';
import '../search.png';
import Nav from './Nav';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <h1>D&D: The Rookie's Roadmap</h1>
        <form className='search-bar'>
          <label htmlFor='search'>
            <input
              type='text'
              name='search'
              placeholder='search'
            />
          </label>
          <img
            src='../search.png'
          />
        </form>
      </header>
      <section className='app__body'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
