import React, { useEffect, useState } from "react";

function ListarMascotas() {
  const [listadoMascotas, setListadoMascotas] = useState([]);
  const [banderaCarga, setBanderaCarga] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        // Realiza nuevas solicitudes de datos y agrégalas al listado existente
        const responses = await Promise.all([
          fetch("https://api.thecatapi.com/v1/images/search?limit=5"), // Solicita 5 imágenes de gatos adicionales
          fetch("https://api.thedogapi.com/v1/images/search?limit=5"), // Solicita 5 imágenes de perros adicionales
        ]);

        const data = await Promise.all(responses.map((response) => response.json()));
        
        // Combina los nuevos resultados con el listado existente
        const nuevasMascotas = [...data[0], ...data[1], ...listadoMascotas];
        setListadoMascotas(nuevasMascotas);

        setBanderaCarga(false);
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };

    getData();
  }, [listadoMascotas]); // Agrega listadoMascotas como una dependencia para que se actualice cuando cambie

  return (
    <div>
      {banderaCarga ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {listadoMascotas.map((mascota, index) => (
            <div key={index}>
              <img
                src={mascota.url}
                alt={mascota.breeds ? mascota.breeds[0].name : "Mascota"}
                style={{ maxWidth: "100%" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default ListarMascotas;