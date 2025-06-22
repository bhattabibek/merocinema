import axios from "axios";

const axiosCom = axios.create({
  baseURL: "http://www.omdbapi.com",
});

export default axiosCom;