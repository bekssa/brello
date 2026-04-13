import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("./layouts/BaseLayout.tsx", [
        index("../pages/hero/ui/Page.tsx"),
        route("login", "../pages/login/ui/Page.tsx"),
        route("signup", "../pages/signup/ui/Page.tsx"),
        route("rooms", "../pages/rooms/ui/Page.tsx"),
        route("profile", "../pages/profile/ui/Page.tsx"),
        route("room/:id", "../pages/room/ui/Page.tsx"),
    ]),
] satisfies RouteConfig;