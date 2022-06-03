import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import AllEmployees from "./components/pages/AllEmployees";
import LoginPage from "./components/pages/LoginPage";
import Welcome from "./components/pages/welcome";
import EmployeeAbout from "./components/pages/EmployeeAbout";

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/employee" element={<AllEmployees />} />
          <Route path="/employee/:id" element={<EmployeeAbout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
