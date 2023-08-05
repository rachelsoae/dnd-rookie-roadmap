import search from '../search.png';

const Form = () => {
  return (
    <form className='search-bar'>
    <label htmlFor='search' className=''>Search</label>
      <input
        type='text'
        name='search'
        placeholder="example: 'Wisdom'"
      />
      <button>Go!</button>
  </form>
  )
}

export default Form;