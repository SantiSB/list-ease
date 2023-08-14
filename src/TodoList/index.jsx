import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render

  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalToDos && props.onEmptyToDos()}

      {!!props.totalToDos &&
        !props.searchedToDos.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading && !props.error && props.searchedToDos.map(renderFunc)}
    </section>
  )
}

export { TodoList }
