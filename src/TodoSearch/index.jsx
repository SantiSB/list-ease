import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input
      className='TodoSearch'
      placeholder='Search a To Do'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  )
}

export { TodoSearch }
