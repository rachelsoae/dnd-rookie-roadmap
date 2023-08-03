import { NavLink, useParams  } from 'react-router-dom';
import { abilities } from '../mockData'

const Ability = () => {
  // instead of useParams, access the "name" key of the incoming object for Skill and "full_name" for Ability Score - already capitalized
  const name = useParams().id;
  // name = 'charisma'
  const index = name.slice(0, 3)
  // index = 'cha'
  const ability = abilities.find(ability => ability.index === index);

  const descriptions = ability.desc.map(desc => <p>{desc}</p>);
  const relatedSkills = ability.skills.map(skill => <NavLink to={`/skills/${skill.index}`} className='main__related-text main__related-link'>{skill.name}</NavLink>)

  return (
    <main>
      <h2 className='main__heading'>{ability.full_name}</h2>
      <div className='main__divider'></div>
      {relatedSkills.length ?
      <div className='main__related-links'>
        <p className='main__related-text'>Related:</p>
        {relatedSkills}
      </div> : 
      <div className='main__related-links' style={{display: 'none'}} />
      }
      {descriptions}
    </main>
  )
}

export default Ability;