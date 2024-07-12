import { ClassNames } from "@emotion/react";
import { Padding } from "@mui/icons-material";
import {
  styled, Box, Card, CardContent, CardMedia, Stack, Typography, List, ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
let myDestination = {}
export default function Destination() {
  const { data: destinations, error, isLoading } = useQuery({
    queryKey: ["destinations"],
    queryFn: () =>
      axios.get("http://localhost:3000/destinations").then((res) => res.data),
    onError: (error) => console.log(error)
  });

  const [selectedDestination, setSelectedDestination] = useState(destinations && destinations[0])
  const handleClickDestination = (destination) => setSelectedDestination(destination);

  if (isLoading) {
    return <div>Chargement en cours ...</div>;
  }
  const StyledListItem = styled(ListItem)(({ theme }) => ({
    ":hover": {
      borderBottom: "1px solid white",
    },
    textDecoration: "none",
    color: "inherit",
  }));

  return (
    <Box >
      <Typography variant="h2" color={"whitesmoke"} textAlign={"center"}>Pick your destination</Typography>
      <Stack   direction={
        {
          xs: "column",
          md: "row"
        }
      } gap={5} >
        <Box sx={{
          backdropFilter: "blur(50px)",
          boxShadow: "black"
        }}>
          <List>
            <Stack direction={"row"} color={"whitesmoke"}>
              {destinations.map((destination) => (
                <StyledListItem key={destination.id}>
                  <ListItemButton onClick={() => handleClickDestination(destination)}>
                    <ListItemText primary={`${destination.name}`} />
                  </ListItemButton>
                </StyledListItem>
              ))}
            </Stack>

          </List>
        </Box>
      </Stack>
      {
        selectedDestination &&

        <Stack direction={{md:"row",xs:"column"}} gap={6} alignItems={"center"}  padding={5}>
          <Card sx={{ background: "none", width: "50%" }}>
            <CardMedia component="img"
              image={selectedDestination.images.png}
            />
          </Card>
          <Box width={{md:"50%"}}>
            <Typography variant="h1" color={"whitesmoke"} >{selectedDestination.name}</Typography>
            <Typography color={"whitesmoke"} >{selectedDestination.description}</Typography>
            <Divider sx={{
              backgroundColor: "whitesmoke",
              mt:5,
              mb:5
            }} />
            <Stack direction={"row"} justifyContent={"space-around"} >
              <Stack direction={"column"}>
                <Typography color={"whitesmoke"}>AVG DISTANCE</Typography>
                <Typography variant="h4" color={"whitesmoke"}>{selectedDestination.distance}</Typography>
              </Stack>
              <Stack direction={"column"}>
                <Typography color={"whitesmoke"} >EST. TRAVEL TIME</Typography>
                <Typography color={"whitesmoke"}  variant="h4">{selectedDestination.travel}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>}

    </Box>
  );
}
