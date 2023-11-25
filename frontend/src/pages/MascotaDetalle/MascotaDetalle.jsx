import React from 'react';
import { useParams } from 'react-router-dom';

const MascotaDetalle = () => {
  const { mascotaName } = useParams();

  return (
    <div>
      <h2>Detalles de {mascotaName}</h2>
      <p>Este es un parágrafo de prueba para la mascota seleccionada.</p>
    </div>
  );
};

export default MascotaDetalle;