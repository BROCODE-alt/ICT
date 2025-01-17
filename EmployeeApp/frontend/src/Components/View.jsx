import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Button } from '@mui/material'
import React from 'react'
import axios from 'axios'

const View = () => {

    const [data, setData] = React.useState([])
    axios.get("http://localhost:3004/view")
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    const handledelete = (id) => {
        console.log("deleted" + id)
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
    }
    const handleupdate = (id) => {
        console.log("update" + id)
        axios.put("http://localhost:3004/update/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((value) => {
                            return (
                                <TableRow key={value.id}>
                                    <TableCell>{value.Name}</TableCell>
                                    <TableCell>{value.Age}</TableCell>
                                    <TableCell>{value.Department}</TableCell>
                                    <TableCell>{value.Salary}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" onClick={() => { handledelete(value.id) }}>Delete</Button>
                                        <Button variant="contained" color="warning" onClick={() => { handleupdate(value.id) }}>Update</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default View