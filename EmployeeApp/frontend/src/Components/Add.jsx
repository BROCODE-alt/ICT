import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Add = () => {
    var [input, setinput] = useState({Name: "", Age: "", Department: "", Salary: ""})
    var navigate=useNavigate()

    const inputHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }
    const addHandler = () => {
        axios.post("http://localhost:3004/add", input)
            .then((res) => {
                alert(res.data.message)
                navigate("/view")
        })
    }
    return (
        <div>
            <br />
            <br />
            <br/>
            <br/>
            <Typography variant="h4" gutterBottom><b>ENTER DATA</b></Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" 
            name='Name' value={input.Name} onChange={inputHandler}/><br /><br />
            <TextField id="outlined-basic" label="Age" variant="outlined" 
            name='Age' value={input.Age} onChange={inputHandler}/><br /><br />
            <TextField id="outlined-basic" label="Department" variant="outlined" 
            name='Department' value={input.Department} onChange={inputHandler}/><br /><br />
            <TextField id="outlined-basic" label="Salary" variant="outlined" 
            name='Salary' value={input.Salary} onChange={inputHandler}/><br /><br />
            <Button variant="outlined" color="secondary" onClick={addHandler}>Submit</Button>
        </div>
    )
}

export default Add