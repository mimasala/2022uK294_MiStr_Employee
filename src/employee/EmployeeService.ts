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

export const getEmployee = (id: number) => {
  return API.get(`employee/${id}`);
};

// const headerConfig = {
//   "Content-Type": "application/json",
//   Authorization: "Bearer " + localStorage.getItem("token"),
// };

// export const getEmployees = (): any => {
//   return axios({
//     method: "GET",
//     baseURL: "http://localhost:3030/employee",
//     headers: headerConfig,
//   });
// };

// export const getAccessToken = (
//   email: string | FormDataEntryValue | null,
//   password: string | FormDataEntryValue | null
// ): AxiosPromise<any> => {
//   return axios({
//     method: "POST",
//     url: "http://localhost:3030/login",
//     data: {
//       email: email,
//       password: password
//     },
//   })
// };

// export const deleteEmployee = (id: string): any => {
//   return axios({
//     method: "DELETE",
//     baseURL: "http://localhost:3030/employee",
//     headers: headerConfig,
//     data: {
//       id: id,
//     },
//   });
// };
