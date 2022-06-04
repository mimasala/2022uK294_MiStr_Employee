import { Box, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import Employee from "../../employee/EmployeeModel";
import { getAllEmployees } from "../../employee/EmployeeService";
import EmployeeDisplayCard from "../molecules/EmployeeDisplayCard";
import theme from "./ThemeProvider/ThemeProvider";

const AllEmployees = () => {
  const [employees, setEmployees] = React.useState([
    {
      birth_date: "none",
      first_name: "none",
      last_name: "none",
      gender: "none",
      id: 0,
      hire_date: "none",
    },
  ]);

  useEffect(() => {
    getAllEmployees()
      .then((response) => {
        setEmployees(response["data"]);
      })
      .catch((error) => {
        error.log(error["request"]["responseText"]);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container sx={{ justifyContent: "center" }} spacing={2}>
          {employees.map((emplo: Employee) => (
            <Grid item key={emplo.id?.toString()}>
              <div>
                <EmployeeDisplayCard employee={emplo} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AllEmployees;
