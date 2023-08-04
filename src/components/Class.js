const Class = ({abilities, charClass}) => {
  const savingThrows = charClass.saving_throws.map(savingThrow => {
    let fullAbility = abilities.find(ability => ability.index === savingThrow.index)
    return fullAbility.full_name
  })

  const proficiencies = charClass.proficiencies.map(proficiency => proficiency.name).filter(proficiency => !proficiency.includes('Saving'))

  return (
    <main>
      <h2 className='main__heading'>{charClass.name}</h2>
      <div className='main__divider'></div>
      <p>Skill Choices: {charClass.proficiency_choices[0].desc}</p>
      <p>Saving Throws: {savingThrows.join(', ')}</p>
      <p>Proficiencies: {proficiencies.join(', ')}</p>
    </main>
  )
}

export default Class;