import { ClassNames } from "@emotion/react";
import { Circle } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Crew() {
  const { data:crew ,error, isLoading } = useQuery({
    queryKey: ["crew"],
    queryFn: () =>
      axios.get("http://localhost:3000/crew").then((res) => res.data),
    onError:(error)=>console.log(error)
    });
    const [selectedCrew,setSelectedCrew]=useState(crew && crew[0]);
    const handleClickCrew=(item)=>{setSelectedCrew(item)};
  if (isLoading) {
    return <div>Chargement en cours ...</div>;
   }
  // const [selectedcrew,setSelectedcrew] = useState(null)
  // const handleClickcrew = (crew)=> setSelectedcrew(selectedcrew); 
  return (
    <Stack direction={"row"}>
      <Stack direction={"column-reverse"} alignItems={"center"}>
             <Stack direction={"row"}>
        {
          crew.map((item)=>
            <Circle key={item.id} fontSize="1em" sx={{color: selectedCrew === item ? "white":"#444" }} onClick={()=>handleClickCrew(item)} />
          )
        }
        </Stack>
        <Stack direction={"column"}   padding={5}>
         <Typography variant="h5" color={"whitesmoke"} >MEET YOUR CREW</Typography>
         <Typography variant="h6" color={"whitesmoke"} >COMMAND</Typography>
        {selectedCrew &&
          <Stack direction={{md:"row",xs:"column"}} justifyContent={{xs:"",md:"center"}} alignItems={"center"}  height={"50vh"}>
            <Box width={"100%"}>
              <Typography variant="h2" color={"whitesmoke"}>{selectedCrew.name}</Typography>
              <Typography color={"whitesmoke"}>{selectedCrew.bio}</Typography>
            </Box>
            <Card
             sx={
              {
                background:"none"
              }
            }
            >
              <CardContent sx={{width:{md:"100%",xs:"50%"}}}>
                <CardMedia
                  component="img"
                  image={selectedCrew.images.png} 
                />
              </CardContent>

            </Card>
          </Stack>
      }
        </Stack>
        
      </Stack>
    </Stack>
  );
}
