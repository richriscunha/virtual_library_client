import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3030/api/books",
  timeout: 3500,
});

export default instance;
