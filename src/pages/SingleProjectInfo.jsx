import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Link,
} from '@material-ui/core';
import { Grid, List, ListItem, ListItemText } from '@mui/material';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        marginBottom: '20px',
    },
    content: {
        flex: '1 0 auto',
    },
    media: {
        width: '400px',
        height: 'auto',
        objectFit: 'cover',
    },
});


const SingleProjectInfo = () => {
    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));
    const classes = useStyles();
    const { id } = useParams()
    const singleProject = [
        {
            id: 1,
            name: "Todo list with Ant Design (MERN)",
            problemStatement: "Implement Todo List using Ant Design in MERN Stack ",
            solution: "Learn Ant Design frameWork and then implement it",
            techStack: ["HTML", "Ant Design", "React.js", "Redux", "Node.js", "MongoDB"],
            url: "https://nutty-sneakers-frog.cyclic.app/",
            images: [""]
        },
        {
            id: 2,
            name: "Jwellery Management System (POS) ",
            techStack: ["HTML", "Bootstrap", "CSS", "Js", "React.js", "Redux", "Node.js", "MongoDB"],
            url: "skfhsdnzxmnkfushdkfn,di.com",
            images: [""]
        },
        {
            id: 3,
            name: "QR Code Genrator",
            problemStatement: "Generate QR Code for input information and set it's size according to user",
            solution: "Used Google QR code link ",
            techStack: ["HTML", "Bootstrap", "React.js "],
            url: "https://github.com/Shankara8880/QR-generstor",
            images: [""]
        },
        {
            id: 4,
            name: "Flipkart Clone",
            problemStatement: "Implement Flipkart using Material UI Design in MERN Stack , for admin As well as users ",
            solution: "1) Create a RESTful API to handle CRUD (create, read, update, delete) operations for products, categories, orders, and users. 2) Set up user authentication and authorization using JSON Web Tokens (JWT) and bcrypt.",
            techStack: ["HTML", "Ant Design", "React.js", "Redux", "Node.js", "MongoDB"],
            url: "https://railway-filpkart-clone-production.up.railway.app",
            images: [""]
        },
    ]
    return <>
        <Container maxWidth="lg">
            {
                singleProject.map(single => single.id == id && <Card className={classes.card}>
                    <div>
                        <CardMedia
                            className={classes.media}
                            // image={single.images[0]}
                            title={single.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Project Name:  {single.name}
                            </Typography>
                            <Typography variant="body2" color="error" component="p">
                                Problem Statement: {single.problemStatement}
                            </Typography>
                            <Typography variant="body2" color="primary" component="p">
                                Solution for project {single.solution}
                            </Typography>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ mt: 4, mb: 2 }} variant="body2" component="p">
                                    Tech Stack:
                                </Typography>
                                <>
                                    <List dense={true}>
                                        {
                                            single.techStack.map(item => <ListItem>
                                                <DoubleArrowRoundedIcon />
                                                <ListItemText
                                                    primary={item}
                                                // secondary={'Secondary text'}
                                                />
                                            </ListItem>)
                                        }

                                    </List>
                                </>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                    Text only
                                </Typography>
                                <Demo>
                                    <List dense={true}>
                                        <ListItem>
                                            <ListItemText
                                                primary="Single-line item"
                                            // secondary={secondary ? 'Secondary text' : null}
                                            />
                                        </ListItem>
                                    </List>
                                </Demo>
                            </Grid>
                            Link OF Project :
                            <Link href={single.url} target="_blank" rel="noopener">
                                View project
                            </Link>
                        </CardContent>
                    </div>
                </Card>)
            }
        </Container>
    </>
}

export default SingleProjectInfo