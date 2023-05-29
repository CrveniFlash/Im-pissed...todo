import Form from "./Form";
import Todo from "./Todo";
import { useState } from "react";

export default function AddTodo() {
    const [todoData, setTodoData] = useState("")
    const [todos, setTodos] = useState([])

    console.log(todos)
    const handleData = (data) => {

    }

    return (
        <div>
            <Form todoData={todoData} todos={todos} setTodos={setTodos} setTodoData={setTodoData} />
            <div>
                {todos.map(e => {
                    return (
                        <Todo todoText={e.text}/>
                    )
                })}
            </div>
        </div>

    )
}