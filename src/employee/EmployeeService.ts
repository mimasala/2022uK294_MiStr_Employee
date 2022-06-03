import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import { API } from "./API";

const deleteEmployeeById = (id: string):void => {
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
