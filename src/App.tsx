import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import AllEmployees from "./components/pages/AllEmployees";
import LoginPage from "./components/pages/LoginPage";
import Welcome from "./components/pages/welcome";
import EmployeeAbout from "./components/pages/EmployeeAbout";
import CreateEmployee from "./components/pages/CreateEmployee";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/employee" element={<AllEmployees />} />
          <Route path="/employee/:id" element={<EmployeeAbout />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
