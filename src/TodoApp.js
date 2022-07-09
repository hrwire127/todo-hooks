import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { Paper } from '@mui/material'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Grid } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from './hooks/useTodoState'
import useLocalStorageState from './hooks/useLocalStorageState';
import { TodosProvider } from "./contexts/todos.context"

function TodoApp()
{
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Todo with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>

                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp