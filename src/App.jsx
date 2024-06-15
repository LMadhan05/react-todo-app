import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import './index.css'
import {useState} from 'react'

function App() {

  const [todos , setTodos] = useState([]);

  const [todoValue , setTodoValue] = useState('')

  const handleAddTodos = function(todo){
    const newTodoList = [...todos , todo];
    setTodos(newTodoList);
  }

  const handleDeleteTodos = function(todoIndex){
    const newTodoList = todos.filter((todo , index) => {
      return index !== todoIndex
    })

    setTodos(newTodoList);
  }

  const handleEditTodos = function(todoIndex){
    const valueToBeEdited = todos[todoIndex];
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(todoIndex)
  }



  return (
    <>
      <TodoInput handleAddTodos = {handleAddTodos} todoValue = {todoValue} setTodoValue = {setTodoValue}/>
      {
        todos.length == 0
        ?
        <h4>No Records Found..</h4>
        :
        <TodoList todos = {todos} handleDeleteTodos = {handleDeleteTodos} handleEditTodos = {handleEditTodos}></TodoList>
      }
    </>
  )
}

export default App
