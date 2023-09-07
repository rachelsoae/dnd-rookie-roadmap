import PropTypes from 'prop-types';

const Skill = ({ page }) => {
  const descriptions = page.desc.map((desc, index) => <p key={index}>{desc}</p>);

  return (
    <>
      {descriptions}
    </>
  )
}

export default Skill;

Skill.propTypes = {
  skill: PropTypes.shape ({
    "index": PropTypes.string,
    "name": PropTypes.string,
    "desc": PropTypes.arrayOf(PropTypes.string),
    "ability_score": PropTypes.object,
    "url": PropTypes.string 
  })
}