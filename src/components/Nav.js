import { NavLink } from 'react-router-dom';
import '../styles/output.css'

const Nav = () => {
  return (
    <nav>
      <div className='nav__container'>
        <NavLink to='/' className='nav__link fake-class'>Home</NavLink>
        <NavLink to='/gameplay-basics' className='nav__link'>Gameplay Basics</NavLink>
        <NavLink to='/abilities-and-skills' className='nav__link'>Abilities & Skills</NavLink>
        <NavLink to='/races-and-classes' className='nav__link'>Races & Classes</NavLink>
        <NavLink to='/glossary' className='nav__link'>Glossary & Search</NavLink>
        <NavLink to='/resources' className='nav__link'>Resources</NavLink>
      </div>
    </nav>
  )
}

export default Nav;