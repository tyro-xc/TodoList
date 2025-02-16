import axios from "axios";

// const baseURL = "http://localhost:8080";
const baseURL = "/api";
const instance = axios.create({ baseURL });

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    alert("service error");
    return Promise.reject(err);
  }
);
export default instance;
