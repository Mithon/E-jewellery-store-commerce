import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = `https://pacific-scrubland-75231.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <h3>Your Total Order Number: {orders.length}</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Order List:">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name:</TableCell>
                            <TableCell align="right">Customer Name:</TableCell>
                            <TableCell align="right">Product Price:</TableCell>
                            <TableCell align="right">Action:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.productName}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right"><button>Delete Action</button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;