import React from 'react'
import axios from 'axios'
import './AddTodo.css'

const AddTodo = ({ todoList, setTodoList }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            e.preventDefault();
            postTodo(e.target.value)
            e.target.value = ''
        }
    }

    const postTodo = async (todo) => {

        const res = await axios.post('http://localhost:4000/todo', {
            title: todo
            }).catch(err => {
            console.log(err)
        })

        if (res && res.status === 200) {
            setTodoList([...todoList, res.data])
        }
    }

    return (
        <div className="ui input focus">
            <input autoFocus className='todo-input' type="text" maxLength="46" placeholder="Add todo" onKeyDown={handleKeyDown} />
        </div>
    )
}

export default AddTodo

