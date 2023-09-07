import PropTypes from 'prop-types';

const Rule = ({page}) => {

  const formatSubheader = (phrase, index) => {
    const words = phrase.split(' ');
    const fixed = words.filter(word => !word.includes('#')).join(' ')
    return <p key={index} className='main--bold'>{fixed}</p>
  }

  const formatContent = () => {
    return page.desc.split('\n').filter(desc => desc).map((desc, index) => desc.includes('#') ? formatSubheader(desc, index) : <p key={index}>{desc}</p>)
  }

  return (
    <>
      {formatContent()}
    </>
  )
}

export default Rule;

Rule.propTypes = {
  page: PropTypes.shape({
    "name": PropTypes.string,
    "index": PropTypes.string,
    "desc": PropTypes.string,
    "url": PropTypes.string
  })
}
