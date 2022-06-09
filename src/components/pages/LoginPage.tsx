import React, { useState } from "react";
import {
  Alert,
  Button,
  Grid,
  Link,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from "@mui/material";
import "../../App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { login } from "../../employee/EmployeeService";
import LoginForm from "../organisms/LoginForm";
import { useNavigate } from "react-router-dom";
import theme from "./ThemeProvider/ThemeProvider";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const delay = (ms: number | undefined) =>
    new Promise((res) => setTimeout(res, ms));

  const enableButtonOnResponse = async (email: any, password: any) => {
    var successsss = false
    login(email, password)
      .then((value) => {
        console.log("set token");
        localStorage.setItem("token", value.data.accessToken);
        successsss = true
      })
      .catch((error) => {
        setErrorMessage(error.request.responseText);
        setOpenSnack({ ...openSnack, open: true });
      });
      console.log("start wait");
    await delay(500);
    if (successsss) {
      console.log("in success");
      navigate("/success");
    }
  };

  const [errorMessage, setErrorMessage] = React.useState("");
  const [openSnack, setOpenSnack] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = openSnack;
  const handleClose = () => {
    setOpenSnack({ ...openSnack, open: false });
  };

  const checkSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    enableButtonOnResponse(email, password);
  };

  const handleLogout = (): void => {
    localStorage.clear;
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginForm checkSubmit={checkSubmit} />
          <Button onClick={handleLogout}>Logout</Button>
          <Snackbar
            autoHideDuration={6000}
            anchorOrigin={{ vertical, horizontal }}
            open={openSnack.open}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Snackbar>
        </Box>
      </Container>
  );
};

export default LoginPage;
