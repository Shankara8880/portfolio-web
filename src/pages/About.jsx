import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, Box, Card, Container, Typography } from '@mui/material';
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
    return <Container Container maxWidth="lg">
        <Box component="center">
            <Card sx={{ maxWidth: "x1", margin: 4 }}>
                <Typography variant='h3'>
                    <Avatar
                        alt="Shankar Bevale"
                        src="src/documents/profile.jpg" 
                        sx={{ width: 250, height: 250, margin: "1rem" }}
                    />
                    <PrintText text={text} />
                </Typography>
                <Typography variant='h4' sx={{ margin: "1rem" }}>
                    Name : Shankar Bevale
                </Typography>
                {/* <Typography variant='h4' sx={{ margin: "1rem" }}>
                    Skills

                </Typography> */}
                <Typography variant='h5' sx={{ marginTop: "4rem" }}>
                    I am a B.Tech Computer Science student at MGM's Jawaharlal Nehru
                    Engineering College, Aurangabad. I have a keen interest in learning new
                    technologies and utilizing my skills to solve real-life problems and
                    contribute towards the growth of the particular organization.
                </Typography>
            </Card>
        </Box>

    </Container>
}
export default About