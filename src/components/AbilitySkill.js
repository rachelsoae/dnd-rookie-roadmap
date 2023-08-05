import PropTypes from 'prop-types';

const AbilitySkill = ({ getAbilitiesLinks, getSkillsLinks }) => {  
  return (
    <main>
      <h2 className='main__heading'>Abilities & Skills</h2>
      <div className='main__divider'></div>
      <div className='main__content'>
        <section className='main__section'>
          <h3 className='main__subheading'>Abilities</h3>
          <div className='main__links'>
            {getAbilitiesLinks()}
          </div>
        </section>
        <section className='main__section'>
          <h3 className='main__subheading'>Skills</h3>
          <div className='main__links'>
            {getSkillsLinks()}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AbilitySkill;

AbilitySkill.propTypes = {
  getAbilitiesLinks: PropTypes.func.isRequired, 
  getSkillsLinks: PropTypes.func.isRequired
}