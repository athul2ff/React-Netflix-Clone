import axios from "axios";
import { API_KEY, baseUrl } from "./Constants/constants";

const instance = axios.create({
  baseURL: baseUrl
});

export default instance;
 