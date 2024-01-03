import TodoForm from "./todoForm";
import TodoList from "./todoList";
import { useState } from "react";

const Todo = () => {

const [tasks, setTasks] = useState([]);

    return (
    <>
        <TodoForm addTask={setTasks}/>
        <TodoList list={tasks} addTask={setTasks}/>
    </>
    )
}

export default Todo;