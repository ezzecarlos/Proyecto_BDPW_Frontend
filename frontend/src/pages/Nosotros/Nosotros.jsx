import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Definición del componente funcional Nosotros
const Nosotros = () => {
  // Renderización del componente
  return (
    <div>
      {/* Título principal */}
      <Typography
        variant="h1"
        style={{
          fontFamily: "Arial",
          fontWeight: 600,
          letterSpacing: ".3rem",
          textAlign: "center",
          fontStyle: "bold",
          marginRight: "20px"
        }}
      >
        ADOPCIÓN DE <br />
        ANIMALES
      </Typography>
      {/* Contenedor de cuadrícula (Grid) */}
      <Grid container direction="row" justify="flex-end" alignItems="right">
        {/* Primer elemento de la cuadrícula */}
        <Grid item xs={6}>
          {/* Imagen de una mujer abrazando a su mascota */}
          <img src="https://www.diariomayor.cl/temuco/images/mujer_abrazando_a_su_mascota.jpg" alt="Imagen" />
        </Grid>
        {/* Segundo elemento de la cuadrícula */}
        <Grid item xs={6}
         style={{ 
          padding: '20px', 
          fontFamily: "Arial",
          letterSpacing: ".3rem", 
          whiteSpace: 'pre'
           }}>
             {/* Párrafo descriptivo */}
          <Typography  variant="body1" align="left">
          {"\t\tBienvenidos a nuestra dedicada organización de manejo de animales en los centros de adopción\n\t\tde la región de Valparaíso, donde el compromiso con el bienestar animal es nuestra máxima\n\t\tprioridad. Enclavados entre los hermosos paisajes de la región, trabajamos incansablemente\n\t\tpara proporcionar un refugio seguro y amoroso a aquellos compañeros de cuatro patas que\n\t\tbuscan un hogar para siempre. Nuestra labor no solo se centra en facilitar adopciones\n\t\tresponsables, sino también en garantizar condiciones óptimas para el cuidado y la rehabilitación\n\t\tde cada animal. Nuestra misión abarca la atención integral, fomentando la conciencia\n\t\tcomunitaria sobre la importancia de cuidar a estos seres leales. Únete a nosotros en nuestra\n\t\ttravesía por construir un futuro más brillante y compasivo para nuestros amigos peludos\n\t\ten Valparaíso."}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
// Exportar el componente Nosotros como componente por defecto
export default Nosotros;



















//(≖_≖ )