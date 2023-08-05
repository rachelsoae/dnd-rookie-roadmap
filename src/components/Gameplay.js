import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Gameplay = ({ updateRule}) => { 
  return (
    <main>
      <h2 className='main__heading'>Gameplay Basics</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Spellcasting</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/what-is-a-spell' id='what-is-a-spell' className='main__link' onClick={(e) => updateRule(e)}>What is a spell?</NavLink>
            <NavLink to='/gameplay-basics/casting-a-spell' id='casting-a-spell' className='main__link' onClick={(e) => updateRule(e)}>Casting a spell</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Adventuring</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/time' id='time' className='main__link' onClick={(e) => updateRule(e)}>Time</NavLink>
            <NavLink to='/gameplay-basics/resting' id='resting' className='main__link' onClick={(e) => updateRule(e)}>Resting</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Combat</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/the-order-of-combat' id='the-order-of-combat' className='main__link' onClick={(e) => updateRule(e)}>The Order of Combat</NavLink>
            <NavLink to='/gameplay-basics/movement-and-position' id='movement-and-position' className='main__link' onClick={(e) => updateRule(e)}>Movement & Position</NavLink>
            <NavLink to='/gameplay-basics/actions-in-combat' id='actions-in-combat' className='main__link' onClick={(e) => updateRule(e)}>Actions in Combat</NavLink>
            <NavLink to='/gameplay-basics/making-an-attack' id='making-an-attack' className='main__link' onClick={(e) => updateRule(e)}>Making an Attack</NavLink>
            <NavLink to='/gameplay-basics/damage-and-healing' id='damage-and-healing' className='main__link' onClick={(e) => updateRule(e)}>Damage and Healing</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Using Ability Scores</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/ability-checks' id='ability-checks' className='main__link' onClick={(e) => updateRule(e)}>Ability Checks</NavLink>
            <NavLink to='/gameplay-basics/using-each-ability' id='using-each-ability' className='main__link' onClick={(e) => updateRule(e)}>Using Each Ability</NavLink>
            <NavLink to='/gameplay-basics/proficiency-bonus' id='proficiency-bonus' className='main__link' onClick={(e) => updateRule(e)}>Proficiency Bonus</NavLink>
            <NavLink to='/gameplay-basics/saving-throws' id='saving-throws' className='main__link' onClick={(e) => updateRule(e)}>Saving Throws</NavLink>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Gameplay;

Gameplay.propTypes = {
  updateRule: PropTypes.func.isRequired
}