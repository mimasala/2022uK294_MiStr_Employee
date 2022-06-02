import axios, { AxiosInstance } from "axios";
import { Cookies } from "react-cookie";

const headerConfig = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
};

export const getEmployees = (): any => {
  return axios({
    method: "GET",
    baseURL: "http://localhost:3030/employee",
    headers: headerConfig,
  });
};

export const getAccessToken = (
  email: string | FormDataEntryValue | null,
  password: string | FormDataEntryValue | null
): any => {
  axios({
    method: "POST",
    url: "http://localhost:3030/login",
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => {
      localStorage.setItem("token", response["data"]["accessToken"]);
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.request.responseText);
    });
};

export const deleteEmployee = (id: string): any => {
  return axios({
    method: "DELETE",
    baseURL: "http://localhost:3030/employee",
    headers: headerConfig,
    data: {
      id: id,
    },
  });
};
