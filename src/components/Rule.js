import { useParams  } from 'react-router-dom';
import { rules } from '../mockData'

const Rule = () => {
  // instead of useParams, access the "name" key of the incoming object - already capitalized
  const index = useParams().id
  const rule = rules.find(rule => rule.index === index)

  const descriptions = rule.desc.split('\n').filter(desc => desc).map(desc => <p>{desc}</p>)

  return (
    <main>
      <h2 className='main__heading'>{rule.name}</h2>
      <div className='main__divider'></div>
      {descriptions}
    </main>
  )
}

export default Rule;