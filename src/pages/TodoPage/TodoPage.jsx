import React from "react";
import { useHistory } from "react-router-dom";
import "./TodoPage.css";
import RoutingPath from "../../routes/RoutingPath";

import TodoList from "../../components/todo/TodoList";


export const TodoPage = () => {
    const history = useHistory();

    return (
        <div className="todo--container">
            <div className="todo--card">
            <TodoList />
            </div>
        </div>

    )
}

{/*
<div className="active--wrapper">
<h1 className="todo-heading">To-Do</h1>
<img src={addIcon} alt="add" className="todo--icon" onClick={() => history.push()} />
</div>
<div className="item--card">
<h5>Lorem ipsum</h5>
<img src={doneIcon} alt="add" className="todo--icon" onClick={() => history.push()} />
</div>
<div className="active--wrapper">
<h1 className="todo--heading">Done</h1>
</div>
<div className="item--card">
<h5>Lorem ipsum</h5>
<img src={removeIcon} alt="add" className="todo--icon" onClick={() => history.push()} />
</div>
<div className="item--card">
<h5>Lorem ipsum</h5>
<img src={removeIcon} alt="add" className="todo--icon" onClick={() => history.push()} />
</div>
<div className="item--card">
<h5>Lorem ipsum</h5>
<img src={removeIcon} alt="add" className="todo--icon" onClick={() => history.push()} />
</div>
*/}