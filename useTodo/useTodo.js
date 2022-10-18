import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    
    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    

    const onAddTodo = (todo) => {
        
        const todoAction = {
            type: '[TODO] add',
            payload: todo,
        };

        dispatchTodo(todoAction);

    };

    const onRemoveTodo = (id) => {
        
        const todoAction = {
            type: '[TODO] remove',
            payload: id,
        }

        dispatchTodo(todoAction);

    };

    const onToggleTodo = (id) => {

        const todoAction = {
            type: '[TODO] toggle',
            payload: id,
        }
        
        dispatchTodo(todoAction);

    };

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => todo.done === false).length;
    
    return {
        todos,
        todosCount,
        pendingTodosCount,
        onAddTodo,
        onRemoveTodo,
        onToggleTodo,
    };
}
