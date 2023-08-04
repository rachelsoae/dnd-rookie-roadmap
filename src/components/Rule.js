const Rule = ({ rule }) => {
  const formatHeader = (phrase) => {
    const words = phrase.split(' ');
    const fixed = words.filter(word => !word.includes('#')).join(' ')
    return <p className='main--bold'>{fixed}</p>
  }

  const formatContent = () => {
    return rule.desc.split('\n').filter(desc => desc).map(desc => desc.includes('#') ? formatHeader(desc) : <p>{desc}</p>)
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


