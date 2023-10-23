import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography, } from "@mui/material";
import ListarMascotas from "./components/ListarMascotas";
import Mapa from "./components/Mapa";

function Home() {
  return (
    <PageContainer title="Pagina inicio" description="anashei">
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
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
        >
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
      <Box>
        <div style={{ marginLeft: '0px', marginTop:'0px' }}>
          <p>este texto hay q ponerlo abajo de la imagen redonda</p>
        </div>
    </Box>
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
      <Box
        padding={5}
        display="flex"
        flexDirection="column"
        gap={5}
        backgroundColor="#13CE66"
      >
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
      <ListarMascotas />
      <Box style={{ marginTop: '40px' }}>
        <Mapa />
      </Box>
    </PageContainer>
      
    

    
  );
}


export default Home;
