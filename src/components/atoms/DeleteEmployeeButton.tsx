import { Button } from "@mui/material";
import React from "react";

interface props {
  handleDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteEmployeeButton = ({ handleDeleteClick }: props) => {
  return (
    <div>
      <Button
        href="/employee"
        sx={{ marginTop: 4 }}
        fullWidth
        onClick={handleDeleteClick}
        variant="outlined"
        color="error"
      >
        Delete Employee
      </Button>
    </div>
  );
};

export default DeleteEmployeeButton;
