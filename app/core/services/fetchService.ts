import axios from "axios";

const API_BASE_URL = "https://localhost:5001";

export const FetchService = {
  async get(route: string) {
    return await axios.get(`${API_BASE_URL}/${route}`);
  },
};
