import * as React from "react";
import "../../App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";

interface props{
  checkSubmit:(event: React.FormEvent<HTMLFormElement>) => void
}

const LoginForm = ({checkSubmit}:props) => {



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    checkSubmit(event)
  };
  return (
    <Box
      component="form"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(event)
      }}
      noValidate={false}
      sx={{ mt: 1 }}
    >
      <TextField
        onChange={formik.handleChange}
        value={formik.values.email}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.password}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;