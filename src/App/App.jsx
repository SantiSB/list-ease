import React from 'react'
import { useToDos } from './useToDos'
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { ToDosLoading } from '../ToDosLoading'
import { EmptyToDos } from '../EmptyToDos'
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { ChangeAlert } from '../ChangeAlert'
import { ToDosError } from '../ToDosError'

function App() {
  const { state, stateUpdaters } = useToDos()

  const {
    error,
    loading,
    searchedToDos,
    totalToDos,
    completedToDos,
    openModal,
    searchValue,
  } = state

  const {
    setOpenModal,
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    synchronizeToDos,
  } = stateUpdaters

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalToDos={totalToDos} completedToDos={completedToDos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalToDos={totalToDos}
        searchedToDos={searchedToDos}
        searchText={searchValue}
        onError={() => <ToDosError />}
        onLoading={() => <ToDosLoading />}
        onEmptyToDos={() => <EmptyToDos />}
        onEmptySearchResults={(searchText) => (
          <p>There aren&apos;t results for {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert synchronize={synchronizeToDos} />
    </React.Fragment>
  )
}

export default App
