import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import { API } from "./API";
import Employee from "./EmployeeModel";
import EmployeeModelWithoutID from "./EmployeeModelWithoutID";

export const deleteEmployeeById = (id: string):void => {
  API.delete(`employee/${id}`);
};

export const login =  (
  email: string | FormDataEntryValue | null,
  password: string | FormDataEntryValue | null
) => {
  return API.post("login", {
    email: email,
    password: password,
  })
};

export const getAllEmployees = () => {
  return API.get("employee");
};

export const getEmployeeById = (id: number) => {
  return API.get(`employee/${id}`);
};

export const updateEmployeeByID = (id: number, employee: EmployeeModelWithoutID) => {
  return API.put(`employee/${id}`, employee)
}

export const createEmployee = (employee: EmployeeModelWithoutID) => {
  return API.post("employee", employee);
}

export const testAuthenticated = () =>{
  return API.get(`employee/`)
}
