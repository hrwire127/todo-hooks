import { useState } from 'react';
import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';



export default initialTodos =>
{
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos)

    return {
        todos,
        addTodo: todoText =>
        {
            setTodos([...todos, { id: uuidv4(), task: todoText, completed: false }])
        },
        removeTodo: todoId =>
        {
            const updatedTodo = todos.filter(todo => todo.id !== todoId)
            setTodos(updatedTodo);
        },
        toggleTodo: todoId =>
        {
            const updatedTodo = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodo);
        },
        editTodo: (todoId, newTask) =>
        {
            const updatedTodo = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo)
            setTodos(updatedTodo);
        }
    }
}
