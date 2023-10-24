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
import {Link, useNavigate} from "react-router-dom"

const Registrar = () => {


  
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
    await axios.post("/auth/register", inputs)
    navigate("/login")
    } catch(err){
      setError(err.response.data);
    }
  }
  

  return (
    <ThemeProvider theme={defaultTheme}>
    {/* Background Image */}
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

    {/* Registration Form Container */}
    <Container component="main" maxWidth="xs" 
      style={{ 
        marginTop: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // White background with 90% opacity
        borderRadius: '8px', // Rounded corners
        padding: '20px', // Padding inside the box
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

export default Registrar