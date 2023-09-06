import PropTypes from 'prop-types';
import { useLocation} from 'react-router-dom'

const Race = ({page}) => {
  // const relatedAbilities = page.ability_bonuses.map(currentAbility => {
  //   let fullAbility = abilities.find(ability => ability.index === currentAbility.ability_score.index)
  //   return fullAbility.full_name
  // })

  return (
    <>
      <p>{page.alignment}</p>
      <p>{page.age}</p>
      {/* <p>Ability Bonuses: {relatedAbilities.join(', ')}</p> */}
    </>
  )
}

export default Race;

// Race.propTypes = {
//   abilities: PropTypes.arrayOf(PropTypes.object),
//   page: PropTypes.shape({
//     "index": PropTypes.string,
//     "name": PropTypes.string,
//     "speed": PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     "ability_bonuses": PropTypes.arrayOf(PropTypes.object),
//     "ability_bonus_options": PropTypes.object,
//     "alignment":PropTypes.string,
//     "age": PropTypes.string,
//     "size": PropTypes.string,
//     "size_description": PropTypes.string,
//     "starting_proficiencies": PropTypes.array,
//     "starting_proficiency_options": PropTypes.object,
//     "languages": PropTypes.arrayOf(PropTypes.object),
//     "language_options": PropTypes.object,
//     "language_desc": PropTypes.string,
//     "traits": PropTypes.arrayOf(PropTypes.object),
//     "subraces": PropTypes.array,
//     "url": PropTypes.string
// })
// }