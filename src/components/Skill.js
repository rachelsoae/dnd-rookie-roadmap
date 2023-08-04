import { NavLink } from 'react-router-dom';

const Skill = ({abilities, skill, updateAbility}) => {
    setTimeout(console.log, 1000, ('skill', skill))
    const descriptions = skill.desc.map(desc => <p>{desc}</p>);
    const relatedAbility = abilities.find(ability => ability.index === skill.ability_score.index).full_name

  return (
    <main>
      <h2 className='main__heading'>{skill.name}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <span className='main__related-text'>Related:</span>
        <NavLink 
          to={`/abilities/${relatedAbility.toLowerCase()}`} 
          className='main__related-text main__related-link' 
          id={`${relatedAbility.toLowerCase()}`}
          onClick={e => updateAbility(e)}
        >{relatedAbility}</NavLink>
      </div>
      {descriptions}
    </main>
  )
}

export default Skill;