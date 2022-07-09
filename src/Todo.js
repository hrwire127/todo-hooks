import React, { useContext, memo } from 'react'
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { Button } from '@mui/material'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import { Clear } from '@mui/icons-material'
import { DispatchContext } from './contexts/todos.context'


function Todo({ id, task, completed })
{
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggleState(false)

    return (
        <ListItem >
            {isEditing
                ?
                <>
                    <EditTodoForm task={task} id={id} toggleEditForm={toggle} />
                    <Button onClick={toggle}><Clear></Clear></Button>
                </>
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id: id })} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <Button aria-label="Delete" onClick={() => dispatch({ type: "REMOVE", id: id })}>
                            <Delete />
                        </Button>
                        <Button aria-label="Edit" onClick={toggle}>
                            <Edit />
                        </Button>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default memo(Todo)
