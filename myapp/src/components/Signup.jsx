import React from 'react'
import {Button, TextField } from '@mui/material'

const Signup = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="name" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="phone" variant="outlined" /> <br />
      <Button variant="outlined">Signup</Button>
    </div>
  )
}

export default Signup