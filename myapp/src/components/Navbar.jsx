import React from 'react'
import {Button, AppBar,Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <h2>MYAPP</h2>
            <Link to="/log">
            <Button variant="contained">Login</Button></Link>
            <Link to="/sign">
            <Button variant="contained">Signup</Button></Link>
            <Link to="/state">
            <Button variant="contained">State</Button>
            </Link>
            <Link to="/counter">
            <Button variant="contained">Counter</Button>
            </Link>
            <Link to="/name">
            <Button variant="contained">Name</Button>
          </Link>
          <Link to="/api">
            <Button variant="contained">Api</Button>
          </Link>
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar