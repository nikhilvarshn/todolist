import React, {useState} from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'

function App() {
  const [listTodo, setListTodo]=useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo, inputText]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
      </div>
    </div>
  )
}

export default App
