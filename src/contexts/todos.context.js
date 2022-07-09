import React, { createContext } from "react"
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer"
import todoReducer from "../reducers/todo.reducer"
const initialTodos =
    [
        { id: 1, task: "A", completed: false },
        { id: 2, task: "B", completed: true },
        { id: 3, task: "G", completed: false }
    ]
export const TodosContext = createContext()
export const DispatchContext = createContext();

export function TodosProvider(props)
{
    const [todos, dispatch] = useLocalStorageReducer("todos",  initialTodos, todoReducer)
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}