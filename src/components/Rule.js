import PropTypes from 'prop-types';

const Rule = ({ rule }) => {
  const formatHeader = (phrase, index) => {
    const words = phrase.split(' ');
    const fixed = words.filter(word => !word.includes('#')).join(' ')
    return <p key={index} className='main--bold'>{fixed}</p>
  }

  const formatContent = () => {
    return rule.desc.split('\n').filter(desc => desc).map((desc, index) => desc.includes('#') ? formatHeader(desc, index) : <p key={index}>{desc}</p>)
  }

  return (
    <main>
      <h2 className='main__heading'>{rule.name}</h2>
      <div className='main__divider'></div>
      {formatContent()}
    </main>
  )
}

export default Rule;

Rule.propTypes = {
  rule: PropTypes.shape({
    "name": PropTypes.string,
    "index": PropTypes.string,
    "desc": PropTypes.string,
    "url": PropTypes.string
  })
}
