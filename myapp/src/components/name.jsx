import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'

const name = () => {
    var[name,setname]=useState()
    const subhandler=()=>{
        setname("Hadi")
    }
    const subwoofer=()=>{
        setname("Fahad")
    }
    useEffect(()=>{subhandler()},[])

  return (
    <div>
        <h1>Welcome {name}</h1>
        <Button variant="outlined" onClick={subhandler}>hadi</Button>
        <Button variant="outlined" onClick={subwoofer}>fahad</Button>
    </div>
  )
}

export default name