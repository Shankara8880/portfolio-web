import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from 'react'

const Footer = () => {
    const [value, setValue] = useState(0);
    return <Paper sx={{ position:"fixed",bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            className='nav-link'
            sx={{ backgroundColor: "rgb(56 140 201)", color: "text.error" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                console.log('newValue',newValue);
                if (newValue === 0 ) {
                    window.open("https://www.linkedin.com/in/shankar-bevale-081053216")
                }else if (newValue === 1 ) {
                    window.open("https://github.com/Shankara8880")
                }
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="LinkedInIcon" icon={<LinkedInIcon />} />
            <BottomNavigationAction label="GitHubIcon" icon={<GitHubIcon />} />
            <BottomNavigationAction label="FacebookIcon" icon={<FacebookIcon />} />
        </BottomNavigation>
    </Paper>
}

export default Footer