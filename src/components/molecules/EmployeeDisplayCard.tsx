import React from "react";
import Employee from "../../employee/EmployeeModel";
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
    <Card
      elevation={7}
      key={employee.id?.toString()}
      sx={{ minWidth: 275, borderRadius: 3, maxWidth: 275,  }}
    >
      <CardContent>
        <Typography variant="body2">ID: {employee.id?.toString()}</Typography>
        <Typography variant="body2">
          Last Name: {employee.first_name}
        </Typography>
        <Typography variant="body2">
          First Name: {employee.last_name}
        </Typography>
        <Typography variant="body2">
          Birth date: {employee.birth_date}
        </Typography>
        <Typography variant="body2">Hire Date: {employee.hire_date}</Typography>
        <Typography variant="body2">
          Gender: {getGender(employee.gender)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/employee/${employee.id}`}>
          details
        </Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeDisplayCard;
