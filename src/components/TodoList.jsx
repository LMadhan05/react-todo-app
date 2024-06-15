import React from 'react'
import TodoCard from './TodoCard.jsx'

export default function TodoList(props) {
  let todoList = props.todos;
  const handleDeleteTodos = props.handleDeleteTodos;
  const handleEditTodos = props.handleEditTodos;
  console.log(todoList);
  return (
    <ul className = "main">
      <TodoCard todos = {todoList} handleDeleteTodos = {handleDeleteTodos} handleEditTodos = {handleEditTodos}></TodoCard>
    </ul>
  )
}
