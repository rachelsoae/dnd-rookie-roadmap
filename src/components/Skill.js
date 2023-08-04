import PropTypes from 'prop-types';

const Skill = ({skill}) => {
  const descriptions = skill.desc.map((desc, index) => <p key={index}>{desc}</p>);

  return (
    <main>
      <h2 className='main__heading'>{skill.name}</h2>
      <div className='main__divider'></div>
      {descriptions}
    </main>
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