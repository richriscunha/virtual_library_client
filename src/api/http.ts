import axios from "axios";

const API_PORT = process.env.REACT_APP_API_PORT || 3030;

const instance = axios.create({
  baseURL: `http://localhost:${API_PORT}/api/books`,
  timeout: 3500,
});

export default instance;
