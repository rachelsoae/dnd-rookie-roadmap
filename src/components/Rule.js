import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getData } from '../apiCalls'
import Page from './Page'

const Rule = ({ rule }) => {
  const location = useLocation();

  const [page, setPage] = useState({});

  const paths = {
    'gameplay-basics': 'rule-sections',
    'abilities': 'ability-scores',
    'skills': 'rules',
    'races': 'races',
    'classes': 'classes'
  }

  useEffect(() => {
    getData(paths[location.pathname.split('/')[1]], location.pathname.split('/')[2])
    .then(res => setPage(res))
  }, [])


  const formatSubheader = (phrase, index) => {
    const words = phrase.split(' ');
    const fixed = words.filter(word => !word.includes('#')).join(' ')
    return <p key={index} className='main--bold'>{fixed}</p>
  }

  const formatContent = () => {
    console.log('page:', page)
    return page.desc.split('\n').filter(desc => desc).map((desc, index) => desc.includes('#') ? formatSubheader(desc, index) : <p key={index}>{desc}</p>)
  }

  return (
    <main>
      <h2 className='main__heading'>{page.name}</h2>
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
