import Form from "./Form";
import Todo from "./Todo";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as Unicons from '@iconscout/react-unicons';


export default function AddTodo() {
    const [todoData, setTodoData] = useState("")
    const [todos, setTodos] = useState([])
    const [animationParent] = useAutoAnimate()

    console.log(todos)

    const delTodo = (item) => {
        const newArr = todos.filter(e => e.id !== item)
        setTodos(newArr)
    }

    return (
        <div>
            <Form todoData={todoData} todos={todos} setTodos={setTodos} setTodoData={setTodoData} />
            <div ref={animationParent} >
                {todos.map(e => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex justify-between">
                            <Todo todoText={e.text} che />
                            <button onClick={() => delTodo(e.id)}> <Unicons.UilTrash /> </button>
                        </div>


                    )
                })}
            </div>
        </div>

    )
}