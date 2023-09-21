import { useState } from 'react'
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState('')

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Type a new To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Go to supermarket'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
