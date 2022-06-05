import { Alert } from '@mui/material'
import React from 'react'

interface props {
  errorMessage:string
}

const ErrorAlert = ({errorMessage}:props) => {
  return (
    <div>
        <Alert  severity="error">{errorMessage}</Alert>
    </div>
  )
}

export default ErrorAlert