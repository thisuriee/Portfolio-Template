import { api } from './api';
import { User, ApiResponse } from '../types/auth';

class UserService {
  async getUsers(): Promise<User[]> {
    const response = await api.get<ApiResponse<User[]>>('/users');
    return response.data.data || [];
  }

  async updateProfile(data: Partial<Pick<User, 'name' | 'email'>>): Promise<User> {
    const response = await api.put<ApiResponse<User>>('/users/profile', data);
    return response.data.data!;
  }

  async deleteAccount(): Promise<void> {
    await api.delete('/users/profile');
  }
}

export const userService = new UserService();