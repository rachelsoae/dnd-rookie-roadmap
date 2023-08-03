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
            <NavLink to='/abilities/charisma' className='main__link'>Charisma</NavLink>
            <NavLink to='/abilities/constitution' className='main__link'>Constitution</NavLink>
            <NavLink to='/abilities/dexterity' className='main__link'>Dexterity</NavLink>
            <NavLink to='/abilities/intelligence' className='main__link'>Intelligence</NavLink>
            <NavLink to='/abilities/strength' className='main__link'>Strength</NavLink>
            <NavLink to='/abilities/wisdom' className='main__link'>Wisdom</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Skills</h3>
          <div className='main__links'>
            <NavLink to='/skills/acrobatics' className='main__link'>Acrobatics</NavLink>
            <NavLink to='/skills/animal-handling' className='main__link'>Animal Handling</NavLink>
            <NavLink to='/skills/arcana' className='main__link'>Arcana</NavLink>
            <NavLink to='/skills/athletics' className='main__link'>Athletics</NavLink>
            <NavLink to='/skills/deception' className='main__link'>Deception</NavLink>
            <NavLink to='/skills/history' className='main__link'>History</NavLink>
            <NavLink to='/skills/insight' className='main__link'>Insight</NavLink>
            <NavLink to='/skills/intimidation' className='main__link'>Intimidation</NavLink>
            <NavLink to='/skills/investigation' className='main__link'>Investigation</NavLink>
            <NavLink to='/skills/medicine' className='main__link'>Medicine</NavLink>
            <NavLink to='/skills/nature' className='main__link'>Nature</NavLink>
            <NavLink to='/skills/perception' className='main__link'>Perception</NavLink>
            <NavLink to='/skills/performance' className='main__link'>Performance</NavLink>
            <NavLink to='/skills/persuasion' className='main__link'>Persuasion</NavLink>
            <NavLink to='/skills/religion' className='main__link'>Religion</NavLink>
            <NavLink to='/skills/sleight-of-hand' className='main__link'>Sleight of Hand</NavLink>
            <NavLink to='/skills/stealth' className='main__link'>Stealth</NavLink>
            <NavLink to='/skills/survival' className='main__link'>Survival</NavLink>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AbilitySkill;