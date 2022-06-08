import { Box } from "@mui/material";
import React from "react";
import RightAppBar from "../organisms/RightAppBar";

const LoginSuccessfulPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Login Successful</h1>
      </Box>
      <RightAppBar />
    </>
  );
};

export default LoginSuccessfulPage;
