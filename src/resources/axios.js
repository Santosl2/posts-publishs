import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost/apiSocial/",
});

if (localStorage.getItem("token")) {
  API.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
    "token"
  )}`;
}
