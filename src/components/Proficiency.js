import { NavLink, useParams  } from 'react-router-dom';

const Proficiency = () => {
  // instead of useParams, access the "name" key of the incoming object - already capitalized
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
      <p>
        {/* access "desc" key */}
        Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.
      </p>
    </main>
  )
}

export default Proficiency;