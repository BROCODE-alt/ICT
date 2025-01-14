import React from 'react'
import {Button, TextField } from '@mui/material'
const Login = () => {
  return (
    <div>
        <TextField id="filled-basic" label="Email" variant="filled" /> <br />
        <TextField id="filled-basic" label="password" variant="filled" /> <br />
        <Button variant="contained">Login</Button>
    </div>
  )
}

export default Login
