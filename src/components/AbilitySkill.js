import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AbilitySkill = ({ updateAbility, updateSkill }) => {  
  return (
    <main>
      <h2 className='main__heading'>Abilities & Skills</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Abilities</h3>
          <div className='main__links'>
            <NavLink to='/abilities/charisma' className='main__link' onClick={e => updateAbility(e)} id='cha'>Charisma</NavLink>
            <NavLink to='/abilities/constitution' className='main__link' onClick={e => updateAbility(e)} id='con'>Constitution</NavLink>
            <NavLink to='/abilities/dexterity' className='main__link' onClick={e => updateAbility(e)} id='dex'>Dexterity</NavLink>
            <NavLink to='/abilities/intelligence' className='main__link' onClick={e => updateAbility(e)} id='int'>Intelligence</NavLink>
            <NavLink to='/abilities/strength' className='main__link' onClick={e => updateAbility(e)} id='str'>Strength</NavLink>
            <NavLink to='/abilities/wisdom' className='main__link' onClick={e => updateAbility(e)} id='wis'>Wisdom</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Skills</h3>
          <div className='main__links'>
            <NavLink to='/skills/acrobatics' className='main__link' onClick={e => updateSkill(e)} id='acrobatics'>Acrobatics</NavLink>
            <NavLink to='/skills/animal-handling' className='main__link' onClick={e => updateSkill(e)} id='animal-handling'>Animal Handling</NavLink>
            <NavLink to='/skills/arcana' className='main__link' onClick={e => updateSkill(e)} id='arcana'>Arcana</NavLink>
            <NavLink to='/skills/athletics' className='main__link' onClick={e => updateSkill(e)} id='athletics'>Athletics</NavLink>
            <NavLink to='/skills/deception' className='main__link' onClick={e => updateSkill(e)} id='deception'>Deception</NavLink>
            <NavLink to='/skills/history' className='main__link' onClick={e => updateSkill(e)} id='history'>History</NavLink>
            <NavLink to='/skills/insight' className='main__link' onClick={e => updateSkill(e)} id='insight'>Insight</NavLink>
            <NavLink to='/skills/intimidation' className='main__link' onClick={e => updateSkill(e)} id='intimidation'>Intimidation</NavLink>
            <NavLink to='/skills/investigation' className='main__link' onClick={e => updateSkill(e)} id='investigation'>Investigation</NavLink>
            <NavLink to='/skills/medicine' className='main__link' onClick={e => updateSkill(e)} id='medicine'>Medicine</NavLink>
            <NavLink to='/skills/nature' className='main__link' onClick={e => updateSkill(e)} id='nature'>Nature</NavLink>
            <NavLink to='/skills/perception' className='main__link' onClick={e => updateSkill(e)} id='perception'>Perception</NavLink>
            <NavLink to='/skills/performance' className='main__link' onClick={e => updateSkill(e)} id='performance'>Performance</NavLink>
            <NavLink to='/skills/persuasion' className='main__link' onClick={e => updateSkill(e)} id='persuasion'>Persuasion</NavLink>
            <NavLink to='/skills/religion' className='main__link' onClick={e => updateSkill(e)} id='religion'>Religion</NavLink>
            <NavLink to='/skills/sleight-of-hand' className='main__link' onClick={e => updateSkill(e)} id='sleight-of-hand'>Sleight of Hand</NavLink>
            <NavLink to='/skills/stealth' className='main__link' onClick={e => updateSkill(e)} id='stealth'>Stealth</NavLink>
            <NavLink to='/skills/survival' className='main__link' onClick={e => updateSkill(e)} id='survival'>Survival</NavLink>
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