import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getData } from '../apiCalls';
import Rule from './Rule';
import Ability from './Ability';
import Skill from './Skill';
import Class from './Class';
import Race from './Race';

const Page = () => {
  
  const location = useLocation();
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true)

  const PATHS = {
    'gameplay-basics': 'rule-sections',
    'abilities': 'ability-scores',
    'skills': 'skills',
    'races': 'races',
    'classes': 'classes'
  }

  useEffect(() => {
    PATHS[location.pathname.split('/')[1]] === 'ability-scores' ? 
      getData(PATHS[location.pathname.split('/')[1]], location.pathname.split('/')[2].slice(0, 3))
      .then(res => setPage(res))
      .then(() => setLoading(false))
    :
      getData(PATHS[location.pathname.split('/')[1]], location.pathname.split('/')[2])
      .then(res => setPage(res))
      .then(() => setLoading(false))   
  }, [])

  const renderPage = (path) => {
    console.log(path)
    switch(path) {
      case 'gameplay-basics':
        return <Rule page={page} />
      case 'abilities':
        return <Ability page={page} />
      case 'skills':
        return <Skill page={page} />
      case 'races':
        return <Race page={page} />
      case 'classes':
        return <Class page={page} />
    }
  }

  return (
    <>
      {
        loading ? 
        <h2>Loading</h2>
        :
        <main>
          <h2 className='main__heading'>{page.name}</h2>
          <div className='main__divider'></div>
          {renderPage(location.pathname.split('/')[1])}
        </main>
      }
    </>
  )
}

export default Page;