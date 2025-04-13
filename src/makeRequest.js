import axios from "axios"

const url = import.meta.env.VITE_REACT_APP_API_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_TOKEN;


export const makeRequest = axios.create({
  baseURL: url,
  headers:{
    Authorization: "bearer " + apiKey
  }
});