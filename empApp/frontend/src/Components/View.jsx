import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material'
import React from 'react'

const View = () => {
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
                        <TableRow>
                            <TableCell>john</TableCell>
                            <TableCell>60</TableCell>
                            <TableCell>BCA</TableCell>
                            <TableCell>65000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default View