import { createTheme, ThemeProvider } from '@mui/material';
import { useParams } from 'react-router-dom'
import "../../App.css";

const theme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: '#dcc2ff',
    },
    secondary: {
      main: '#dcc2ff',
    },
    background:{
      default: '#36373d'
    }
  },
});

const Employee = () => {
    const {id} = useParams();

  return (
    <ThemeProvider theme={theme}>
          <div>showing post{id}</div>
    </ThemeProvider>
  )
}

export default Employee
