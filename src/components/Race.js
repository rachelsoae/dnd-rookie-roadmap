import { NavLink, useParams  } from 'react-router-dom';

const Race = () => {
  // instead of useParams, access the "name" key of the incoming object for Skill and "full_name" for Ability Score - already capitalized
  const race = useParams().id

  return (
    <main>
      <h2 className='main__heading'>{race}</h2>
      <div className='main__divider'></div>
      {/* keep links? */}
      <div className='main__related-links'>
        <p className='main__related-text'>Related Links:</p>
        {/* map over related skills and abilities here, in place of hard-coded link */}
        <NavLink to='/abilities-and-skills/dexterity' className='main__related-text main__related-link'>Dexterity</NavLink>
      </div>
      {/* map over "desc" key and create <p>s for each index  */}
      <p>
        {/* age and alignment should each be a paragraph */}
        {race} age
      </p>
      <p>
        {/* age and alignment should each be a paragraph */}
        {race} alignment paragraph
      </p>
      {/* try to make these links! */}
      <p>Ability Bonuses: {race} ability bonus (skip the amount of the bonus)</p>
      <p>Starting Skills: {race} starting proficiencies (skills)</p>
    </main>
  )
}

export default Race;