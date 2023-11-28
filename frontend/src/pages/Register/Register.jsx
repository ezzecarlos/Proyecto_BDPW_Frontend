import React from 'react'
import {useState} from 'react'
import axios from "axios"
import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography,} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {useNavigate,} from "react-router-dom"


// Definición del componente funcional Registrar
const Registrar = () => {
  // Creación del tema por defecto
  const defaultTheme = createTheme();
  // Estado para gestionar los datos de entrada del formulario
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    correo_electronico:"",
    
  })
// Estado para gestionar errores durante la solicitud
  const [err,setError] = useState(null)
  // Hook de navegación de React Router
  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
}

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      // Realizar una solicitud POST para registrar al usuario
    await axios.post("/auth/register", inputs)
    // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
    navigate("/login")
    } catch(err){
      // Capturar y gestionar cualquier error en la respuesta de la solicitud
      setError(err.response.data);
    }
  }
  
// Renderización del componente
  return (
    // Proveer el tema por defecto para los componentes de Material-UI
    <ThemeProvider theme={defaultTheme}>
    {/* Imagen de fondo */}
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'url(https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_39639815_subscription_monthly_m-1611921719.webp)', 
      backgroundSize: 'cover',
      opacity: 0.7,
      zIndex: -1,
    }}></div>

    {/* Contenedor formulario registro */}
    <Container component="main" maxWidth="xs" 
      style={{ 
        marginTop: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        borderRadius: '8px', 
        padding: '20px', 
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required type='text'
            fullWidth
            label="RUT"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required type = 'text'
            fullWidth
            name="password"
            label="Contraseña"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            type="email" // Usar type="email" para validar el formato de correo electrónico
            name="email" // Nombre del campo para el correo electrónico
            label="Correo Electrónico" // Etiqueta del campo
            autoComplete="email" // Autocompletar para correo electrónico
            onChange={handleChange} // Manejar cambios en el formulario
          />

          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrar persona
          </Button>
          {err &&<p>{err}</p>}
          
        </Box>
      </Box>
  
    </Container>
  </ThemeProvider>
)
}
// Exportar el componente Registrar como componente por defecto
export default Registrar