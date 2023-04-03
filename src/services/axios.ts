import axios from "axios";

const mainApiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

mainApiService.interceptors.response.use((res) => res.data);

export default mainApiService;