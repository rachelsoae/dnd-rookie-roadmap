const Race = ({abilities, race}) => {
  const relatedAbilities = race.ability_bonuses.map(currentAbility => {
    let fullAbility = abilities.find(ability => ability.index === currentAbility.ability_score.index)
    return fullAbility.full_name
  })

  return (
    <main>
      <h2 className='main__heading'>{race.name}</h2>
      <div className='main__divider'></div>
      <p>{race.alignment}</p>
      <p>{race.age}</p>
      <p>Ability Bonuses: {relatedAbilities.join(', ')}</p>
    </main>
  )
}

export default Race;