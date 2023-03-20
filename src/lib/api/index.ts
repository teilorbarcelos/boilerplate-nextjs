import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.example.com/api",
});

export default api;
