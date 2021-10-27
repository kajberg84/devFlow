import React, {useState} from 'react'
import doneIcon from "../../utils/icons/check-circle.svg";
import removeIcon from "../../utils/icons/x-circle.svg";
import { useHistory } from 'react-router';


function Todo({ todos, completeTodo, removeTodo }) {
    const history = useHistory();

    return todos.map((todo, index) => (
        <div 
          className={todo.isComplete ? 'todo--row complete' : 'todo--row'}
          key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.value}
            </div>
            <div className="icons">
            <img src={doneIcon} alt="add" className="todo--icon" onClick={() => completeTodo(todo.id)}/>
            <img src={removeIcon} alt="add" className="todo--icon" onClick={() => removeTodo(todo.id)} />
            </div>


        </div>
    ));
}


export default Todo
