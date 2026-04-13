import { Outlet } from "react-router";
import { Header } from "@/widgets/Header";

export default function BaseLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}