import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, //Отключаем авто-обновление при смене вкладок
            retry:1 // Если запрос упал, попробует еще 1 раз и всё
        }
    }
});


export default function App() {
    return (
        <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
        </head>
        <body>
        <QueryClientProvider client={queryClient}>
        <Outlet />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}