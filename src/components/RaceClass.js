import { NavLink } from 'react-router-dom';

const RaceClass = () => {
  return (
    <main>
      <h2 className='main__heading'>Races & Classes</h2>
      <div className='main__divider'></div>
      <div className='main__rules'>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Races</h3>
          <div className='main__links'>
            <NavLink to='/races-and-classes/dragonborn' className='main__link'>Dragonborn</NavLink>
            <NavLink to='/races-and-classes/dwarf' className='main__link'>Dwarf</NavLink>
            <NavLink to='/races-and-classes/elf' className='main__link'>Elf</NavLink>
            <NavLink to='/races-and-classes/gnome' className='main__link'>Gnome</NavLink>
            <NavLink to='/races-and-classes/half-elf' className='main__link'>Half-Elf</NavLink>
            <NavLink to='/races-and-classes/half-orc' className='main__link'>Half-Orc</NavLink>
            <NavLink to='/races-and-classes/halfling' className='main__link'>Halfling</NavLink>
            <NavLink to='/races-and-classes/human' className='main__link'>Human</NavLink>
            <NavLink to='/races-and-classes/tiefling' className='main__link'>Tiefling</NavLink>
          </div>
        </section>
        <section className='main__rule-section'>
          <h3 className='main__subheading'>Classes</h3>
          <div className='main__links'>
            <NavLink to='/races-and-classes/barbarian' className='main__link'>Barbarian</NavLink>
            <NavLink to='/races-and-classes/bard' className='main__link'>Bard</NavLink>
            <NavLink to='/races-and-classes/cleric' className='main__link'>Cleric</NavLink>
            <NavLink to='/races-and-classes/druid' className='main__link'>Druid</NavLink>
            <NavLink to='/races-and-classes/fighter' className='main__link'>Fighter</NavLink>
            <NavLink to='/races-and-classes/monk' className='main__link'>Monk</NavLink>
            <NavLink to='/races-and-classes/paladin' className='main__link'>Paladin</NavLink>
            <NavLink to='/races-and-classes/ranger' className='main__link'>Ranger</NavLink>
            <NavLink to='/races-and-classes/rogue' className='main__link'>Rogue</NavLink>
            <NavLink to='/races-and-classes/sorcerer' className='main__link'>Sorcerer</NavLink>
            <NavLink to='/races-and-classes/warlock' className='main__link'>Warlock</NavLink>
            <NavLink to='/races-and-classes/wizard' className='main__link'>Wizard</NavLink>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RaceClass;