import React from 'react';
import { Typography, Box } from '@mui/material';
import Mapa from "./components/Mapa";

function Nosotros() {
  const imageUrl = 'https://www.vivesermecoop.cl/wp-content/uploads/2021/08/adopcion-1024x682.jpg'; // Reemplaza 'URL_DE_LA_IMAGEN' con la URL real de la imagen

  return (
    <div>
      <Box sx={{ backgroundColor: '#D1C8C1', padding: '20px' }}>
        <Typography variant="h4" sx={{ color: 'black', fontFamily: 'monospace' }}>
          Acerca de nosotros
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', backgroundColor: '#EDE8E5' }}>
        <div>
          <Typography sx={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1em', lineHeight: '1.6', textAlign: 'justify', padding: '20px', borderRadius: '8px' }}>
            Somos un equipo comprometido con la causa de la adopción animal. Nos dedicamos a encontrar hogares amorosos para perros, gatos y otras mascotas que buscan un lugar donde ser cuidados y queridos. Nuestra labor se centra en conectar animales rescatados con familias que desean brindarles un hogar estable. Más allá de la adopción, ofrecemos cuidados, atención médica y apoyo durante todo el proceso para asegurar el bienestar de cada animal.
          </Typography>
        </div>
        <div>
          <img src={imageUrl} alt="Descripción de la imagen" style={{ width: '400px', height: 'auto', borderRadius: '50%', overflow: 'hidden' }} />
        </div>
      </Box>
      <Box style={{ marginTop: '40px' }}>
         <Mapa />
      </Box>
    </div>
  );
}

export default Nosotros;
