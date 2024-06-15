import React , {useState} from 'react'

export default function (props) {
  const handleAddTodo = props.handleAddTodos;
  const todoValue = props.todoValue;
  const setTodoValue = props.setTodoValue;



  return (
    <header>
      <input value = {todoValue} onChange = {(e) => setTodoValue(e.target.value)} placeholder = "Enter todo.." id = "todoInput"/>
      <button onClick = {() => {
        handleAddTodo(todoValue)
        setTodoValue('')
        }}>Add</button>
    </header>
  )
}
