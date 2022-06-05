import { IconButton } from "@mui/material";
import React from "react";
import LoginIcon from '@mui/icons-material/Login';

const LoginButton = () => {
  return (
    <div>
      <IconButton href="/login" aria-label="Login">
        <LoginIcon />
      </IconButton>
    </div>
  );
};

export default LoginButton;
