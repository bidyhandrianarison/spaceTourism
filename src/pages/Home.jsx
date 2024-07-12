import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Stack, Typography } from '@mui/material'
import bgHome from '../assets/home/background-home-desktop.jpg'
export default function Home() {
  return (
    <Stack direction={"column"} minHeight={"100vh"} gap={20}
    sx={
       {
        backgroundImage: `url(${bgHome})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding:10
       }
    }
    >
        <Navbar />
        <Stack direction={{md:'row',xs:"column"}} justifyContent={"space-evenly"} alignItems={"center"} >
            <Box color={"whitesmoke"} width={{md:"50%"}} padding={7} >
                <Typography>SO, YOU WANT TO TRAVEL TO</Typography>
                <Typography variant='h1'>SPACE</Typography>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
            </Box>
            <Box sx={
                {
                    backgroundColor:"white",
                    pt:10,pb:10,
                    pl:5,
                    pr:5,
                    borderRadius:100                   
                }
            }>
                <Typography variant='h5'>EXPLORE</Typography>
            </Box>
        </Stack>
    </Stack >
  )
}
