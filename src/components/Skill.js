const Skill = ({skill}) => {
  const descriptions = skill.desc.map(desc => <p>{desc}</p>);

  return (
    <main>
      <h2 className='main__heading'>{skill.name}</h2>
      <div className='main__divider'></div>
      {descriptions}
    </main>
  )
}

export default Skill;