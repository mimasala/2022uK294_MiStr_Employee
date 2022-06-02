import { createTheme, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { getEmployees } from "../../API/getEmployeeJSON";
import Employee from "../../employeeModel/EmployeeModel";
import EmployeeDisplayCard from "../molecules/EmployeeDisplayCard";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#dcc2ff",
    },
    secondary: {
      main: "#dcc2ff",
    },
    background: {
      default: "#36373d",
    },
  },
});

const employees:Employee[] = [
  {
    id: 1,
    birth_date: "123",
    first_name: "string;",
    last_name: "string;",
    gender: "M",
    hire_date: "string;",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
  {
    id: 4,
    birth_date: "123",
    first_name: "kadsjglksdfg",
    last_name: "askdlfj",
    gender: "F",
    hire_date: "KJSFLKJS",
  },
];

const AllEmployees = () => {
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container wrap="wrap">
        {employees.map((emplo:Employee) => (
          <Grid item xs={2}>
            <EmployeeDisplayCard employee={emplo} />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default AllEmployees;
