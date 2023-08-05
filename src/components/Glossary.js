import { useState } from 'react';
import PropTypes from 'prop-types';

const Glossary = ({getAllLinks}) => {
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleChange = (e) => {
    const lowercase = e.target.value.toLowerCase();
    setSearchTerm(lowercase)
  }

  const filterLinks = () => {
    const filtered = getAllLinks().filter(link => link.props.children.toLowerCase().includes(searchTerm))
    return filtered;
  }
  
  return (
    <main>
    <h2 className='main__heading'>Glossary / Search</h2>
    <div className='main__divider'></div>
    <div className='main__rules'>
      <section className='main__rule-section main__glossary'>
        <div className='main__search'>
          <label htmlFor='search' className=''>Search</label>
          <input
            type='text'
            name='search'
            placeholder="example: 'Wisdom'"
            onChange={handleChange}
          />
        </div>
        <h3 className='main__subheading'>A-Z</h3>
        <div className='main__links'>
        {searchTerm ? filterLinks() : getAllLinks()}
        </div>
      </section>
    </div>
  </main>
  )
}

export default Glossary;

Glossary.propTypes = {
  getAllLinks: PropTypes.func.isRequired
}

