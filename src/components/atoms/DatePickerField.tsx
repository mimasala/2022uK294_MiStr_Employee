import React from "react";
import { FieldInputProps, useField, useFormikContext } from "formik";
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export const DatePickerField = ({ ...props }:any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField<FieldInputProps<any>>(props);
  return (
    <DatePicker
      {...field}
      {...props}
      renderInput={(params) => <TextField {...params} />}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};
