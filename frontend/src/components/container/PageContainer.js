import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet"; // Importación del componente Helmet para gestionar el título y metadatos de la página


// Definición del componente funcional PageContainer que acepta propiedades (props)
const PageContainer = ({ title, description, children }) => (
  // Renderización del componente
  <div>
    {/* Componente Helmet para gestionar el título y la descripción de la página */}
    <Helmet>
      {/* Título de la página */}
      <title>{title}</title>
      {/* Metaetiqueta para la descripción de la página */}
      <meta name="description" content={description} />
    </Helmet>
    {/* Contenido de la página, que se pasa como children */}
    {children}
  </div>
);
// Definición de las propiedades (propTypes) del componente PageContainer
PageContainer.propTypes = {
  title: PropTypes.string, // Propiedad title de tipo string
  description: PropTypes.string, // Propiedad description de tipo string
  children: PropTypes.node, // Propiedad children de tipo nodo (elemento React)
};

// Exportar el componente PageContainer como componente por defecto
export default PageContainer;
