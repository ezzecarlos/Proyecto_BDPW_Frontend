import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// Definición del componente funcional Header
const Header = () => {
    // Renderización del componente
    return (
      // Barra de aplicación de Material-UI con posición fija y estilo de fondo
        <AppBar position="static" style={{ backgroundColor: '#D4956A' }}> {/* Estilo agregado aquí */}
        {/* Barra de herramientas para colocar elementos en la barra de aplicación */}
            <Toolbar>
                {/* Título en la barra de aplicación con estilo para que crezca automáticamente */}
                <Typography variant="h6" style={{ flexGrow: 1,textAlign: 'left' }}>
                    {/* Contenido del título (esta vacío en este caso) */}
                </Typography>
                {/* Botón de navegación para el enlace a la página Home */}
                <Button color="inherit" component={Link} to="/">Inicio</Button>
                {/* Botón de navegación para el enlace a la página Nosotros */}
                <Button color="inherit" component={Link} to="/Nosotros">Nosotros</Button>
                {/* Botón de navegación para el enlace a la página Register */}
                <Button color="inherit" component={Link} to="/Register">Registrarse</Button>
                {/* Botón de navegación para el enlace a la página Login */}
                <Button color="inherit" component={Link} to="/Login">Iniciar sesión</Button>
             
            </Toolbar>
        </AppBar>
    );
};
// Exportar el componente Header como componente por defecto
export default Header;
