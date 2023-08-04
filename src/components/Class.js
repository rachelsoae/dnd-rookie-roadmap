import { NavLink } from 'react-router-dom';

const Class = ({abilities, charClass, updateAbility}) => {
  const savingThrows = charClass.saving_throws.map(savingThrow => {
    let fullAbility = abilities.find(ability => ability.index === savingThrow.index)
    return fullAbility.full_name
  })

  const abilityLinks = savingThrows.map(savingThrow => {
    return (
      <NavLink 
        to={`/abilities/${savingThrow.toLowerCase()}`} 
        className='main__related-text main__related-link'
        id={`${savingThrow.toLowerCase()}`}
        onClick={e => updateAbility(e)}
      >{savingThrow}</NavLink>)
  })

  const proficiencies = charClass.proficiencies.map(proficiency => proficiency.name).filter(proficiency => !proficiency.includes('Saving'))

  return (
    <main>
      <h2 className='main__heading'>{charClass.name}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <p className='main__related-text'>Related Links:</p>
        <NavLink to='/gameplay-basics/saving-throws' className='main__related-text main__related-link'>Saving Throws</NavLink>
        {abilityLinks}
      </div>
      <p>Skill Choices: {charClass.proficiency_choices[0].desc}</p>
      <p>Saving Throws: {savingThrows.join(', ')}</p>
      <p>Proficiencies: {proficiencies.join(', ')}</p>
    </main>
  )
}

export default Class;