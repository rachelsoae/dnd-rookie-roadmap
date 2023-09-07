import PropTypes from 'prop-types';

const Gameplay = ({ getLinks }) => { 
  return (
    <main>
      <h2 className='main__heading'>Gameplay Basics</h2>
      <div className='main__divider'></div>
      <div className='main__content'>
        <section className='main__section'>
          <h3 className='main__subheading'>Spellcasting</h3>
          <div className='main__links'>
            {getLinks('gameplay-basics', 'spellcasting')}
          </div>
        </section>
        <section className='main__section'>
          <h3 className='main__subheading'>Adventuring</h3>
          <div className='main__links'>
            {getLinks('gameplay-basics', 'adventuring')}
          </div>
        </section>
        <section className='main__section'>
          <h3 className='main__subheading'>Combat</h3>
          <div className='main__links'>
            {getLinks('gameplay-basics', 'combat')}
          </div>
        </section>
        <section className='main__section'>
          <h3 className='main__subheading'>Ability Scores</h3>
          <div className='main__links'>
            {getLinks('gameplay-basics', 'using ability scores')}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Gameplay;

Gameplay.propTypes = {
  getLinks: PropTypes.func.isRequired
}