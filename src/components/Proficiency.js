import { NavLink, useParams  } from 'react-router-dom';

const Proficiency = () => {
  // instead of useParams, access the "name" key of the incoming object for Skill and "full_name" for Ability Score - already capitalized
  const proficiency = useParams().id

  return (
    <main>
      <h2 className='main__heading'>{proficiency}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <p className='main__related-text'>Related Links:</p>
        {/* map over related skills and abilities here, in place of hard-coded link */}
        <NavLink to='/abilities-and-skills/dexterity' className='main__related-text main__related-link'>Dexterity</NavLink>
      </div>
      {/* map over "desc" key and create <p>s for each index  */}
      <p>
        {proficiency} description
      </p>
    </main>
  )
}

export default Proficiency;