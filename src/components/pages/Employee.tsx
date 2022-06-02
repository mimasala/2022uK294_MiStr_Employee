import { createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Link, Typography } from "@mui/material";
import Form from "../organisms/Form";
import "../../App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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

const Employee = () => {
    const {id} = useParams();

  return (
    <ThemeProvider theme={theme}>
          <div>showing post{id}</div>
    </ThemeProvider>
  )
}

export default Employee