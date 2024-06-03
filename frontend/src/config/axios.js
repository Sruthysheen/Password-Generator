import axios from "axios";
import { api } from "./api";

const userApi = axios.create({
  baseURL: api.userBaseURL,
  withCredentials: true,
});

const pwdApi = axios.create({
  baseURL: api.pwdBaseURL,
  withCredentials: true,
});

userApi.interceptors.request.use((api) => {
  const Token = localStorage.getItem("Token");
  if (Token !== null) {
    api.headers.authorization = `Bearer ${Token}`;
  }
  return api;
});

export const userApiRequest = async (api) => {
  const response = await userApi(api);
  return response.data;
};

export const pwdApiRequest = async (api) => {
  const response = await pwdApi(api);
  return response.data;
};
