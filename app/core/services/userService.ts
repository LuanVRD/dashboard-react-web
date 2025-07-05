import { User } from "@/app/core/models/user";
import { FetchService } from "@/app/core/services/fetchService";

const BASE_ROUTE = "users";

export const UserService = {
  async getUsers(): Promise<User[]> {
    const response = await FetchService.get(`${BASE_ROUTE}`);
    return response.data;
  },
};
