import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

const ListarPerros = () => {
  const [mascotas, setMascotas] = useState([]);
  const [nombresAnimales, setNombresAnimales] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const tarjetasPorPagina = 6;
  const [totalMascotas, setTotalMascotas] = useState(null);

  const navigate = useNavigate();

  // Obtiene los nombres de los animales de tu API
  const obtenerNombresAnimales = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/nombre1`);
      setNombresAnimales(response.data);
    } catch (error) {
      console.error('Error al obtener nombres de animales:', error);
    }
  };

  // Cuenta el total de mascotas (gatos) en tu API
  const contarMascotas = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/count1`);
      setTotalMascotas(response.data.total);
    } catch (error) {
      console.error('Error al obtener el total de mascotas:', error);
    }
  };

  // Se llama al cargar el componente
  useEffect(() => {
    obtenerNombresAnimales();
    contarMascotas();
  }, []);

  // Obtiene las imágenes de los gatos de TheCatAPI
  useEffect(() => {
    if (totalMascotas === null || nombresAnimales.length === 0) return;

    const obtenerMascotasDeTheCatAPI = async () => {
      try {
        const promesas = Array.from({ length: totalMascotas }, () => 
          fetch(`https://api.thedogapi.com/v1/images/search`).then(r => r.json())
        );
        const resultados = await Promise.all(promesas);
        const nuevasMascotas = resultados.map((data, index) => ({
          image: data[0].url,
          nombre: nombresAnimales[index] || `Mascota ${index}`,
          id: index
        }));
        setMascotas(nuevasMascotas);
      } catch (error) {
        console.error('Error al obtener datos de TheCatAPI:', error);
      }
    };

    obtenerMascotasDeTheCatAPI();
  }, [totalMascotas, nombresAnimales]);

  // Calcula el total de páginas para la paginación
  const totalPaginas = Math.ceil(mascotas.length / tarjetasPorPagina);

  // Obtiene las mascotas para la página actual
  const mascotasActuales = useMemo(() => {
    const indiceFinal = paginaActual * tarjetasPorPagina;
    const indiceInicial = indiceFinal - tarjetasPorPagina;
    return mascotas.slice(indiceInicial, indiceFinal);
  }, [mascotas, paginaActual, tarjetasPorPagina]);

  // Maneja el clic en una tarjeta de mascota
  const handleCardClick = (mascotaNombre) => {
    navigate(`/mascota/${encodeURIComponent(mascotaNombre)}`);
  };

  // Cambia la página actual
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  // Crea los botones de paginación
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
              onClick={() => handleCardClick(mascota.nombre)}
            >
              <CardMedia
                component="img"
                height="500"
                image={mascota.image}
                alt={mascota.nombre}
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h6">{mascota.nombre}</Typography>
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
