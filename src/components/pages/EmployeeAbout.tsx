import { Alert, Box, Card, Divider, Snackbar, Stack, ThemeProvider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import "../../App.css";
import UpdateInputField from "../organisms/UpdateInputField";
import InitalValues from "../organisms/InitalValues";
import theme from "./ThemeProvider/ThemeProvider";
import { useEffect, useState } from "react";
import Employee from "../../employee/EmployeeModel";
import {
  getEmployeeById,
  updateEmployeeByID,
} from "../../employee/EmployeeService";
import EmployeeModelWithoutID from "../../employee/EmployeeModelWithoutID";
import { State } from "./LoginPage";

const EmployeeAbout = () => {


  const { id } = useParams();

  const [successMessage, setSuccessMessage] = useState("");
  const [openSnack, setOpenSnack] = useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = openSnack;
  const handleClose = () => {
    setOpenSnack({ ...openSnack, open: false });
  };

  const [initialEmployee, setinitialEmployee] = useState<Employee>({
    birth_date: "404",
    first_name: "404",
    last_name: "404",
    gender: "404",
    id: 0,
    hire_date: "404",
  });

  useEffect(() => {
    getEmployeeById(parseInt(id!))
      .then((value) => {
        const data = value["data"];
        setinitialEmployee(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmitUpdate = (values: EmployeeModelWithoutID) => {
    updateEmployeeByID(parseInt(id!), values)
      .then(() => {
        setSuccessMessage("updated employee");
        setOpenSnack({ ...openSnack, open: true });
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(successMessage);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              margin: 5,
              marginBottom: 8,
            }}
          >
            <Typography variant="h4" gutterBottom>Update this employee</Typography>
            <Stack
              divider={<Divider orientation="vertical" flexItem />}
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <div>
                <InitalValues employee={initialEmployee} />
                <h4>Employee {id}</h4>
              </div>
              <UpdateInputField
                handleSubmitUpdate={(values: any) => handleSubmitUpdate(values)}
              />
            </Stack>
          </Box>
        </Card>
      </Box>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        open={openSnack.open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity="success">{successMessage}</Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default EmployeeAbout;
