import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

// Definición de un componente funcional ListarMascotas utilizando Arrow Function
const ListarMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const tarjetasPorPagina = 6;
  const totalMascotas = 10; // Número total de mascotas para cargar

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerMascotasConcurrentes = async () => {
      try {
        const promesas = Array.from({ length: totalMascotas }, () => 
          fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json())
        );
        const resultados = await Promise.all(promesas);
        const nuevasMascotas = resultados.map((data, index) => ({
          image: data.message,
          name: `Animal ${index + 1}`
        }));
        setMascotas(nuevasMascotas);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };
  
    obtenerMascotasConcurrentes();
  }, []);

  const totalPaginas = Math.ceil(mascotas.length / tarjetasPorPagina);

  const mascotasActuales = useMemo(() => {
    const indiceFinal = paginaActual * tarjetasPorPagina;
    const indiceInicial = indiceFinal - tarjetasPorPagina;
    return mascotas.slice(indiceInicial, indiceFinal);
  }, [mascotas, paginaActual, tarjetasPorPagina]);

  const handleCardClick = (mascotaName) => {
    navigate(`/mascota/${mascotaName}`);
  };

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const botonesPaginacion = useMemo(() => (
    Array.from({ length: totalPaginas }, (item, index) => (
      <Button key={index} onClick={() => cambiarPagina(index + 1)}>
        {index + 1}
      </Button>
    ))
  ), [totalPaginas]);

  return (
    // Contenedor principal de Material-UI
    <Container>
      <Grid container spacing={10}>
        {mascotasActuales.map((mascota, index) => (
          <Grid item xs={6} key={index}>
            <Card 
              style={{ marginTop: '100px', width: '500px' }} 
              onClick={() => handleCardClick(mascota.name)}
            >
              <CardMedia
                component="img"
                height="500"
                image={mascota.image}
                alt={mascota.name}
                loading="lazy" // Habilita carga perezosa
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
      <div style={{ marginTop: '20px' }}>
        {botonesPaginacion}
      </div>
    </Container>
  );
};

// Exportar el componente ListarMascotas como componente por defecto
export default ListarMascotas;
