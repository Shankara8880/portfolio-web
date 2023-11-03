import { Button, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Link } from 'react-router-dom';

const Certificates = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'rgb(56 140 201)',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const certificates = [
        {
            name: "React.js",
            desc: "Coursera",
            url: "skfhsdnzxmnkfushdkfn,di.com",
            moreTo: "/single-project"
        },
        {
            name: "HTML CSS javascript certificate course ",
            desc: "Udemy",
            url: "skfhsdnzxmnkfushdkfn,di.com",
            moreTo: "/single-project"
        },
        {
            name: "Full-Stack Web Development with React Specialization",
            desc: "Coursera",
            url: "https://coursera.org/share/4a45905add58c6042ffef94abc119b50",
            moreTo: "/single-project"
        },
        {
            name: "Google IT Support",
            desc: "Google",
            url: "https://coursera.org/share/77796a5dbdbdc258f83b3e907264a2a2",
            moreTo: "/single-project"
        },
    ]
    return <TableContainer component={Paper} sx={{ marginBottom: "2rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead >
                <TableRow variant="h5" component="div" gutterBottom >
                    <StyledTableCell>Name Of Certificate</StyledTableCell>
                    <StyledTableCell align="right">Company/Organization</StyledTableCell>
                    <StyledTableCell align="right">Certificate Link</StyledTableCell>
                    <StyledTableCell align="right">More ..</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody >
                {certificates.map((item) => <  >
                    <TableRow
                        key={item.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <StyledTableCell component="th" scope="row">
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Typography variant="body2" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Button size="small">
                                <Link to={item.url}>View Cerificate</Link>

                            </Button>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            <Button size="small">
                                <Link to="single-certi">
                                    {item.moreTo}
                                </Link>
                            </Button>
                        </StyledTableCell>
                    </TableRow>
                </>
                )}
            </TableBody>
        </Table>
    </TableContainer>
}

export default Certificates