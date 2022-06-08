import React from 'react'
import { Box, Card, Stack, Divider, Snackbar, Alert } from "@mui/material";

interface props {
    message:string
}

const ErrorSnackBar = ({ message, ...props}:props) => {
  return (
    <div>
        <Snackbar {...props}  >
            <Alert severity="success">{message}</Alert>
        </Snackbar>
    </div>
  )
}

export default ErrorSnackBar