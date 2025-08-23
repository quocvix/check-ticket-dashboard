import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider
            defaultTheme="system"
            storageKey="vite-ui-theme"
        >
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
