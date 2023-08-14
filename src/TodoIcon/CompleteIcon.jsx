import { TodoIcon } from "."

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? '#61DAFA' : '#9CA8B8'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon }
