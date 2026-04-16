import { Navigate, Outlet } from "react-router";
import { useUserQuery } from "@/entities/user/api/useUser";

export const AuthGuard = () => {
    const { data: isLoading, isError } = useUserQuery();
    const token = localStorage.getItem('accessToken');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if(isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (isError) {
        localStorage.removeItem('accessToken');
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;

}