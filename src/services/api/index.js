import axios from "axios";
const apiConnection = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default apiConnection;