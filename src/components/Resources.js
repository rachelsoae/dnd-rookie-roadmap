import { NavLink } from 'react-router-dom';

const Resources = () => {
  return (
    <main>
    <h2 className='main__heading'>Resources</h2>
    <div className='main__divider'></div>
    <div className='main__content'>
      <section className='main__section main__glossary'>
        <h3 className='main__subheading'>Seeking more adventure? Be sure to check out...</h3>
        <div className='main__links'>
          <NavLink to='https://dnd.wizards.com/' className='main__link'>Dungeons & Dragons Official Website</NavLink>
          <NavLink to='https://en.wikipedia.org/wiki/Dungeons_%26_Dragons' className='main__link'>D&D on Wikipedia</NavLink>
          <NavLink to='https://www.polygon.com/deals/21294556/dnd-how-to-play-dungeons-dragons-5e-guide-spells-dice-character-sheets-dm' className='main__link'>"A beginner's guide to playing Dungeons and Dragons" by Samantha Nelson</NavLink>
          <NavLink to='https://www.dicebreaker.com/games/dungeons-and-dragons-5e' className='main__link'>"About Dungeons & Dragons 5E" on Dicebreaker</NavLink>
        </div>
      </section>
    </div>
  </main>
  )
}

export default Resources;