import PropTypes from 'prop-types';

const RaceClass = ({getRacesLinks, getClassesLinks }) => {  
  return (
    <main>
      <h2 className='main__heading'>Races & Classes</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Races</h3>
          <div className='main__links'>
            {getRacesLinks()}
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Classes</h3>
          <div className='main__links'>
            {getClassesLinks()}
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