import React from 'react'
import {useState} from 'react'
import axios from "axios"
import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography,} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom"


// Definición del componente funcional Registrar
const Registrar = () => {
  // Creación del tema por defecto
  const defaultTheme = createTheme();
  // Estado para gestionar los datos de entrada del formulario
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    
  })
// Estado para gestionar errores durante la solicitud
  const [err,setError] = useState(null)
  // Hook de navegación de React Router
  const navigate = useNavigate();
// Función que maneja los cambios en los campos de entrada del formulario
  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }
// Función que maneja el envío del formulario
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* Contenedor principal de la página */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >{/* Icono de candado */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          {/* Título de la página */}
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          {/* Formulario de registro */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* Campo de entrada para el RUT */}
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
            {/* Campo de entrada para la contraseña */}
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
            {/* Botón de registro */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar persona
              {/* Mostrar mensaje de error, si existe */}
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