import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

function useToDos() {
  const {
    item: toDos,
    saveItem: saveToDos,
    synchronizeItem: synchronizeToDos,
    loading,
    error,
  } = useLocalStorage('TO_DOS_V1', [])

  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedToDos = toDos.filter((todo) => !!todo.completed).length
  const totalToDos = toDos.length

  let searchedToDos = []

  if (!searchValue.length >= 1) {
    searchedToDos = toDos
  } else {
    searchedToDos = toDos.filter((todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const addTodo = (text) => {
    const newToDos = [...toDos]
    newToDos.push({
      completed: false,
      text,
    })
    saveToDos(newToDos)
  }

  const completeTodo = (text) => {
    const todoIndex = toDos.findIndex((todo) => todo.text === text)
    const newToDos = [...toDos]
    newToDos[todoIndex].completed = true
    saveToDos(newToDos)
  }

  const deleteTodo = (text) => {
    const todoIndex = toDos.findIndex((todo) => todo.text === text)
    const newToDos = [...toDos]
    newToDos.splice(todoIndex, 1)
    saveToDos(newToDos)
  }

  const state = {
    loading,
    error,
    totalToDos,
    completedToDos,
    searchValue,
    searchedToDos,
    openModal,
  }

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    synchronizeToDos,
  }

  return { state, stateUpdaters }
}

export { useToDos }
