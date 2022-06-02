import React from "react";
import Employee from "../../employeeModel/EmployeeModel";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface props {
  employee: Employee;
}

const EmployeeDisplayCard = ({ employee }: props) => {
  const getGender = (gender: string): string => {
    if (gender === "F") {
      return "Female";
    }
    return "male";
  };
  return (
        <Card sx={{ minWidth: 275, borderRadius:3 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ID: {employee.id}
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  Last Name: {employee.first_name}
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Gender: {getGender(employee.gender)}
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  First Name: {employee.last_name}
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Birth date: {employee.birth_date}
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Hire Date: {employee.hire_date}
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <Button size="small" href={`/employees/${employee.id}` }>details</Button>
          </CardActions>
        </Card>
  );
};

export default EmployeeDisplayCard;