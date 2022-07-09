import React, { useContext } from 'react'
import { Paper } from '@mui/material'
import { List } from '@mui/material'
import { Divider } from '@mui/material'
import Todo from './Todo'
import { TodosContext } from "./contexts/todos.context"

function TodoList()
{
    const todos = useContext(TodosContext)
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map(t => (
                        <div key={t.id} >
                            <Todo  {...t} />
                            <Divider />
                        </div>
                    ))}
                </List>
            </Paper>
        )
    return null;
}

export default TodoList
