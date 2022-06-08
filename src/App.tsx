import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import AllEmployees from "./components/pages/AllEmployees";
import LoginPage from "./components/pages/LoginPage";
import Welcome from "./components/pages/welcome";
import EmployeeAbout from "./components/pages/EmployeeAbout";
import CreateEmployee from "./components/pages/CreateEmployee";
import ProtectedRoute from "./components/atoms/ProtectedRoute";
import SpeedDialEmployee from "./components/molecules/SpeedDialEmployee";
import SideBar from "./components/organisms/SideBar";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/pages/ThemeProvider/ThemeProvider";
import LoginSuccessfulPage from "./components/pages/LoginSuccessfulPage";
import { CssBaseline } from "@mui/material";
import RightAppBar from "./components/organisms/RightAppBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Welcome />
                  <RightAppBar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee"
              element={
                <ProtectedRoute>
                  <AllEmployees />
                  <SpeedDialEmployee />
                  <RightAppBar />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee/:id"
              element={
                <ProtectedRoute>
                  <EmployeeAbout />
                  <RightAppBar />
                </ProtectedRoute> 
              }
            />
            <Route
              path="/employee/create"
              element={
                <ProtectedRoute>
                  <CreateEmployee />
                   <RightAppBar/>
                </ProtectedRoute>
              }
            />
            <Route path="/success" element={<LoginSuccessfulPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
