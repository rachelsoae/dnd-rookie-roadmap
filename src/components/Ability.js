import { NavLink } from 'react-router-dom';

const Ability = ({ability, updateSkill}) => {
  setTimeout(console.log, 1000, ('ability', ability))
  
  const descriptions = ability.desc.map(desc => <p>{desc}</p>);
  const relatedSkills = ability.skills.map(skill => {
   return (<NavLink 
      to={`/skills/${skill.index}`} 
      className='main__related-text main__related-link' 
      id={`${skill.index}`} 
      onClick={e => updateSkill(e)}
    >{skill.name}</NavLink>)
  })

  return (
    <main>
      <h2 className='main__heading'>{ability.full_name} ({ability.name})</h2>
      <div className='main__divider'></div>
      {relatedSkills.length > 0 ?
      <div className='main__related-links'>
        <span className='main__related-text'>Related:</span>
        {relatedSkills}</div> : <div className='main__related-links' style={{display: 'none'}} />}
      {descriptions}
    </main>
  )  
}

export default Ability;