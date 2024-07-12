import { ClassNames } from "@emotion/react";
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Technology() {
  const { data:technology ,error, isLoading } = useQuery({
    queryKey: ["technology"],
    queryFn: () =>
      axios.get("http://localhost:3000/technology").then((res) => res.data),
    onError:(error)=>console.log(error)
    });
    const [selectedtechnology,setSelectedtechnology] = useState(technology && technology[0])
    const handleClicktechnology = (technology)=> {setSelectedtechnology(technology),console.log(selectedtechnology)}; 
  if (isLoading) {
    return <div>Chargement en cours ...</div>;
   }
  return (
    <Box >
      <Typography variant="h5" color={"whitesmoke"} mb={10} >SPACE LAUNCH 101</Typography>
      <Stack justifyContent={"space-between"} alignItems={"center"} direction={
        {
          xs:"column",
          md:"row"
        }
      } gap={5} >
        <Stack height={"100%"} justifyContent={"space-around"} alignItems={"center"}>
          { 
          technology.map((technology,index) => (
          <Box key={technology.id} 
          sx={{
            borderRadius:300,
            pt:1,
            pl:3,
            pr:3,
            pb:1,
            backgroundColor: selectedtechnology===technology ? "white":"none", 
            textAlign:"center"
          }} onClick={()=>handleClicktechnology(technology)} ><Typography sx={{ fontSize:"2rem",color: selectedtechnology===technology ? "black":"white"}}>{index + 1}</Typography></Box>
          ))}
        </Stack>
        { selectedtechnology &&
        <Stack direction={"row"} width={"100%"} gap={5} alignItems={"center"}>
          <Box maxWidth={"50%"}>
            <Typography color={"white"}>THE TERMINOLOGY...</Typography>
            <Typography variant="h3" color={"white"} marginBottom={5} >{selectedtechnology.name}</Typography>
            <Typography color={"white"}>{selectedtechnology.description}</Typography>
          </Box>
          <Card sx={{background:"none"}}>
            <CardContent >
              <CardMedia 
                component="img"
                image={selectedtechnology.images.portrait}
              />
            </CardContent>
          </Card>

        </Stack>
        }
      </Stack>
    </Box>
  );
}
