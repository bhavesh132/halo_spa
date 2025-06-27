// src/api/haloClient.js
import axios from "axios";

const HALO_BASE_URL = import.meta.env.VITE_HALO_API_BASE;

const haloClient = () => {
  return axios.create({
    baseURL: HALO_BASE_URL,
    headers: {
      Accept: "application/json",
    },
  });
};

export default haloClient;
