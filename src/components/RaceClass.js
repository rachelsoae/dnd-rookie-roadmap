import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const RaceClass = ({ updateRace, updateClass }) => {
  const racesNames = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human', 'Tiefling'];
  const racesLinks = racesNames.forEach(name => {
    const index = name.toLowerCase();
    return <NavLink to={`/races/${index}`} className='main__link' onClick={e => updateRace(e)} id={`${index}`}>{`${name}`}</NavLink>
  })

  const classesNames = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
  const classesLinks = classesNames.forEach(name => {
    const index = name.toLowerCase();
    return <NavLink to={`/classes/${index}`} className='main__link' onClick={e => updateClass(e)} id={`${index}`}>{`${name}`}</NavLink>
  })
  
  return (
    <main>
      <h2 className='main__heading'>Races & Classes</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Races</h3>
          <div className='main__links'>
            {racesLinks}
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Classes</h3>
          <div className='main__links'>
            {classesLinks}
          </div>
        </section>
      </div>
    </main>
  )
}

export default RaceClass;

RaceClass.propTypes = {
  updateRace: PropTypes.func.isRequired, 
  updateClass: PropTypes.func.isRequired
}