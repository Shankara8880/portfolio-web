import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid, LinearProgress } from '@mui/material';
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
            url: "https://text-to-qr-codes-generator.netlify.app",
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
    return  <Grid container style={{marginBottom:100,marginTop:10}} >
                {
                    projects.map(item => <Grid item sm={6} xs={12} style={{padding:10}}>
                        <Card  >
                            <CardContent>
                                <Typography style={{ backgroundColor: 'rgb(56 140 201)', padding: "2rem", color: "white" }} gutterBottom height="140" severity="info" variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <LinearProgress color="info" />
                                <Typography variant="body2" color="text.secondary" style={{marginTop:10,paddingRight:"2rem"}}>
                                    <p>{item.desc}</p>
                                </Typography>
                            </CardContent>
                            <CardActions style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
                                <Button onClick={()=>window.open(item.url, "_blank")} size="small" variant="outlined" style={{marginRight:5}}>
                                    View Project
                                </Button>
                                {/* <Link to={`/projects/${item.moreTo}/${item.id}`}> */}
                                <Link to={`/projects/single-project/${item.id}`}>
                                    <Button size="small" variant="outlined">
                                        See in Detail...
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>)
                }
            </Grid>
}

export default Projects