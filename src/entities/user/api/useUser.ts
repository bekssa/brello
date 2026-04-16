import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/shared/api';

export const useUserQuery = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await authApi.getMe();
            return response.data;
        },
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        enabled: !!localStorage.getItem('accessToken'),
    });
};