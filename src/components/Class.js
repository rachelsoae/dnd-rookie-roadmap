import PropTypes from 'prop-types';

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

Class.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object),
  charClass: PropTypes.shape({
    "index": PropTypes.string,
    "name": PropTypes.string,
    "hit_die": PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    "proficiency_choices": PropTypes.arrayOf(PropTypes.object),
    "proficiencies": PropTypes.arrayOf(PropTypes.object),
    "saving_throws": PropTypes.arrayOf(PropTypes.object),
    "starting_equipment": PropTypes.arrayOf(PropTypes.object),
    "starting_equipment_options": PropTypes.arrayOf(PropTypes.object),
    "class_levels": PropTypes.string,
    "multi_classing": PropTypes.object,
    "subclasses": PropTypes.arrayOf(PropTypes.object),
    "url": PropTypes.string
  })
}