import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import AddEmployeeIconButton from "../atoms/AddEmployeeIconButton";
import LoginButton from "../atoms/LoginButton";
import LogoutButton from "../atoms/LogoutButton";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "fixed",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const actions = [
  { icon: <AddEmployeeIconButton />, name: 'Add Employee' },
  { icon: <LoginButton />, name: 'Login' },
  { icon: <LogoutButton />, name: 'Logout' },
];

const SpeedDialEmployee = () => {

  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 50, right: 30 }}
        icon={<AddIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
  );
};

export default SpeedDialEmployee;
