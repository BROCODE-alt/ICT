import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { Axios } from 'axios'

const Api = () => {
    const [data,setData]=React.useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
   }
   )
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>&nbsp;&nbsp;
                            <TableCell>Email</TableCell>&nbsp;&nbsp;
                            <TableCell>City</TableCell>&nbsp;&nbsp;
                        </TableRow>
                    </TableHead>    
                    <TableBody>
                        {data.map((val)=>{
                            return(
                        <TableRow>
                            <TableCell>{val.name}</TableCell>&nbsp;&nbsp;
                            <TableCell>{val.email}</TableCell>&nbsp;&nbsp;
                            <TableCell>{val.address.city}</TableCell>&nbsp;&nbsp;
                        </TableRow>
                        )})}
                    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Api