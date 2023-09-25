import PropTypes from 'prop-types';

const Race = ({page}) => {
  return (
    <>
      <p>{page.alignment}</p>
      <p>{page.age}</p>
    </>
  )
}

export default Race;

Race.propTypes = {
  page: PropTypes.shape({
    "index": PropTypes.string,
    "name": PropTypes.string,
    "speed": PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    "ability_bonuses": PropTypes.arrayOf(PropTypes.object),
    "ability_bonus_options": PropTypes.object,
    "alignment":PropTypes.string,
    "age": PropTypes.string,
    "size": PropTypes.string,
    "size_description": PropTypes.string,
    "starting_proficiencies": PropTypes.array,
    "starting_proficiency_options": PropTypes.object,
    "languages": PropTypes.arrayOf(PropTypes.object),
    "language_options": PropTypes.object,
    "language_desc": PropTypes.string,
    "traits": PropTypes.arrayOf(PropTypes.object),
    "subraces": PropTypes.array,
    "url": PropTypes.string
})
}