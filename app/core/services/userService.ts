import { User } from "@/app/core/models/user";
import { FetchService } from "@/app/core/services/fetchService";

const BASE_ROUTE = "users";

export const UserService = {
  async getUsers(): Promise<User[]> {
    const response = await FetchService.get(`${BASE_ROUTE}`);
    return response.data;
  },
  async getUserbyId(id: string): Promise<User> {
    const response = await FetchService.get(`${BASE_ROUTE}/${id}`);
    return response.data;
  },
  async update(user: User): Promise<User> {
    const response = await FetchService.put(`${BASE_ROUTE}`, user);
    return response.data;
  },
  async create(user: User): Promise<User> {
    const response = await FetchService.post(`${BASE_ROUTE}`, user);
    return response.data;
  },
};
