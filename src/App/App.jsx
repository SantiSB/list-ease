import React from 'react'
import { useToDos } from './useTodos'
import { TodoHeader } from '../TodoHeader/index'
import { TodoCounter } from '../TodoCounter/index'
import { TodoSearch } from '../TodoSearch/index'
import { TodoList } from '../TodoList/index'
import { TodoItem } from '../TodoItem/index'
import { ToDosLoading } from '../TodosLoading/index'
import { EmptyToDos } from '../EmptyTodos/index'
import { TodoForm } from '../TodoForm/index'
import { CreateTodoButton } from '../CreateTodoButton/index'
import { Modal } from '../Modal/index'
import { ChangeAlert } from '../ChangeAlert/index'
import { ToDosError } from '../TodosError/index'

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
