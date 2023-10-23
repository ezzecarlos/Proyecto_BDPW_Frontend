import React from 'react'
import {useState} from 'react'
import axios from "axios"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const Registrar = () => {


  
  const defaultTheme = createTheme();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    
  })

  const [err,setError] = useState(null)

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      const res = await axios.post("/auth/register", inputs)
      console.log(res)
      
    } catch(err){
      setError(err.response.data);
      //console.log(err)
    }
  }
  

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
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar persona
            </Button>
            {err &&<p>hola</p>}
            
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>
  )
}

export default Registrar