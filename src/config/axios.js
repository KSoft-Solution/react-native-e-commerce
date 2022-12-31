import axios from "axios";
import { baseURL } from "./constants";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
