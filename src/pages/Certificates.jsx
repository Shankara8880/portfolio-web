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
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

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
            name: "Full-Stack Web Development with React Specialization",
            desc: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/9ND348TPL6U9",
            moreTo: "/single-project",
            completedAt:"24-Mar-2022"
        },
        {
            name: "HTML CSS javascript certificate course ",
            desc: "Udemy",
            url: "",
            moreTo: "/single-project",
            completedAt:"4-May-2022"
        },
        {
            name: "Google IT Support",
            desc: "Google",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/FMNFUFTBVV4C",
            moreTo: "/single-project",
            completedAt:"29-Mar-2022"
        },
        {
            name: "Fundamentals of digital marketing",
            desc: "Google",
            url: "",
            moreTo: "/single-project",
            completedAt:"10-Jul-2020"
        },
    ]
    return <TableContainer component={Paper} sx={{ marginBottom: "2rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead >
                <TableRow variant="h5" component="div" gutterBottom >
                    <StyledTableCell>Name Of Certificate</StyledTableCell>
                    <StyledTableCell align="left">Completed On</StyledTableCell>
                    <StyledTableCell align="left">Company/Organization</StyledTableCell>
                    <StyledTableCell align="left">Verified Cerificate</StyledTableCell>
                    <StyledTableCell align="left">Information</StyledTableCell>
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
                        <StyledTableCell align="left">
                            <Typography variant="body2" color="text.secondary">
                                {item.completedAt}
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            <Typography variant="body2" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center" title='View Cerificate'>
                            {<Button size="small" onClick={()=>window.open(item.url)}>
                                <CardMembershipIcon/>
                            </Button>}
                          
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            <Button size="small" title="View Info" >
                                <Link to="single-certi">
                                    {/* {item.moreTo} */}
                                    <ReadMoreIcon/>

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