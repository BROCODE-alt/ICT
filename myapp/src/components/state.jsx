import {useState } from "react"
import React from 'react'
import {Button,TextField } from "@mui/material"


const state = () => {
    var [name, setname]=useState()
    var [val,setval]=useState()

    const handleinput=(e)=>{
      console.log(e.target.value)
      setname(e.target.value)
    }
    const subhandler=()=>{
      console.log('submitted name '+name)
      setval(name)
      setname("")
    }
  return (
    <div>
        <h1><b><i>Welcome to MYAPP</i></b></h1>
        <h1>Welcome {val}</h1>
        <TextField id="outlined-basic" label="name" variant="outlined" value={name} onChange={handleinput}/>
        <Button variant="contained" onClick={subhandler}>submit</Button></div>

  )
}

export default state