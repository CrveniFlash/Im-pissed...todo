import Form from "./Form";
import Todo from "./Todo";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as Unicons from '@iconscout/react-unicons';
import ClearData from "./ClearData";


export default function AddTodo() {
    const [todoData, setTodoData] = useState("")
    const [todos, setTodos] = useState([])
    const [animationParent] = useAutoAnimate()


    const delTodo = (item) => {
        setTodos(todos.filter(e => e.id !== item))
    }

    return (
        <div>
            <Form todoData={todoData} todos={todos} setTodos={setTodos} setTodoData={setTodoData} />
            <div ref={animationParent} >
                {todos.map((e, id) => {
                    return (
                        <div key={id} className="flex justify-between">
                            <Todo todoText={e.text} />
                            <button onClick={() => delTodo(e.id)}> <Unicons.UilTrash /> </button>
                        </div>
                    )
                })}
            </div>
            <ClearData delAll={() => setTodos([])} todoNum={todos.length} />
        </div>

    )
}