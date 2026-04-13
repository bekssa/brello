import { Link, useNavigate } from "react-router";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shadow-sm">
            <Link
                onClick={() => navigate("/")} to={"/"}
            >
                BRELLO
            </Link>
            <div className="flex gap-4">
            <Link to={"/rooms"}>Rooms</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
            </div>
        </header>
    );
};