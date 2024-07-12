import React from 'react'
import ReactDOM from 'react-dom/client'
import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Destination from './pages/Destination.jsx'
import Navbar from './components/Navbar.jsx'
import bgDestination from './assets/destination/background-destination-desktop.jpg'
import bgCrew from './assets/crew/background-crew-desktop.jpg'
import bgTechnology from './assets/technology/background-technology-desktop.jpg'
import Crew from './pages/Crew.jsx';
import Technology from './pages/Technology.jsx';
const queryC = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/destinations",
    element: (
      <Box 
        sx={
          {
            backgroundImage: `url(${bgDestination})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight:"100vh",
            padding:10
          }}>
        <Navbar />
        <Destination />
      </Box>)
  },
  {
    path: "/crew",
    element: (
      <Box
        sx={
          {
            backgroundImage: `url(${bgCrew})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight:"100vh",
            maxWidth:"100vw",
            padding:10
          }}>
        <Navbar />
        <Crew />
      </Box>)
  },
  {
    path: "/technology",
    element: (
      <Box
        sx={
          {
            backgroundImage: `url(${bgTechnology})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight:"100vh",
            padding:10
          }}>
        <Navbar />
        <Technology />
      </Box>)
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryC} >
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
