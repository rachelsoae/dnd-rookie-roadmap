import { NavLink } from 'react-router-dom';

const AbilitySkill = () => {
  return (
    <main>
      <h2 className='main__heading'>Abilities & Skills</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Abilities</h3>
          <div className='main__links'>
            <NavLink to='/abilities-and-skills/charisma' className='main__link'>Charisma</NavLink>
            <NavLink to='/abilities-and-skills/constitution' className='main__link'>Constitution</NavLink>
            <NavLink to='/abilities-and-skills/dexterity' className='main__link'>Dexterity</NavLink>
            <NavLink to='/abilities-and-skills/intelligence' className='main__link'>Intelligence</NavLink>
            <NavLink to='/abilities-and-skills/strength' className='main__link'>Strength</NavLink>
            <NavLink to='/abilities-and-skills/wisdom' className='main__link'>Wisdom</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Skills</h3>
          <div className='main__links'>
            <NavLink to='/abilities-and-skills/acrobatics' className='main__link'>Acrobatics</NavLink>
            <NavLink to='/abilities-and-skills/animal-handling' className='main__link'>Animal Handling</NavLink>
            <NavLink to='/abilities-and-skills/arcana' className='main__link'>Arcana</NavLink>
            <NavLink to='/abilities-and-skills/athletics' className='main__link'>Athletics</NavLink>
            <NavLink to='/abilities-and-skills/deception' className='main__link'>Deception</NavLink>
            <NavLink to='/abilities-and-skills/history' className='main__link'>History</NavLink>
            <NavLink to='/abilities-and-skills/insight' className='main__link'>Insight</NavLink>
            <NavLink to='/abilities-and-skills/intimidation' className='main__link'>Intimidation</NavLink>
            <NavLink to='/abilities-and-skills/investigation' className='main__link'>Investigation</NavLink>
            <NavLink to='/abilities-and-skills/medicine' className='main__link'>Medicine</NavLink>
            <NavLink to='/abilities-and-skills/nature' className='main__link'>Nature</NavLink>
            <NavLink to='/abilities-and-skills/perception' className='main__link'>Perception</NavLink>
            <NavLink to='/abilities-and-skills/performance' className='main__link'>Performance</NavLink>
            <NavLink to='/abilities-and-skills/persuasion' className='main__link'>Persuasion</NavLink>
            <NavLink to='/abilities-and-skills/religion' className='main__link'>Religion</NavLink>
            <NavLink to='/abilities-and-skills/sleight-of-hand' className='main__link'>Sleight of Hand</NavLink>
            <NavLink to='/abilities-and-skills/stealth' className='main__link'>Stealth</NavLink>
            <NavLink to='/abilities-and-skills/survival' className='main__link'>Survival</NavLink>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AbilitySkill;