import React from 'react'
import HandleClick from './HandleClick'
import axios from 'axios'
import './TodoList.css'

const TodoList = ({ todoList, setTodoList }) => {

    const deleteTodo = async (todo) => {

        const res = await axios.post('http://localhost:4000/todo/remove', {
                id: todo.id
            }).catch(err => {
            console.log(err)
        })

        if (res.status === 200) {
            const result = todoList.filter(m => m.id !== todo.id);
            setTodoList(result)
        }
    }

    return (
        <div className='todos-container'>
            {
                todoList && todoList.map((todo, i) => (
                    <div className="ui cards two column grid" key={i}>
                        <div className="card ten wide column">
                            <div className="header">
                                {todo.title}
                            </div>
                            <div className="extra content">
                                <div className="ui one buttons">
                                    <HandleClick deleteTodo={() => deleteTodo(todo)} />
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                ))
            }       
        </div>
    )
}

export default TodoList
