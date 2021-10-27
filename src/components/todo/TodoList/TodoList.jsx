import React, { useEffect, useState } from 'react'
import Todo from '../Todo/Todo.jsx';
import TodoForm from '../TodoForm/TodoForm';

const LOCAL_STORAGE_KEY = "devflow-todo-list-todos"

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    const addTodo = todo => {
        setTodos([todo, ...todos])
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const completeTodo = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isComplete: !todo.isComplete,
                };
            }
            return todo;
        })
      );
    }

    return (
        <div>
            <h1>To-do</h1>
            <TodoForm addTodo={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
            <h1>Done</h1>
        </div>
    )
}

export default TodoList
