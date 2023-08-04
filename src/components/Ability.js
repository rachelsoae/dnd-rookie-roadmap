import PropTypes from 'prop-types';

const Ability = ({ability}) => {
  const descriptions = ability.desc.map((desc, index) => <p key={index} >{desc}</p>);

  return (
    <main>
      <h2 className='main__heading'>{ability.full_name} ({ability.name})</h2>
      <div className='main__divider'></div>
      {descriptions}
    </main>
  )  
}

export default Ability;

Ability.propTypes = {
  ability: PropTypes.shape({
    "index": PropTypes.string,
    "name": PropTypes.string,
    "full_name": PropTypes.string,
    "desc": PropTypes.arrayOf(PropTypes.string),
    "skills": PropTypes.arrayOf(PropTypes.object),
    "url": PropTypes.string
  }).isRequired
}