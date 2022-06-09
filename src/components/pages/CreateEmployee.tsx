import { ThemeProvider } from "@emotion/react";
import { Box, Card, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import EmployeeModelWithoutID from "../../employee/EmployeeModelWithoutID";
import {
  createEmployee,
  updateEmployeeByID,
} from "../../employee/EmployeeService";
import CreateInputField from "../organisms/CreateInputField";
import theme from "./ThemeProvider/ThemeProvider";
import SuccessSnackBar from "../atoms/SuccessSnackBar";
import CreateInputField from "../organisms/CreateInputField";

const CreateEmployee = () => {
  const [open, setOpen] = useState(false);

  const handleSubmitUpdate = (values: EmployeeModelWithoutID) => {
    createEmployee(values)
      .then((value) => {
        console.log(value);
        setOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              borderRadius: 5,
            }}
            elevation={3}
          >
            <Box
              sx={{
                margin: 5,
                marginBottom: 8,
              }}
            >
              <CreateInputField
                handleSubmitUpdate={(values: any) => handleSubmitUpdate(values)}
              />
            </Box>
          </Card>
        </Box>
        <Snackbar autoHideDuration={3000} open={open} onClose={handleClose}>
          <Alert severity="success">Added Employee</Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  );
};

export default CreateEmployee;
