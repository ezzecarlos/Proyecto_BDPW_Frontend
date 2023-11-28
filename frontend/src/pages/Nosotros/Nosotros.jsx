
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
          En la ciudad de Valparaíso, hay un problema grave con los animales callejeros y aquellos que son abandonados por sus propios dueños. Por eso, para abordar este problema, nosotros como equipo hemos decidido diseñar una página web que pueda asociarse con diferentes sucursales de Valparaíso para una rápida y segura adopción de animales.
Nuestro propósito es facilitar y promover la adopción responsable de animales domésticos en la región de Valparaíso, contribuyendo a reducir la población de animales abandonados y mejorar su bienestar, a través de un sistema que conecta de manera efectiva a refugios y adoptantes potenciales, garantizando la seguridad y el seguimiento adecuado de cada adopción.
El sistema de adopciones de animales en la región de Valparaíso, Chile, utiliza una base de datos NoSQL como su columna vertebral para gestionar eficazmente la información relacionada con los animales disponibles para adopción, así como los detalles de los adoptantes y los registros de adopciones. La elección de una base de datos NoSQL proporciona flexibilidad en la gestión de datos no estructurados, permitiendo un escalado más sencillo y eficiente para adaptarse a las necesidades cambiantes del sistema.
Además, para crear una interfaz de usuario amigable y visualmente atractiva que mejore la experiencia de los usuarios y simplifique el proceso de adopción, se emplea React JS. La utilización de React JS asegura un desarrollo más eficiente y dinámico del frontend, permitiendo una interacción más fluida y una experiencia de usuario mejorada.
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
};
// Exportar el componente Nosotros como componente por defecto
export default Nosotros;



//(≖_≖ )