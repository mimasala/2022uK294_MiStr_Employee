import { AppBar, Box, Button, Card, Divider, Paper, Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import RightAppBar from "./RightAppBar";

const SideBar = () => {
  return (
    <div>
      <Box
        sx={{
          borderRadius: 3,
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
        }}
      >
        <RightAppBar/>
      </Box>
    </div>
  );
};

export default SideBar;
