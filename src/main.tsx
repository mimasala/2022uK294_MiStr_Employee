import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import AllEmployees from "./components/pages/AllEmployees";
import Employee from "./components/pages/Employee";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <head>
      <title>Employee Management System</title>
    </head>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/employee" element={<AllEmployees />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
