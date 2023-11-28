import React from "react";
import Typography from "@mui/material/Typography";

function Nosotros() {
  return (
    <div>
      <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "dark",
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
      <Typography variant="body1">Este es el primer párrafo de texto.</Typography>
      <Typography variant="body1">Este es el segundo párrafo de texto.</Typography>
    </div>
  );
};

export default Nosotros;

