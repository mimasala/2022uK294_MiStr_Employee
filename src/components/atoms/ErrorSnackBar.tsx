import React from 'react'
import { Box, Card, Stack, Divider, Snackbar, Alert } from "@mui/material";

interface props {
    errorMessage:string
}

const ErrorSnackBar = ({ errorMessage, ...props}:props) => {
  return (
    <div>
        <Snackbar {...props}  >
            <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
    </div>
  )
}

export default ErrorSnackBar