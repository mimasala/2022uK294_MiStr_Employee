import * as React from "react";
import "../../App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useCookies } from "react-cookie";
import { getAccessToken } from "../../employee/EmployeeService";
import { useFormik } from "formik";





export default function Form() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>):string => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")
    const password = data.get("password")
    return getAccessToken(email,password);
  };

  return (
    <Box
      component="form"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        const token = handleSubmit(event)
        localStorage.setItem("token", token)

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
        autoFocus
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
        Submit
      </Button>
    </Box>
  );
}
