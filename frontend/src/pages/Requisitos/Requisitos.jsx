import React, { useState } from 'react';
import axios from 'axios';

const TuComponente = () => {
  const [nombreAnimal, setNombreAnimal] = useState('');
  const [detallesAnimal, setDetallesAnimal] = useState(null);
  const [error, setError] = useState(''); // Estado para manejar errores

  const obtenerDetalles = async () => {
    setError(''); // Limpiar errores previos
    if (!nombreAnimal) {
      setError('Por favor, ingrese un nombre de animal.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8800/api/animal/${nombreAnimal}`);
      console.log('Respuesta del servidor:', response.data);
      setDetallesAnimal(response.data);
    } catch (error) {
      console.error('Error al obtener detalles del animal:', error);
      setError('Error al obtener detalles del animal. Por favor, intente nuevamente.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nombreAnimal}
        onChange={(e) => setNombreAnimal(e.target.value)}
        placeholder="Nombre del animal"
      />
      <button onClick={obtenerDetalles}>Obtener Detalles</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {detallesAnimal && (
        <div>
          <h2>Detalles del Animal</h2>
          <p>Nombre: {detallesAnimal.nombre}</p>
          <p>Raza: {detallesAnimal.raza}</p>
          <p>Género: {detallesAnimal.genero}</p>
          {/* Otras propiedades del animal */}
        </div>
      )}
    </div>
  );
};

export default TuComponente;
