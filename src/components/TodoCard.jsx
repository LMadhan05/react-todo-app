import React from 'react'

export default function (props) {
  // let todos = props.todos;
  // const handleDeleteTodos = props.handleDeleteTodos;
  // const handleEditTodos = props.handleEditTodos;

  const {todos , handleDeleteTodos , handleEditTodos} = props;

  return (
    todos.map((todo,todoIndex) => {
      return <div className = "actionContainer">
        <li className = "todoItem" key = {todoIndex}>{todo} <i className = "icons" onClick = {() => handleEditTodos(todoIndex)} class="fa-regular fa-pen-to-square"></i><i className = "icons" onClick = {() => handleDeleteTodos(todoIndex)}class="fa-solid fa-trash"></i></li>
      </div>
    })
  )
}
