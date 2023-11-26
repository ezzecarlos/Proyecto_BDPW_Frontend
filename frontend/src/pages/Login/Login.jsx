import {Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography,} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import {useState} from "react";
import { link, useNavigate } from "react-router-dom";
import axios from "axios";


// Definición del componente funcional Login
const Login = () =>{
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
    // Realizar una solicitud POST para iniciar sesión
    await axios.post("/auth/login", inputs)
    // Redirigir al usuario a la página principal después del inicio de sesión exitoso
    navigate("/")
    } catch(err){
      // Capturar y gestionar cualquier error en la respuesta de la solicitud
      setError(err.response.data);
    }
 };
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
          {/* Casilla de verificación "Recuérdame" */}
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