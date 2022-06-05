import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:3030/";

const headerConfig = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
};

export const API: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers:headerConfig
});
