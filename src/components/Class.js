import PropTypes from 'prop-types';

const Class = ({ page }) => {
  const savingThrows = page.saving_throws.map(savingThrow => savingThrow.name)

  const proficiencies = page.proficiencies.map(proficiency => proficiency.name).filter(proficiency => !proficiency.includes('Saving'))

  return (
    <>
      <p>Skill Choices: {page.proficiency_choices[0].desc}</p>
      <p>Saving Throws: {savingThrows.join(', ')}</p>
      <p>Proficiencies: {proficiencies.join(', ')}</p>
    </>
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