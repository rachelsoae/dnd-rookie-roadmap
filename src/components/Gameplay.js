import { NavLink } from 'react-router-dom';

const Gameplay = () => {
  return (
    <main>
      <h2 className='main__heading'>Gameplay Basics</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Spellcasting</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/what-is-a-spell' className='main__link'>What is a spell?</NavLink>
            <NavLink to='/gameplay-basics/casting-a-spell' className='main__link'>Casting a spell</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Adventuring</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/time' className='main__link'>Time</NavLink>
            <NavLink to='/gameplay-basics/resting' className='main__link'>Resting</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Combat</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/the-order-of-combat' className='main__link'>The Order of Combat</NavLink>
            <NavLink to='/gameplay-basics/movement-and-position' className='main__link'>Movement & Position</NavLink>
            <NavLink to='/gameplay-basics/actions-in-combat' className='main__link'>Actions in Combat</NavLink>
            <NavLink to='/gameplay-basics/making-an-attack' className='main__link'>Making an Attack</NavLink>
            <NavLink to='/gameplay-basics/damage-and-healing' className='main__link'>Damage and Healing</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Using Ability Scores</h3>
          <div className='main__links'>
            <NavLink to='/gameplay-basics/ability-checks' className='main__link'>Ability Checks</NavLink>
            <NavLink to='/gameplay-basics/using-each-ability' className='main__link'>Using Each Ability</NavLink>
            <NavLink to='/gameplay-basics/proficiency-bonus' className='main__link'>Proficiency Bonus</NavLink>
            <NavLink to='/gameplay-basics/saving-throws' className='main__link'>Saving Throws</NavLink>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Gameplay;