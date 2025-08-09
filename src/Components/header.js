import React from 'react';
import {  Container } from '@mui/material';


import SearchBar from './SearchBar';


function Header() {

  return (
    <Container
      sx={{
       backgroundImage: 'url("https://images.unsplash.com/photo-1465064154639-bc188708a175?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Direct image URL
        backgroundSize: 'cover',        // Ensures the image covers the entire container
        backgroundPosition: 'center',   // Centers the image
        height: '500px',                // Adjust height
        color: '#fff',                  // Text color to ensure readability
        display: 'flex',  
        flexDirection:'column',              // Flexbox for centering content
        alignItems: 'center',           // Vertically centers content
        justifyContent: 'flex-start',
        marginTop:'25px',
        borderRadius:"20px"
             // Horizontally centers content
      }}
    >
      
      <SearchBar/>
     
    
 


    </Container>
  );
}

export default Header;

