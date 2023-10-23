import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React from "react";
import {useState} from "react";
import { link, useNavigate } from "react-router-dom";
import axios from "axios";





const Login = () =>{

  const defaultTheme = createTheme();
  const [inputs, setInputs] = useState({
  username: "",
  password: "",
  
})

  const [err,setError] = useState(null)
  const navigate = useNavigate();

  const handleChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
    await axios.post("/auth/login", inputs)
    navigate("/")
    } catch(err){
      setError(err.response.data);
    }
 };
//     return ( 
//       <div classname= 'auth'>
//         <h1>Login</h1>
//         <form>
//          <input required type="text" placeholder="username" />
//           <input required type="password" placeholder="password" />
//           <button>Login</button>
//           <p>hola</p>
//           <span>No tienes una cuenta? <Link to ="/register">Registrarse</Link>
//           </span>
//        </form>
//      </div>

//  )
return (
  <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Rut"
            label="Ingresa tu Rut"
            name="rut"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
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

export default Login