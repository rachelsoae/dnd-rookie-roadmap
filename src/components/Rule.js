import { useParams  } from 'react-router-dom';
import { rules } from '../mockData'

const Rule = () => {
  const index = useParams().id
  const rule = rules.find(rule => rule.index === index)

  const formatHeader = (phrase) => {
    const words = phrase.split(' ');
    const fixed = words.filter(word => !word.includes('#')).join(' ')
    return <p className='main--bold'>{fixed}</p>
  }

  const descriptions = rule.desc.split('\n').filter(desc => desc).map(desc => desc.includes('#') ? formatHeader(desc) : <p>{desc}</p>)

  return (
    <main>
      <h2 className='main__heading'>{rule.name}</h2>
      <div className='main__divider'></div>
      {descriptions}
    </main>
  )
}

export default Rule;