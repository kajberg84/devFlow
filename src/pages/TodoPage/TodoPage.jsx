import React from "react";
import { useHistory } from "react-router-dom";
import "./TodoPage.css";
import RoutingPath from "../../routes/RoutingPath";

import TodoList from "../../components/todo/TodoList/TodoList.jsx";


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
