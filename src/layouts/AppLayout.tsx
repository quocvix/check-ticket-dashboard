import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function AppLayout() {
    return (
        <div className="flex min-h-screen">
            <aside className="w-56 space-y-2 border-r p-4">
                <h1 className="text-lg font-semibold">check ticket</h1>
                <nav className="flex flex-col gap-1">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `rounded px-3 py-2 ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        trang chủ
                    </NavLink>
                    <NavLink
                        to="/tickets"
                        className={({ isActive }) =>
                            `rounded px-3 py-2 ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`
                        }
                    >
                        tickets
                    </NavLink>
                </nav>
                <div className="bg-background text-foreground min-h-screen p-6">
                    <div className="flex items-center justify-end">
                        <ModeToggle />
                    </div>
                    <Button variant="outline">Outline</Button>
                </div>
            </aside>

            <main className="flex-1 p-6">
                <Outlet />
            </main>

            {/* tự động khôi phục scroll theo route */}
            <ScrollRestoration />
        </div>
    );
}
