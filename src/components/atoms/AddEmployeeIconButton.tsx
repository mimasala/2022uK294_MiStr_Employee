import { IconButton } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';

const AddEmployeeIconButton = () => {
  return (
    <IconButton href="/employee/create" aria-label="Create">
      <AddIcon />
    </IconButton>
  );
};

export default AddEmployeeIconButton;
