import { NavLink, useParams  } from 'react-router-dom';
import { abilities, skills } from '../mockData'

const Skill = () => {
  // instead of useParams, access the "name" key of the incoming object for Skill and "full_name" for Ability Score - already capitalized
  const name = useParams().id;
  const skill = skills.find(skill => skill.index === name);
  const descriptions = skill.desc.map(desc => <p>{desc}</p>);
  const relatedAbility = abilities.find(ability => ability.index === skill.ability_score.index).full_name

  return (
    <main>
      <h2 className='main__heading'>{skill.name}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <p className='main__related-text'>Related:</p>
        <NavLink to={`/abilities/${relatedAbility.toLowerCase()}`} className='main__related-text main__related-link'>{relatedAbility}</NavLink>
      </div>
      {descriptions}
    </main>
  )
}

export default Skill;