import { NavLink, useParams  } from 'react-router-dom';
import { abilities, classes } from '../mockData'

const Class = () => {
  // instead of useParams, access the "name" key of the incoming object for Skill and "full_name" for Ability Score - already capitalized
  const name = useParams().id;
  const selectedClass = classes.find(c => c.index === name);

  const savingThrows = selectedClass.saving_throws.map(savingThrow => {
    let fullAbility = abilities.find(ability => ability.index === savingThrow.index)
    return fullAbility.full_name
  })

  const abilityLinks =  savingThrows.map(savingThrow => {
    return <NavLink to={`/abilities/${savingThrow.toLowerCase()}`} className='main__related-text main__related-link'>{savingThrow}</NavLink>
  })

  const proficiencies = selectedClass.proficiencies.map(proficiency => proficiency.name)
  const filteredProficiencies = proficiencies.filter(proficiency => !proficiency.includes('Saving'))

  return (
    <main>
      <h2 className='main__heading'>{selectedClass.name}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <p className='main__related-text'>Related Links:</p>
        <NavLink to='/gameplay-basics/saving-throws' className='main__related-text main__related-link'>Saving Throws</NavLink>
        {abilityLinks}
      </div>
      <p>Skill Choices: {selectedClass.proficiency_choices[0].desc}</p>
      <p>Saving Throws: {savingThrows.join(', ')}</p>
      <p>Proficiencies: {filteredProficiencies.join(', ')}</p>
    </main>
  )
}

export default Class;