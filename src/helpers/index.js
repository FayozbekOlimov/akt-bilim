import axios from "axios";
import { BASE_URL } from "../api";

export const getCsrftoken = () => {
  if (localStorage.getItem("csrfmiddlewaretoken")) {
    return localStorage.getItem("csrfmiddlewaretoken");
  }
  axios.get(BASE_URL + "get_csrf_token").then((data) => {
    localStorage.setItem("csrfmiddlewaretoken", data.data.csrf_token);
  });
};
