import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// Utilisation de styled pour créer un composant ListItem avec styles réutilisables
const StyledListItem = styled(ListItem)(({ theme }) => ({
  ":hover": {
    borderBottom: "1px solid white",
  },
  textDecoration: "none",
  color: "inherit",
}));

export default function Navbar() {
  return (
    <Stack maxWidth={"100vw"} 
      color={"whitesmoke"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{display:'flex'
      }}
    >
      <img src={`${logo}`} alt="Logo" />

      <Divider
        sx={{
          width: "30%",
          // color: "whitesmoke",
          backgroundColor: "whitesmoke",
        }}
      />

      <Box sx={{ 
        backdropFilter:"blur(50px)",
        boxShadow: "black"
        }}>
          <MenuIcon className="menu" sx={{display:{xs:"flex",md:"none"}}} />
        <List sx={{display:{xs:"none",md:"flex"}}}>
          <Stack direction={"row"} flexWrap={{xs:"wrap",md:"nowrap"}}>
            <StyledListItem component={Link} to={"/"}>
              <ListItemButton>
                <ListItemText primary="HOME" />
              </ListItemButton>
            </StyledListItem>

            <StyledListItem component={Link} to={"/destinations"}>
              <ListItemButton>
                <ListItemText primary="DESTINATION" />
              </ListItemButton>
            </StyledListItem>

            <StyledListItem component={Link} to={"/crew"}>
              <ListItemButton>
                <ListItemText primary="CREW" />
              </ListItemButton>
            </StyledListItem>

            <StyledListItem component={Link} to={"/technology"}>
              <ListItemButton>
                <ListItemText primary="TECHNOLOGY" />
              </ListItemButton>
            </StyledListItem>
          </Stack>
        </List>
      </Box>
    </Stack>
  );
}
