import axios from "axios";

export const apiUrl = () => process.env.REACT_APP_API_URL;

const getHeaders = ({ locale = "en" } = {}) => ({
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    "Accept-Language": locale,
  },
});

export const getAppSettings = () =>
    axios.get(`${apiUrl()}/child/list`, getHeaders());

export const loginRequest = ({ username, password }) =>
    axios.post(`${apiUrl()}/login`, { username, password });

export const createRoleRequest = (role) =>
    axios.post(`${apiUrl()}/role`, role, getHeaders());