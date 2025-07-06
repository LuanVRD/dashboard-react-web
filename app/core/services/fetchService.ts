import axios from "axios";

const API_BASE_URL = "https://localhost:5001";

export const FetchService = {
  async get(route: string) {
    return await axios.get(`${API_BASE_URL}/${route}`);
  },
  async put(route: string, data: any) {
    return await axios.put(`${API_BASE_URL}/${route}`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async post(route: string, data: any) {
    return await axios.post(`${API_BASE_URL}/${route}`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
