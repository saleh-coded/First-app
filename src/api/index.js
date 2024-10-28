import axios from "axios";
import { getToken } from "./storage";

const instance = axios.create({
  baseURL: "https://react-native-mini-project-items.eapi.joincoded.com",
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
