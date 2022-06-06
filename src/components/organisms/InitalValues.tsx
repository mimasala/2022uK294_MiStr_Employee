import { Card, Divider, Stack, Typography } from "@mui/material";
import Employee from "../../employee/EmployeeModel";

interface props {
  employee: Employee;
}

const getFullGenderName = (gender: string) => {
  if (gender.toLocaleLowerCase() === "f") {
    return "Female";
  } else if (gender.toLocaleLowerCase() === "m") {
    return "Male";
  }
  return "Other";
};

const InitalValues = ({ employee }: props) => {
  return (
    <div>
      <Stack spacing={2}>
        <Card elevation={2} variant="outlined">
          <Stack divider={<Divider orientation="horizontal" flexItem />}>
            <Typography sx={{ fontSize: 14, margin: 1 }} gutterBottom>
              {employee.last_name}
            </Typography>
            <Typography sx={{ fontSize: 14, margin: 1 }} gutterBottom>
              {employee.first_name}
            </Typography>
            <Typography sx={{ fontSize: 14, margin: 1 }} gutterBottom>
              {employee.birth_date}
            </Typography>
            <Typography sx={{ fontSize: 14, margin: 1 }} gutterBottom>
              {employee.hire_date}
            </Typography>
            <Typography sx={{ fontSize: 14, margin: 1 }} gutterBottom>
              {getFullGenderName(employee.gender)}
            </Typography>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
};

export default InitalValues;
