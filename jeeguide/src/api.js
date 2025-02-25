import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api", withCredentials: true });

export const signup = (userData) => API.post("/auth/signup", userData);
export const signin = (userData) => API.post("/auth/signin", userData);
export const logout = () => API.post("/auth/logout");
