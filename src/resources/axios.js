import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost/apiSocial/",
});

//API.defaults.headers.common["Authorization"] = "Bearer " + (localStorage.getItem("token") ? localStorage.getItem("token") : null);