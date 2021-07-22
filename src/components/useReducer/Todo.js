import { useEffect, useReducer } from "react"
import todoReducer from "./todoReducer"
import TodosList from '../Todos/TodosList'
import TodoAdd from "../Todos/TodoAdd"

import './style.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) !== null ? JSON.parse(localStorage.getItem('todos')) : []
}
const Todo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
        const data = JSON.stringify(todos)
        window.localStorage.setItem('todos', data)
    }, [todos])


    const handleAdd = todo => {
        dispatch({
            type: 'add',
            payload : todo
        })
    }
    const handleDelete = id => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleToogle = id => {
        dispatch({
            type: 'toogle',
            payload: id
        })
    }

    return (
        <>
         <h2 className="text-center my-5">Todos App ({todos.length})</h2>
         
         <TodoAdd handleAdd={handleAdd}/>
         
         <TodosList
            todos={todos}
            handleToogle={handleToogle}
            handleDelete={handleDelete}
         />
        </>
    )
}

export default Todo
