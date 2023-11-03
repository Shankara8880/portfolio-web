import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Container, Grid, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom'

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Todo list with Ant Design (MERN)",
            desc: "Tech stack : HTML,Ant Design,React.js,Redux,Node.js,MongoDB",
            url: "https://nutty-sneakers-frog.cyclic.app/",
            moreTo: "single-project"
        },
        {
            id: 2,
            name: "Jwellery Management System (POS) ",
            desc: "Tech stack : HTML,Bootstrap,React.js,Redux,Node.js,MongoDB",
            url: "skfhsdnzxmnkfushdkfn,di.com",
            moreTo: "single-project"
        },
        {
            id: 3,
            name: "QR Code Genrator",
            desc: "Tech stack : HTML,Bootstrap,React.js ",
            url: "https://github.com/Shankara8880/QR-generstor",
            moreTo: "single-project"
        },
        {
            id: 4,
            name: "Fipkart Clone",
            desc: "Tech stack : HTML,Bootstrap,React.js,Redux,Node.js,MongoDB",
            url: "https://railway-filpkart-clone-production.up.railway.app",
            moreTo: "single-project"
        },
    ]
    return <Box>
        <Container maxWidth="lg">
            <Grid container spacing={0}>
                {
                    projects.map(item => <Grid item xs={6}>
                        <Card sx={{ maxWidth: "x1", margin: 4 }} >
                            <CardContent>
                                {/* <Alert variant="filled" severity="info">
                                This is a success alert — check it out!
                            </Alert> */}
                                <Typography style={{ backgroundColor: 'rgb(56 140 201)', padding: "2rem", color: "white" }} gutterBottom height="140" severity="info" variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <LinearProgress color="info" />
                                <Typography variant="body2" color="text.secondary">
                                    {item.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                    <Link style={{ textDecoration: "none" }} to={item.url}>View Project</Link>
                                </Button>
                                <Link to={`/projects/${item.moreTo}/${item.id}`}>
                                    <Button size="small">
                                        See in Detail...
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    </Box>
}

export default Projects