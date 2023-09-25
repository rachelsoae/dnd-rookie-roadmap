import PropTypes from 'prop-types';

const Ability = ({ page }) => {
  const descriptions = page.desc.map((desc, index) => <p key={index} >{desc}</p>);

  return (
    <>
      {descriptions}
    </>
  )  
}

export default Ability;

Ability.propTypes = {
  page: PropTypes.shape({
    "index": PropTypes.string,
    "name": PropTypes.string,
    "full_name": PropTypes.string,
    "desc": PropTypes.arrayOf(PropTypes.string),
    "skills": PropTypes.arrayOf(PropTypes.object),
    "url": PropTypes.string
  })
}
