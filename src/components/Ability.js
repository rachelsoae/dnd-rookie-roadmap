import { NavLink, useParams  } from 'react-router-dom';
import { abilities } from '../mockData'

const Ability = ({ability}) => {
  const descriptions = ability.desc.map(desc => <p>{desc}</p>);
  const relatedSkills = ability.skills.map(skill => <NavLink to={`/skills/${skill.index}`} className='main__related-text main__related-link'>{skill.name}</NavLink>)

  return (
    <main>
      <h2 className='main__heading'>{ability.full_name} ({ability.name})</h2>
      <div className='main__divider'></div>
      {relatedSkills.length ?
      <div className='main__related-links'>
        <span className='main__related-text'>Related:</span>
        {relatedSkills}
      </div> : 
      <div className='main__related-links' style={{display: 'none'}} />
      }
      {descriptions}
    </main>
  )
}

export default Ability;