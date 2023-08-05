const Glossary = ({getRulesLinks, getAbilitiesLinks, getSkillsLinks, getRacesLinks, getClassesLinks}) => {
  const getAllLinks = () => {
    const a = getRulesLinks('spellcasting');
    const b = getRulesLinks('adventuring');
    const c = getRulesLinks('combat');
    const d = getRulesLinks('using ability scores');
    const e = getRacesLinks();
    const f = getClassesLinks();
    const g = getAbilitiesLinks();
    const h = getSkillsLinks();

    const allLinks = a.concat(b, c, d, e, f, g, h)
    const alphabetizedLinks = allLinks.sort((a, b) => a.key.localeCompare(b.key))
    return alphabetizedLinks;
  }
  
  return (
    <main>
    <h2 className='main__heading'>Glossary</h2>
    <div className='main__divider'></div>
    <div className='main__rules'>
      <section className='main__rule-section'>
        <h3 className='main__subheading'>A-Z</h3>
        <div className='main__links'>
        {getAllLinks()}
        </div>
      </section>
    </div>
  </main>
  )
}

export default Glossary;

