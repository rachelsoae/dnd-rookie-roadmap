import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AbilitySkill = ({ updateAbility, updateSkill }) => {  
  const abilitiesNames = ['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Strength', 'Wisdom'];
  const abilitiesLinks = abilitiesNames.forEach(name => {
    const index = name.toLowerCase();
    const id = index.slice(0, 3)
    return <NavLink to={`/abilities/${index}`} className='main__link' onClick={e => updateAbility(e)} id={`${id}`}>{`${name}`}</NavLink>
  })

  const skillsNames = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion'];

  const skillsLinks = skillsNames.forEach(name => {
    const index = name.toLowerCase();
    <NavLink to={`/skills/${index}`} className='main__link' onClick={e => updateSkill(e)} id={`${index}`}>{`${name}`}</NavLink>
  })
  
  return (
    <main>
      <h2 className='main__heading'>Abilities & Skills</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Abilities</h3>
          <div className='main__links'>
            {abilitiesLinks}
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Skills</h3>
          <div className='main__links'>
            {skillsLinks}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AbilitySkill;

AbilitySkill.propTypes = {
  updateAbility: PropTypes.func.isRequired, 
  updateSkill: PropTypes.func.isRequired
}