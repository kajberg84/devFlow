import React, {useState} from 'react'
import addIcon from "../../utils/icons/plus-circle.svg";
import '../../pages/TodoPage/TodoPage.css'


function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        
        setInput('')
    };
    return (
        <form className="todo--form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add a To-do"
        value={input}
        name="text"
        className="todo--input" 
        onChange={handleChange}
        />
        <button className="todo--button"><img src={addIcon} alt="add" className="todo--icon" /></button>
        </form>
    )
}

export default TodoForm
