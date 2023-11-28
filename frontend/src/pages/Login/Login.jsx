import {Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography,} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import {useState} from "react";
import {useNavigate, } from "react-router-dom";
import axios from "axios";


// Definición del componente funcional Login
const Login = () =>{
// Creación del tema por defecto
  const defaultTheme = createTheme();
  // Estado para gestionar los datos de entrada del formulario
  const [inputs, setInputs] = useState({
  username: "",
  password: "",
  correo_electronico: "",
  
})

  const [setError] = useState(null)
  const navigate = useNavigate();
// Función que maneja los cambios en los campos de entrada del formulario
  const handleChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}
// Función que maneja el envío del formulario
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
    // Realizar una solicitud POST para iniciar sesión
    await axios.post("/auth/login", inputs)
    // Redirigir al usuario a la página principal después del inicio de sesión exitoso
    navigate("/")
    } catch(err){
      // Capturar y gestionar cualquier error en la respuesta de la solicitud
      setError(err.response.data);
    }
 };

 

return (
  // Proveer el tema por defecto para los componentes de Material-UI
  <ThemeProvider theme={defaultTheme}>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'url(https://www.spmas.es/wp-content/uploads/2023/06/Clinica-veterinaria.jpg)', 
      backgroundSize: 'cover',
      opacity: 0.7,
      zIndex: -1,
    }}></div>
    
    <Container component="main" maxWidth="xs" 
      style={{ 
        marginTop: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        borderRadius: '8px', 
        padding: '20px', 
      }}
    >
      <CssBaseline />
      {/* Contenedor principal de la página */}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Icono de candado */}
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        {/* Título de la página */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* Formulario de inicio de sesión */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {/* Campo de entrada para el Rut */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="rut"
            label="Ingresa tu Rut"
            name="rut"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          {/* Campo de entrada para la contraseña */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Correo Electrónico"
            type="email"
            id="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          {/* Botón de inicio de sesión */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          {/* Enlaces para restablecer contraseña y registrarse */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste tu contraseña??
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"No tienes una cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
}
// Exportar el componente Login como componente por defecto
export default Login