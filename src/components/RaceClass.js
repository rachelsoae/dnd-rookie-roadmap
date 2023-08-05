import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const RaceClass = ({ updateRace, updateClass }) => {
  return (
    <main>
      <h2 className='main__heading'>Races & Classes</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Races</h3>
          <div className='main__links'>
            <NavLink to='/races/dragonborn' className='main__link' onClick={e => updateRace(e)} id='dragonborn'>Dragonborn</NavLink>
            <NavLink to='/races/dwarf' className='main__link' onClick={e => updateRace(e)} id='dwarf'>Dwarf</NavLink>
            <NavLink to='/races/elf' className='main__link' onClick={e => updateRace(e)} id='elf'>Elf</NavLink>
            <NavLink to='/races/gnome' className='main__link' onClick={e => updateRace(e)} id='gnome'>Gnome</NavLink>
            <NavLink to='/races/half-elf' className='main__link' onClick={e => updateRace(e)} id='half-elf'>Half-Elf</NavLink>
            <NavLink to='/races/half-orc' className='main__link' onClick={e => updateRace(e)} id='half-orc'>Half-Orc</NavLink>
            <NavLink to='/races/halfling' className='main__link' onClick={e => updateRace(e)} id='halfling'>Halfling</NavLink>
            <NavLink to='/races/human' className='main__link' onClick={e => updateRace(e)} id='human'>Human</NavLink>
            <NavLink to='/races/tiefling' className='main__link' onClick={e => updateRace(e)} id='tiefling'>Tiefling</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Classes</h3>
          <div className='main__links classes'>
            <NavLink to='/classes/barbarian' className='main__link' onClick={e => updateClass(e)} id='barbarian'>Barbarian</NavLink>
            <NavLink to='/classes/bard' className='main__link' onClick={e => updateClass(e)} id='bard'>Bard</NavLink>
            <NavLink to='/classes/cleric' className='main__link' onClick={e => updateClass(e)} id='cleric'>Cleric</NavLink>
            <NavLink to='/classes/druid' className='main__link' onClick={e => updateClass(e)} id='druid'>Druid</NavLink>
            <NavLink to='/classes/fighter' className='main__link' onClick={e => updateClass(e)} id='fighter'>Fighter</NavLink>
            <NavLink to='/classes/monk' className='main__link' onClick={e => updateClass(e)} id='monk'>Monk</NavLink>
            <NavLink to='/classes/paladin' className='main__link' onClick={e => updateClass(e)} id='paladin'>Paladin</NavLink>
            <NavLink to='/classes/ranger' className='main__link' onClick={e => updateClass(e)} id='ranger'>Ranger</NavLink>
            <NavLink to='/classes/rogue' className='main__link' onClick={e => updateClass(e)} id='rogue'>Rogue</NavLink>
            <NavLink to='/classes/sorcerer' className='main__link' onClick={e => updateClass(e)} id='sorcerer'>Sorcerer</NavLink>
            <NavLink to='/classes/warlock' className='main__link' onClick={e => updateClass(e)} id='warlock'>Warlock</NavLink>
            <NavLink to='/classes/wizard' className='main__link' onClick={e => updateClass(e)} id='wizard'>Wizard</NavLink>
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