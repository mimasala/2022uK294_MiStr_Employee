import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import EmployeeModelWithoutID from "../../employee/EmployeeModelWithoutID";
import { State } from "../pages/LoginPage";
import DeleteEmployeeButton from "../atoms/DeleteEmployeeButton";
import { deleteEmployeeById } from "../../employee/EmployeeService";
import { useParams } from "react-router-dom";

const validationSchema = yup.object({
  last_name: yup.string().required('Required'),
  first_name: yup.string().required('Required'),
  birth_date: yup.string().required('Required'),
  hire_date: yup.string().required('Required'),
  gender: yup.string().max(1).required('Required'),
});

interface props {
  handleSubmitUpdate:(values: EmployeeModelWithoutID) => void
}

const UpdateInputField = ({handleSubmitUpdate}:props) => {

  const {id}= useParams()

  const handleDeleteClick = () =>{
    deleteEmployeeById(id!)
  }

  const formik = useFormik({
    initialValues: {
      last_name: "",
      first_name: "",
      birth_date: "",
      hire_date: "",
      gender: "F",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitUpdate(values)
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Stack spacing={5}>
            <TextField
              onChange={formik.handleChange}
              value={formik.values.last_name}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
              margin="normal"
              
              id="last_name"
              label="Last Name"
              name="last_name"
            />

            <TextField
              onChange={formik.handleChange}
              value={formik.values.first_name}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
              margin="normal"
              
              id="first_name"
              label="First Name"
              name="first_name"
            />

            {/* <DatePicker
              mask="____-__-__"
              label="Birth Date"
              inputFormat="yyyy-MM-dd"
              value={formik.values.birth_date}
              onChange={formik.handleChange}
              renderInput={(params) => (
                <TextField
                  name="birth_date"
                  id="birth_date"
                  type="date"
                  {...params}
                />
              )}
            />

            <DatePicker
              mask="____-__-__"
              label="Hire Date"
              inputFormat="yyyy-MM-dd"
              value={formik.values.hire_date}
              onChange={formik.handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                />
              )}
            /> */}

            <TextField
              onChange={formik.handleChange}
              value={formik.values.birth_date}
              InputLabelProps={{
                shrink: true,
                
              }}
              
              margin="normal"
              id="birth_date"
              name="birth_date"
              label="Birth Date"
              type="date"
              
            />
            <TextField
              onChange={formik.handleChange}
              value={formik.values.hire_date}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              id="hire_date"
              name="hire_date"
              label="Hire Date"
              type="date"
              
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={formik.handleChange}
                value={formik.values.gender}
                label="gender"
                name="gender"
              >
                <MenuItem value={"F"}>Female</MenuItem>
                <MenuItem value={"M"}>Male</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Button
            sx={{ marginTop: 4 }}
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
          <DeleteEmployeeButton handleDeleteClick={handleDeleteClick}/>
        </Box>
      </div>
    </LocalizationProvider>
  );
};

export default UpdateInputField;
