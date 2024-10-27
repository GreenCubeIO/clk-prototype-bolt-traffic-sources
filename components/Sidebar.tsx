"use client";

import { usePathname } from "next/navigation";
import { Rocket, LayoutDashboard, FileText, Activity, Target, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "/dashboard"
  },
  {
    name: "Campaigns",
    icon: <FileText className="w-5 h-5" />,
    path: "/campaigns"
  },
  {
    name: "Traffic",
    icon: <Activity className="w-5 h-5" />,
    path: "/traffic"
  },
  {
    name: "Offers",
    icon: <Target className="w-5 h-5" />,
    path: "/offers"
  },
  {
    name: "Networks",
    icon: <Network className="w-5 h-5" />,
    path: "/networks"
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen border-r bg-background">
      <div className="p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="w-6 h-6" />
          <span className="font-bold text-xl">Clickster</span>
        </Link>
        <ThemeToggle />
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <li key={item.path}>
                <Button
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive && "bg-primary text-primary-foreground"
                  )}
                >
                  <Link href={item.path} className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}