import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => import("../App"), // layout gốc
        children: [
            // { index: true, lazy: () => import("./routes/home") },
            // { path: "about", lazy: () => import("./routes/about") },
            // { path: "*", lazy: () => import("./routes/not-found") },
        ],
    },
]);
