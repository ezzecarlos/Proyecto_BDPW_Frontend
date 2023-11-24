import React, {useState} from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography, Card, CardContent, CardMedia, Button,} from "@mui/material";
import ListarMascotas from "./components/ListarMascotas";
import Mapa from "./components/Mapa";
import gato from './images/gato.png';
import perro from './images/perro.png';
import { Link } from 'react-router-dom';




function Home() {
  const imageStyle = {
    width: '250px', // Cambia este valor para ajustar el ancho de las imágenes
    height: '210px', // Para mantener la proporción al cambiar el ancho
  
  };
  const [hoverPerro, setHoverPerro] = useState(false);
  const [hoverGato, setHoverGato] = useState(false);
  return (
    
    <PageContainer title="Pagina inicio" description="">
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
    <Box display="flex" alignItems="center"> {}
      <img
        src="https://www.diariomayor.cl/temuco/images/mujer_abrazando_a_su_mascota.jpg"
        alt="Imagen"
        style={{
          width: '400px', 
          height: '400px', 
          borderRadius: '50%', 
          marginRight: '20px'  
        }}
      />
      <div>
        <p>¡Bienvenido a Nuestro refugio de animales!</p>
        <br />
        <p>En nuestro refugio de animales, estamos comprometidos con la mision de conectar
          a los animales necesitados con con hogares amorosos. Nuestro equipo de apasionados 
          amantes de los animales trabaja incansablemente para brindar una segunda oportunidad
          a esos animales que están buscando un lugar para refugiarse.
        </p>
      </div>
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
  <Box style={{ display: 'flex', marginLeft:"290px", marginTop:'30px' }}>
    <Link to="Error" style={{ textDecoration: 'none', width:'300px', marginRight: '10px', display: 'inline-block' }}>
      <Card style={{ width: '100%', marginTop: '15px',marginRight:'10px', transition: 'transform 0.3s ease-in-out', 
        transform: hoverPerro ? 'scale(1.05)' : 'scale(1)',}} 
        onMouseEnter={() => setHoverPerro(true)}
        onMouseLeave={() => setHoverPerro(false)}>
          <CardContent>
            <CardMedia
              component="img"
              image={perro}
              alt="Perro"
              style={imageStyle}
            />
          </CardContent>
        </Card>
        </Link>
      <Link to="Login" style={{ textDecoration: 'none',width:'300px', display: 'inline-block', }}> 
        <Card style={{ width: '100%', marginTop: '15px', marginLeft: '100px',  transition: 'transform 0.3s ease-in-out', 
        transform: hoverGato ? 'scale(1.05)' : 'scale(1)'}}
        onMouseEnter={() => setHoverGato(true)}
        onMouseLeave={() => setHoverGato(false)}
        >
          <CardContent>   
            <CardMedia
              component="img"
              image={gato}
              alt="Gato"
              style={imageStyle}
            />
          </CardContent>
        </Card>
        </Link>
        
  </Box>

<Box style={{ marginTop: '40px' }}>
  <Mapa />
</Box>
</PageContainer>

      
    

    
  );
}


export default Home;
