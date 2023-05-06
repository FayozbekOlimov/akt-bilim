import axios from "axios";
import { BASE_URL } from "./urls";

export const BASE_API = axios.create({
  baseURL: BASE_URL,
});
