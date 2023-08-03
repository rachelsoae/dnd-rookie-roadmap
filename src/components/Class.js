import { NavLink, useParams  } from 'react-router-dom';

const Class = () => {
  // instead of useParams, access the "name" key of the incoming object for Skill and "full_name" for Ability Score - already capitalized
  const classs = useParams().id

  return (
    <main>
      <h2 className='main__heading'>{classs}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <p className='main__related-text'>Related Links:</p>
        {/* keep hard-coded links */}
        <NavLink to='/gameplay-basics/saving-throws' className='main__related-text main__related-link'>Saving Throws</NavLink>
      </div>
      <p>
        {/* add links? or map and add to related links */}
        Proficiency Choices: {classs} (use description) - 
      </p>
      <p>
        {/* add links? or map and add to related links */}
        Saving Throws: {classs} saving throws
      </p>
    </main>
  )
}

export default Class;