import Form from "./Form";
import Todo from "./Todo";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function AddTodo(todoArr) {
    const [todoData, setTodoData] = useState("")
    const [todos, setTodos] = useState([])
    const [animationParent] = useAutoAnimate()

    console.log(todos)

    todos && todoArr(...todos)

    return (
        <div>
            <Form todoData={todoData} todos={todos} setTodos={setTodos} setTodoData={setTodoData} />
            <div ref={animationParent} >
                {todos.map(e => {
                    return (
                        <Todo todoText={e.text} che />
                    )
                })}
            </div>
        </div>

    )
}