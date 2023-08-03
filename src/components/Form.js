const Form = () => {
  return (
    <form className='search-bar'>
    <label htmlFor='search'>
      <input
        type='text'
        name='search'
        placeholder='search'
      />
    </label>
    <img
      src='../search.png'
    />
  </form>
  )
}

export default Form;