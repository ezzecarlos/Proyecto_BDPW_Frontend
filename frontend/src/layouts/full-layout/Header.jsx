import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
/*COMENTARIO DE PRUEBAA */

const Header = () => {
    return (
      
        <AppBar position="static" style={{ backgroundColor: '#D4956A' }}> {/* Agregado estilo aquí */}
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1,textAlign: 'left' }}>
                    
                </Typography>
                <Button color="inherit" component={Link} to="/">Inicio</Button>
                <Button color="inherit" component={Link} to="/Nosotros">Nosotros</Button>
                <Button color="inherit" component={Link} to="/Register">Registrarse</Button>
                <Button color="inherit" component={Link} to="/Login">Iniciar sesión</Button>
                <Button color="inherit" component={Link} to="/Requisitos">Requisitos</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
