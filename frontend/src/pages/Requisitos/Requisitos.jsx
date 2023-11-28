import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TuComponente = () => {
  const [nombreAnimal, setNombreAnimal] = useState('');
  const [detallesAnimal, setDetallesAnimal] = useState(null);
  const [error, setError] = useState('');
  const [totalFilas, setTotalFilas] = useState(null);
  const [animalNombre, setNombreAnimal2] = useState([])// Estado para almacenar el total de filas

  // Función para obtener detalles de un animal específico
  const obtenerDetalles = async () => {
    setError('');
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

  // Función para contar el total de filas en la base de datos
  const contarFilas = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/count`);
      console.log('Total de filas:', response.data.total);
      setTotalFilas(response.data.total);
    } catch (error) {
      console.error('Error al obtener el total de filas:', error);
      setError('Error al obtener el total de filas. Por favor, intente nuevamente.');
    }
  };

  // useEffect para llamar a contarFilas cuando el componente se monta
  useEffect(() => {
    contarFilas();
  }, []); // El array vacío como segundo argumento asegura que se ejecute solo una vez

  const NombreAnimal = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/nombre`);
      console.log('Datos de nombres de animales:', response.data); // Añade esta línea
      setNombreAnimal2(response.data); // Modifica esta línea
    } catch (error) {
      console.error('Error al obtener el nombre del animal:', error);
      setError('Error al obtener el total de filas. Por favor, intente nuevamente.');
    }
  };

  // useEffect para llamar a contarFilas cuando el componente se monta
  useEffect(() => {
    NombreAnimal();
  }, []); // El array vacío como segundo argumento asegura que se ejecute solo una vez


  

  return (
    <div>
      <input
        type="text"
        value={nombreAnimal}
        onChange={(e) => setNombreAnimal(e.target.value)}
        placeholder="Nombre del animal"
      />
      <button onClick={obtenerDetalles}>Obtener Detalles</button>

      {/* Se elimina el botón para contar filas, ya que se hace automáticamente */}
      {totalFilas !== null && <p>Total de filas: {totalFilas}</p>}
      {animalNombre !== null && (
      <div>
        <h2>Nombres de Animales</h2>
        <ul>
          {animalNombre.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>
      </div>
        )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {detallesAnimal && detallesAnimal.length > 0 ? (
        detallesAnimal.map((animal, index) => (
          <div key={index}>
            <h2>Detalles del Animal</h2>
            <p>Nombre: {animal.nombre}</p>
            <p>Raza: {animal.raza}</p>
            <p>Género: {animal.genero}</p>
            {/* Otras propiedades del animal */}
          </div>
        ))
      ) : (
        <p>No se encontraron detalles del animal.</p>
      )}
    </div>
  );
};

export default TuComponente;
