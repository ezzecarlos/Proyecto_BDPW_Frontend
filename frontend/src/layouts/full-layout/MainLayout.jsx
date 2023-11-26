import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

// Definición del componente funcional MainLayout
function MainLayout() {
  // Estado para controlar la carga inicial de la aplicación
  const [loading, isLoading] = useState(true);
  // Efecto secundario que simula una carga de 2 segundos antes de establecer loading en false
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []); // El segundo argumento del useEffect, un array vacío, indica que el efecto solo se ejecutará una vez al montar el componente

  // Renderización condicional basada en el estado de carga
  return (
    <>
    {/* Si la aplicación no está cargando, mostrar el encabezado y el contenido */}
      {!loading ? (
        <>
        <Header />
          <Outlet />
        </>
      ) : (
        // Si la aplicación está cargando, mostrar un fondo y un indicador de carga
        <Backdrop
          sx={{ color: "fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

// Exportar el componente MainLayout como componente por defecto
export default MainLayout;
