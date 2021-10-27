import React, {useState} from 'react'
import addIcon from "../../../utils/icons/plus-circle.svg";
import './TodoForm.css'
import { v4 as uuid } from "uuid";


function TodoForm( { addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        value: "",
        isComplete: false
    })

    const handleChange = e => {
        setTodo({ ...todo, value: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

       if (todo.value.trim()) {
           addTodo({ ...todo, id: uuid() });
           setTodo({ ...todo, value: ""});
       }
    };

    return (
        <form className="todo--form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add a To-do"
        value={todo.value}
        name="text"
        className="todo--input" 
        onChange={handleChange}
        />
        <button className="todo--button"><img src={addIcon} alt="add" className="todo--icon" /></button>
        </form>
    )
}

export default TodoForm
