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
          {"\t\tEn la ciudad de Valparaíso, hay un problema grave con los animales callejeros y aquellos que son\n\t\tabandonados por sus propios dueños. Por eso, para abordar este problema, nosotros como\n\t\tequipo hemos decidido diseñar una página web que pueda asociarse con diferentes sucursales\n\t\tde Valparaíso para una rápida y segura adopción de animales, por lo que.\n\t\tNuestro propósito es facilitar y promover la adopción responsable de animales domésticos en la\n\t\tregión de Valparaíso, contribuyendo a reducir la población de animales abandonados y mejorar\n\t\tsu bienestar, a través de un sistema que conecta de manera efectiva a refugios y adoptantes\n\t\tpotenciales, garantizando la seguridad y el seguimiento adecuado de cada adopción.\n\t\tEl sistema de adopciones de animales en la región de Valparaíso, Chile, utiliza una base de datos\n\t\tNoSQL como su columna vertebral para gestionar eficazmente la información relacionada con los\n\t\tanimales disponibles para adopción, así como los detalles de los adoptantes y los registros de\n\t\tadopciones. \n\t\tLa elección de una base de datos NoSQL proporciona flexibilidad en la gestión de datos no\n\t\testructurados, permitiendo un escalado más sencillo y eficiente para adaptarse a las necesidades\n\t\tcambiantes del sistema.\n\t\tAdemás, para crear una interfaz de usuario amigable y visualmente atractiva que mejore la\n\t\texperiencia de los usuarios y simplifique el proceso de adopción, se emplea React JS. \n\t\tLa utilización de React JS asegura un desarrollo más eficiente y dinámico del frontend,\n\t\tpermitiendo una interacción más fluida y una experiencia de usuario mejorada.\n\t\tLa integración de React JS garantiza que los usuarios puedan navegar fácilmente por el sistema,\n\t\tbuscar animales según sus preferencias y presentar solicitudes de adopción de manera sencilla,\n\t\tlo que en última instancia promueve un mayor número de adopciones responsables en la región."}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
// Exportar el componente Nosotros como componente por defecto
export default Nosotros;



















//(≖_≖ )