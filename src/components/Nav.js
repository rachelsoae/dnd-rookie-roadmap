import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink className='link current-tab'>Home</NavLink>
      <NavLink className='link'>Gameplay Basics</NavLink>
      <NavLink className='link'>Abilities & Skills</NavLink>
      <NavLink className='link'>Races & Classes</NavLink>
      <NavLink className='link'>Glossary</NavLink>
      <NavLink className='link'>Resources</NavLink>
    </nav>
  )
}

export default Nav;