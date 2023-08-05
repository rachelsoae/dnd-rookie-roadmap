import PropTypes from 'prop-types';

const Gameplay = ({ getRulesLinks }) => { 
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
  getRulesLinks: PropTypes.func.isRequired
}