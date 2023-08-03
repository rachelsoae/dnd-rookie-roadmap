import { NavLink, useParams  } from 'react-router-dom';

const Rule = () => {
  // instead of useParams, access the "name" key of the incoming object - already capitalized
  const rule = useParams().id

  return (
    <main>
      <h2 className='main__heading'>{rule}</h2>
      <div className='main__divider'></div>
      <p>
        {/* access "desc" key */}
        {rule} description
      </p>
    </main>
  )
}

export default Rule;