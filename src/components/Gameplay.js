import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Gameplay = ({ updateRule}) => { 
  const rulesNames = {
    spellcasting: ['What is a spell', 'Casting a spell'],
    adventuring: ['Time', 'Resting'],
    combat: ['The Order of Combat', 'Movement & Position', 'Actions in Combat', 'Making an Attack', 'Damage and Healing'], 
    'using ability scores': ['Ability Checks', 'Using Each Ability', 'Proficiency Bonus', 'Saving Throws']
  }
  
  const getRulesLinks = (category) => {
    return rulesNames[category].map(name => {
      const index = name.toLowerCase().split(' ').join('-');
      return <NavLink key={`${index}`} to={`/gameplay-basics/${index}`} id={`${index}`} className='main__link' onClick={(e) => updateRule(e)}>{`${name}`}</NavLink>
    })
  }

  return (
    <main>
      <h2 className='main__heading'>Gameplay Basics</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Spellcasting</h3>
          <div className='main__links'>
            {getRulesLinks('spellcasting')}
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Adventuring</h3>
          <div className='main__links'>
            {getRulesLinks('adventuring')}
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Combat</h3>
          <div className='main__links'>
            {getRulesLinks('combat')}
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Using Ability Scores</h3>
          <div className='main__links'>
            {getRulesLinks('using ability scores')}
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