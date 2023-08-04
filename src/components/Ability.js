const Ability = ({ability}) => {
  const descriptions = ability.desc.map(desc => <p>{desc}</p>);

  return (
    <main>
      <h2 className='main__heading'>{ability.full_name} ({ability.name})</h2>
      <div className='main__divider'></div>
      {descriptions}
    </main>
  )  
}

export default Ability;