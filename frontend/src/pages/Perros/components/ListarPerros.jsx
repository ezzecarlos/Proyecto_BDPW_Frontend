import React, { useState, useEffect,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ListarPerros = () => {
  const [mascotas, setMascotas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const tarjetasPorPagina = 6;
  const totalMascotas = 10; // Número total de mascotas para cargar

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerMascotasDeTheDogAPI = async () => {
      try {
        // Obtener una lista de razas de perros
        const respuestaRazas = await fetch('https://api.thedogapi.com/v1/breeds');
        const razas = await respuestaRazas.json();

        // Obtener imágenes para un subconjunto de razas
        const promesas = razas.slice(0, totalMascotas).map(raza => 
          fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${raza.id}`).then(r => r.json())
        );
        const resultados = await Promise.all(promesas);
        const nuevasMascotas = resultados.map((data, index) => ({
          image: data[0].url, // Asumiendo que cada respuesta tiene al menos una imagen
          name: razas[index].name // Nombre de la raza
        }));
        setMascotas(nuevasMascotas);
      } catch (error) {
        console.error('Error al obtener datos de TheDogAPI:', error);
      }
    };
  
    obtenerMascotasDeTheDogAPI();
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
              <CardContent>
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

export default ListarPerros;
