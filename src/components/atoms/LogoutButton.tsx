import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
const LogoutButton = () => {
  return (
    <div>
      <IconButton onClick={()=>localStorage.clear()} href="/login" aria-label="logout">
        <LogoutIcon />
      </IconButton>
    </div>
  );
};

export default LogoutButton;
