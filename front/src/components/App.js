import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import axios from 'axios'

const App = () => {

  const [todoList, setTodoList] = useState([])

  useEffect(() => {

    const getTodos = async () => {
      const res = await axios.get('http://localhost:4000/todo', {
        params: {}
      }).catch(err => {
        console.log(err)
      })

      if (res && res.status === 200) {
        setTodoList(res.data.todos)
      }
    }

    getTodos()

  }, [])

  return (
    <div className="App">
      <h2 className="ui center aligned icon header">
      < i className="circular list ul icon"></i>
        To Do List
      </h2>
      <AddTodo todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;



