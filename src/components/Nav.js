import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/' className='link current-tab'>Home</NavLink>
      <NavLink to='/gameplay-basics' className='link'>Gameplay Basics</NavLink>
      <NavLink to='/abilities-and-skills' className='link'>Abilities & Skills</NavLink>
      <NavLink to='/races-and-classes' className='link'>Races & Classes</NavLink>
      <NavLink className='link'>Glossary</NavLink>
      <NavLink className='link'>Resources</NavLink>
    </nav>
  )
}

export default Nav;