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

const ListarMascotas = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {mascotas.map((mascota, index) => (
          <Grid item xs={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={mascota.image}
                alt={mascota.name}
              />
              <CardContent>
                <Typography variant="h6">{mascota.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListarMascotas;



