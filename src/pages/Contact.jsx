import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAddContactMutation } from '../api/apiSlice';
import { Alert } from '@mui/material';

const Contact = () => {
    const [addContact] = useAddContactMutation()
    const handleSubmit = async(event) => {
        event.preventDefault();
           try {
            const data = new FormData(event.currentTarget);
            console.log({
                name: data.get('name'),
                email: data.get('email'),
                message: data.get('message'),
                subject: data.get('subject'),
            });

            const response = await addContact({
                name: data.get('name'),
                email: data.get('email'),
                message: data.get('message'),
                subject: data.get('subject'),
                }); // Trigger the mutation and send the data to the backend
                console.log('Response from the backend:', response);
                if (response?.data?.status == 200) {
                    alert(response?.data?.message || "Email Sent Successfully!");
                    <Alert severity="success">
                        {"Email Sent Successfully!"} 
                    </Alert>
                }else{
                    alert(response?.data?.message || "Something Went Wrong!");
                    <Alert severity="error">
                        {response?.data?.message || "Something Went Wrong!"}
                    </Alert>
                }
                // Handle the response as needed
            } catch (err) {
                console.error('An error occurred:', err);
            }
    };
    return <>
        <Box

            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom:10
            }}
        >
            <Typography component="h1" variant="h4">
                Contact Me
            </Typography>
            <Typography variant="h5">
                Thank you for your interest in my portfolio.
            </Typography>
            <Typography >
                I'm excited to hear from you. If you have any questions, comments or concerns, please fill out the form below and I will get back to you as soon as possible.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}  >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <TextField
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            autoFocus
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            fullWidth
                            id="subject"
                            label="Subject and Company Name"
                            name="subject"
                            autoComplete="subject"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            autoComplete="message"
                            variant="standard"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    </>
}

export default Contact