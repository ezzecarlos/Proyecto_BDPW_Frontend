import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Alert, Grid, Avatar, Divider } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets'; // 
const TuComponente = () => {
  const { mascotaName } = useParams();
  const [detallesAnimal, setDetallesAnimal] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const obtenerDetalles = async (url) => {
      try {
        const response = await axios.get(url);
        console.log('Respuesta del servidor:', response.data);
        if (response.data && response.data.length > 0) {
          setDetallesAnimal(response.data);
          return true; // Indica que la petición fue exitosa
        }
      } catch (error) {
        console.error('Error al obtener detalles del animal:', error);
        return false; // Indica que hubo un error
      }
      return false; // Indica que no se encontraron datos
    };

    const realizarConsultas = async () => {
      setError('');
      if (!mascotaName) {
        setError('Por favor, ingrese un nombre de animal.');
        return;
      }

      // Primera consulta
      const exitoPrimeraConsulta = await obtenerDetalles(`http://localhost:8800/api/animal/${mascotaName}`);

      // Si la primera consulta falla, intenta la segunda
      if (!exitoPrimeraConsulta) {
        const exitoSegundaConsulta = await obtenerDetalles(`http://localhost:8800/api/animal1/${mascotaName}`);
        if (!exitoSegundaConsulta) {
          setError('Error al obtener detalles del animal. Por favor, intente nuevamente.');
        }
      }
    };

    realizarConsultas();
  }, [mascotaName]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {error && <Alert severity="error">{error}</Alert>}

      <Grid container spacing={2} justifyContent="center">
        {detallesAnimal && detallesAnimal.length > 0 ? (
          detallesAnimal.map((animal, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card elevation={3} sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, margin: 'auto' }}>
                    <PetsIcon />
                  </Avatar>
                  <Typography variant="h5" component="div" align="center" gutterBottom>
                    Detalles del Animal
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography variant="h5" color="text.secondary" style={{ fontSize: '1.2rem' }}>
                    <strong>Nombre:</strong> {animal.nombre}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" style={{ fontSize: '1.2rem' }}>
                    <strong>Raza:</strong> {animal.raza}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" style={{ fontSize: '1.2rem' }}>
                    <strong>Género:</strong> {animal.genero}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h5" color="text.secondary" style={{ fontSize: '1.2rem' }}>
            No se encontraron detalles del animal.
          </Typography>
        )}
      </Grid>
    </div>
  );
};

// La exportación debe estar aquí, también en el nivel superior
export default TuComponente;
