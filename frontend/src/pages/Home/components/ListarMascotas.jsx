import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

import animal1 from '../images/animal1.jpg';
import animal2 from '../images/animal2.jpg';
import animal3 from '../images/animal3.jpg';
import animal4 from '../images/animal4.jpg';

const mascotas = [
  { image: animal1, name: 'Animal 1' },
  { image: animal2, name: 'Animal 2' },
  { image: animal3, name: 'Animal 3' },
  { image: animal4, name: 'Animal 4' },
];

// Definición de un componente funcional ListarMascotas utilizando Arrow Function
const ListarMascotas = () => {
  // Renderización del componente
  return (
    // Contenedor principal de Material-UI
    <Container>
      {/* Contenedor de cuadrícula de Material-UI con espaciado entre elementos */}
      <Grid container spacing={2}>
        {/* Mapeo sobre el array de mascotas para crear tarjetas individuales */}
        {mascotas.map((mascota, index) => (
           // Cada elemento de la cuadrícula ocupa 6 columnas en dispositivos extra pequeños (xs)
          <Grid item xs={6} key={index}>
            {/* Tarjeta de Material-UI */}
            <Card>
              {/* Componente de medios de Material-UI, en este caso, una imagen */}
              <CardMedia
                component="img"
                height="500"
                image={mascota.image}
                alt={mascota.name}
              />
              {/* Contenido de la tarjeta */}
              <CardContent>
                {/* Título de la mascota */}
                <Typography variant="h6">{mascota.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Exportar el componente ListarMascotas como componente por defecto
export default ListarMascotas;



