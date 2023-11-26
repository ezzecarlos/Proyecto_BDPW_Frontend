import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography, } from "@mui/material";
import ListarMascotas from "./components/ListarMascotas";
import Mapa from "./components/Mapa";

// Definición del componente funcional Home
function Home() {
  // Renderización del componente
  return (
    // Uso del componente PageContainer con título y descripción
    <PageContainer title="Pagina inicio" description="anashei">
      {/* Sección de la imagen de fondo y texto centrado */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          width: "100%",
          backgroundImage:
            "url(https://manchas.com/wp-content/uploads/2022/11/pexels-pixabay-209037-scaled.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "18%",
        }}
        minHeight={600}
      >
        {/* Contenedor de texto centrado sobre la imagen de fondo */}
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
        >
          {/* Título grande y estilizado */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
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
        </Box>
      </Box>
      {/* Sección de texto debajo de la imagen redonda */}
      <Box>
        <div style={{ marginLeft: '0px', marginTop:'0px' }}>
          <p>este texto hay q ponerlo abajo de la imagen redonda</p>
        </div>
    </Box>
    {/* Imagen redonda */}
      <Box >
      <img
        src="https://www.diariomayor.cl/temuco/images/mujer_abrazando_a_su_mascota.jpg"
        alt="Imagen"
        style={{
          width: '400px', 
          height: '400px', 
          borderRadius: '50%', 
        }}
      />
      
      </Box>
      {/* Sección de fondo verde con título */}
      <Box
        padding={5}
        display="flex"
        flexDirection="column"
        gap={5}
        backgroundColor="#13CE66"
      >
        {/* Título de la sección de animales en busca de hogar */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontFamily: "Arial",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            fontStyle: "bold",
            marginLeft: "5px"
          }}
        >
          Animales en busca de hogar
        </Typography>
      </Box>
      {/* Componente que lista las mascotas disponibles para adopción */}
      <ListarMascotas />
      {/* Sección del mapa */}
      <Box style={{ marginTop: '40px' }}>
        <Mapa />
      </Box>
    </PageContainer>
      
    

    
  );
}

// Exportar el componente Home como componente por defecto
export default Home;
