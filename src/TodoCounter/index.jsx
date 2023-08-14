import './TodoCounter.css'

function TodoCounter({ totalToDos, completedToDos, loading }) {
  return (
    <h5 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
      You have completed {completedToDos} of {totalToDos} tasks
    </h5>
  )
}

export { TodoCounter }
