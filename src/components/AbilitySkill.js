import PropTypes from 'prop-types';

const AbilitySkill = ({ getLinks }) => {  

  return (
    <main>
      <h2 className='main__heading'>Abilities & Skills</h2>
      <div className='main__divider'></div>
      <div className='main__content'>
        <section className='main__section'>
          <h3 className='main__subheading'>Abilities</h3>
          <div className='main__links'>
            {getLinks('abilities')}
          </div>
        </section>
        <section className='main__section'>
          <h3 className='main__subheading'>Skills</h3>
          <div className='main__links'>
            {getLinks('skills')}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AbilitySkill;

AbilitySkill.propTypes = {
  getLinks: PropTypes.func.isRequired, 
}