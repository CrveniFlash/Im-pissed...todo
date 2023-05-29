import Form from "./Form";
import Todo from "./Todo";
import { useState } from "react";

export default function AddTodo() {
    const [todoData, setTodoData] = useState("")
    const [todos, setTodos] = useState([])

    console.log(todoData)
    const handleData = (data) => {

    }

    return (
        <div>
            <Form todoData={todoData} setTodoData={setTodoData} userInput={setTodoData}/>
            <Todo todoText={todoData}/>
        </div>
    )
}