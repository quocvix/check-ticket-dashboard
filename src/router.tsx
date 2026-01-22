import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import NotFound from "@/pages/NotFound";

// lazy pages
const Home = lazy(() => import("@/pages/Home"));
const Tickets = lazy(() => import("@/pages/Tickets"));

function PageLoader() {
    return <div className="p-6">đang tải…</div>;
}

// Vite sẽ set BASE_URL đúng khi deploy (GH Pages, subpath, v.v.)
const basename = import.meta.env.BASE_URL || "/";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            // errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: "tickets",
                    element: (
                        <Suspense fallback={<PageLoader />}>
                            <Tickets />
                        </Suspense>
                    ),
                },
                { path: "*", element: <NotFound /> },
            ],
        },
    ],
    { basename },
);
