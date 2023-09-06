import PropTypes from 'prop-types';

const RaceClass = ({ getLinks }) => {  
  return (
    <main>
      <h2 className='main__heading'>Races & Classes</h2>
      <div className='main__divider'></div>
      <div className='main__content'>
        <section className='main__section'>
          <h3 className='main__subheading'>Races</h3>
          <div className='main__links'>
            {getLinks('races')}
          </div>
        </section>
        <section className='main__section'>
          <h3 className='main__subheading'>Classes</h3>
          <div className='main__links'>
            {getLinks('classes')}
          </div>
        </section>
      </div>
    </main>
  )
}

export default RaceClass;

RaceClass.propTypes = {
  getRacesLinks: PropTypes.func.isRequired, 
  getClassesLinks: PropTypes.func.isRequired
}