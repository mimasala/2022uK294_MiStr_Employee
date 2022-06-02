import React from "react";
import { Grid, Link, Typography } from "@mui/material";
import Form from "../organisms/Form";
import "../../App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: '#dcc2ff',
    },
    secondary: {
      main: '#dcc2ff',
    },
    background:{
      default: '#36373d'
    }
  },
});

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
