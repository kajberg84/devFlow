import React, {useState} from 'react'
import doneIcon from "../../utils/icons/check-circle.svg";
import removeIcon from "../../utils/icons/x-circle.svg";
import { useHistory } from 'react-router';


function Todo({ todos, completeTodo, removeTodo}) {

    const history = useHistory();

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <div 
          className={todo.isComplete ? 'todo--row complete' : 'todo--row'}
          key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
            <img src={doneIcon} alt="add" className="todo--icon" />
            <img src={removeIcon} alt="add" className="todo--icon" onClick={() => removeTodo(todo.id)} />
            </div>


        </div>
    ));
}


export default Todo
