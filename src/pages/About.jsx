import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, Box, Card, Container, Grid, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@material-ui/core';
// import { Avatar, Typography } from '';

const About = () => {
    const [text, setText] = useState("MERN Stack Devloper ");
    // This PrintText component is used to print the text each char
    const PrintText = ({ text }) => {
        const variants = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        };

        return (
            <div>
                <AnimatePresence mode='wait'>
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.5 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </div>
        );
    };
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         const char = "p"; // replace with the next character you want to add
    //         setText((prevText) => prevText + char);
    //     }, 100);
    //     return () => clearInterval(timer);
    // }, []);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return <Grid container >
        <Grid style={{padding:10}}>
            <Card style={{padding:12,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography variant={isSmallScreen ? "h6":'h3'} >
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Avatar
                        alt="SB"
                        // src="src/documents/profile.jpg"
                        src="https://i.ibb.co/1nbrb1W/Shankar-profile.jpg"
                        sx={{
                            width: isSmallScreen ? 150 : 250, 
                            height: isSmallScreen ? 150 : 250,
                            margin: "1rem"
                        }}
                        />
                    </div>
                    <PrintText text={text} />
                </Typography>
                <Typography variant={isSmallScreen ? "h7":'h4'} sx={{ margin: "1rem" }}>
                    Name : Shankar Bevale
                </Typography>
                {/* <Typography variant='h4' sx={{ margin: "1rem" }}>
                    Skills

                </Typography> */}
                <Typography variant={isSmallScreen ? "h8":'h5'} >
                    <p>I am a B.Tech Computer Science student at MGM's Jawaharlal Nehru
                    Engineering College, Aurangabad. I have a keen interest in learning new
                    technologies and utilizing my skills to solve real-life problems and
                    contribute towards the growth of the particular organization.</p>
                </Typography>
            </Card>
        </Grid>

    </Grid>
}
export default About