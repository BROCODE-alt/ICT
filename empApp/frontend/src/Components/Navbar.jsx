import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, ButtonGroup, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Box>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography variant="h6">
                            Employee App
                        </Typography>&nbsp;&nbsp;

                        <ButtonGroup variant="contained" aria-label="Basic button group">
                            <Link to="/add">
                            <Button>Add</Button></Link>
                            <Link to="/view">
                            <Button>View</Button></Link>  
                        </ButtonGroup>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar