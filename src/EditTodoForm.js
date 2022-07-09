import React, { useContext } from 'react'
import { Input } from '@mui/material'
import useInputState from './hooks/useInputState'
import { DispatchContext } from "./contexts/todos.context"


function EditTodoForm({ id, task, toggleEditForm })
{
    const dispatch = useContext(DispatchContext)
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form style={{ marginLeft: "1rem", width: "90%", marginTop: "5px", height: "37px" }} onSubmit={(e) => 
        {
            e.preventDefault()
            dispatch({ type: "EDIT", id: id, newTask: value })
            reset()
            toggleEditForm()
        }}>
            <Input margin='dense' value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    )
}

export default EditTodoForm