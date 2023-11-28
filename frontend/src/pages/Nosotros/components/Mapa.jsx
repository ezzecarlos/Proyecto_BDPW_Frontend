import React from 'react';
import { Typography,  Box,  } from '@mui/material';



const Mapa = () => {
    return (<Box style={{ marginTop: '40px' }}>
    <>
        <Typography variant="h5" gutterBottom>
            Donde nos ubicamos?
        </Typography>
        <div style={{ width: '100%', height: '400px' }}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.043810125157!2d-71.5386866848021!3d-33.02419288089857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de8bf1cb0b3f%3A0x4b0b8b98b7752b36!2s6%20Nte.%20498%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1sen!2s!4v1634262471086!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border:0, borderRadius: '10px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Location"
            ></iframe>
        </div>
    </>
</Box>);   }
export default Mapa;
