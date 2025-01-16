import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
    return (
        <div>
            <br />
            <br />
            <br/>
            <br/>
            <Typography variant="h4" gutterBottom><b>ENTER DATA</b></Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Age" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Department" variant="outlined" /><br /><br />
            <TextField id="outlined-basic" label="Salary" variant="outlined" /><br /><br />
            <Button variant="outlined" color="error">Submit</Button>

        </div>
    )
}

export default Add