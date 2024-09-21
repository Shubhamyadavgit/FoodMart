import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
    <Box sx={{bgcolor:"#1A1A19", textAlign:"center", color:"white", p:3}}>
    <Box sx={{my:3, "& svg":{
        fontSize: "60px", cursor:"pointer",mr:2,
    },
    "& svg:hover":{
        color:"goldenrod",
        transform:'translateX(5px)',
        transition:"all 400ms",
    }
    }}>
    <InstagramIcon />
    <GitHubIcon />
    <XIcon />
    </Box>
    <Typography variant='h5' sx={{'@media (max-width:600px)':{fontSize:'1rem',}}}>
        All  Rights Reserved &copy; 2024
    </Typography>
    </Box>
    </>
  )
}

export default Footer