import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import Employee from "../../employee/EmployeeModel";
import { getEmployees } from "../../employee/EmployeeService";
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

const AllEmployees = () => {
  const [employees, setEmployees] = React.useState([
    {
      birth_date: "none",
      first_name: "none",
      last_name: "none",
      gender: "none",
      id:0,
      hire_date:"none"
    }
  ]);

  useEffect(() => {
    getEmployees()
    .then((response : any) => {
    setEmployees(response.data)
   })
   .catch((error : any) => {
     console.log(error);
   });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container sx={{justifyContent:"center"}} spacing={2}>
          {employees.map((emplo: Employee) => (
            <Grid item>
              <EmployeeDisplayCard employee={emplo} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AllEmployees;
