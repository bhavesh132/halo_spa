// src/utils/auth.js
export const getToken = () => {
  return localStorage.getItem("haloToken");
};

export const clearToken = () => {
  localStorage.removeItem("haloToken");
};

export const setToken = (token) => {
  localStorage.setItem("haloToken", token);
};

export default { getToken, clearToken, setToken };
