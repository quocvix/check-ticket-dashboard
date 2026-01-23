import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";
import { Home, Ticket } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
    {
        title: "Trang chủ",
        url: "/",
        icon: Home,
    },
    {
        title: "Tickets",
        url: "/tickets",
        icon: Ticket,
    },
];

export default function AppLayout() {
    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarHeader className="border-b border-sidebar-border">
                    <div className="flex items-center gap-2 px-2 py-2">
                        <div className="flex size-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Ticket className="size-4" />
                        </div>
                        <span className="font-semibold group-data-[collapsible=icon]:hidden">
                            Check Ticket
                        </span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <NavLink
                                                to={item.url}
                                                end={item.url === "/"}
                                            >
                                                {({ isActive }) => (
                                                    <>
                                                        <item.icon
                                                            className={
                                                                isActive
                                                                    ? "text-primary"
                                                                    : ""
                                                            }
                                                        />
                                                        <span
                                                            className={
                                                                isActive
                                                                    ? "font-medium"
                                                                    : ""
                                                            }
                                                        >
                                                            {item.title}
                                                        </span>
                                                    </>
                                                )}
                                            </NavLink>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarRail />
            </Sidebar>

            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <div className="ml-auto">
                        <ModeToggle />
                    </div>
                </header>
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </SidebarInset>

            {/* tự động khôi phục scroll theo route */}
            <ScrollRestoration />
        </SidebarProvider>
    );
}
