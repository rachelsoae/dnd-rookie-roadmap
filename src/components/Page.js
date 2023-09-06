import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getData } from '../apiCalls';
import Rule from './Rule';

const Page = () => {
  
  const location = useLocation();
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true)

  const PATHS = {
    'gameplay-basics': 'rule-sections',
    'abilities': 'ability-scores',
    'skills': 'rules',
    'races': 'races',
    'classes': 'classes'
  }

  useEffect(() => {
    getData(PATHS[location.pathname.split('/')[1]], location.pathname.split('/')[2])
    .then(res => setPage(res))
    .then(() => setLoading(false))
  }, [])
  
  return (
    <>
      {
        loading ? 
        <h2>Loading</h2>
        :
        <main>
          <h2 className='main__heading'>{page.name}</h2>
          <div className='main__divider'></div>
          <Rule page={page} />
        </main>
      }
    </>
  )
}

export default Page;