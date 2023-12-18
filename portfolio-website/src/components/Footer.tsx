import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        p: 6,
        width: '100%',
        maxWidth: "100%",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "100%", marginLeft: "100px", marginRight: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <img src={LogoImg} alt="Logo" style={{ height: '120px', marginRight: '10px' }} /> */}
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="white" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" color="white">
             Alternant en développement d'application
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="white" style={{ marginBottom: "5px", fontSize: "15px" }}>
              10 rue di Vignemale, 31700 Beauzelle
            </Typography>
            <Typography variant="body2" color="white" style={{ marginBottom: "5px", fontSize: "15px" }}>
              Email: brycefuertes07@gmail.com
            </Typography>
            <Typography variant="body2" color="white" style={{ marginBottom: "5px", fontSize: "15px" }}>
              Phone: +33 6 63 29 35 14
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Me
            </Typography>
            <div style={{ display: "block" }}>
              <Link href="https://www.facebook.com/bryce.fuertes" color="inherit">
                <Facebook sx={{ color: "white", fontSize: 40 }} />
              </Link>
              <Link
                href="https://www.instagram.com/bryce_fts?igshid=OGQ5ZDc2odK2ZA=="
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram sx={{ color: "white", fontSize: 40 }} />
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
      <Box mt={2}>
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Bryce Fuertes
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}
