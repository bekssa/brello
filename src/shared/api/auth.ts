import { apiInstance } from './base';
import type { AuthResponse, UserResponse,RegisterDto,LoginDto } from './types';
export const authApi = {
    register: (data:RegisterDto) => apiInstance.post<AuthResponse>('/auth/register', data),
    login: (data:LoginDto) => apiInstance.post<AuthResponse>('/auth/login', data),
    getMe: () => apiInstance.get<UserResponse>('/auth/me'),
}