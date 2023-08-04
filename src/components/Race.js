import { NavLink } from 'react-router-dom';

const Race = ({abilities, race, updateAbilityOrSkill}) => {
  const relatedAbilities = race.ability_bonuses.map(currentAbility => {
    let fullAbility = abilities.find(ability => ability.index === currentAbility.ability_score.index)
    return fullAbility.full_name
  })

  const abilityLinks =  relatedAbilities.map(relatedAbility => {
    return (
      <NavLink 
        to={`/abilities/${relatedAbility.toLowerCase()}`} 
        className='main__related-text main__related-link'
        id={`${relatedAbility.toLowerCase()}`}
        onClick={e => updateAbilityOrSkill(e)}
      >{relatedAbility}</NavLink>)
  })

  return (
    <main>
      <h2 className='main__heading'>{race.name}</h2>
      <div className='main__divider'></div>
      <div className='main__related-links'>
        <span className='main__related-text'>Related:</span>
        {abilityLinks}
      </div>
      <p>{race.alignment}</p>
      <p>{race.age}</p>
      <p>Ability Bonuses: {relatedAbilities.join(', ')}</p>
    </main>
  )
}

export default Race;