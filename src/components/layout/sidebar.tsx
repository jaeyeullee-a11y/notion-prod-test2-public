"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  CreditCard,
  HelpCircle,
  LogOut,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigation = [
  { name: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { name: "프로젝트", href: "/dashboard/projects", icon: Layers },
  { name: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "팀", href: "/dashboard/team", icon: Users },
  { name: "문서", href: "/dashboard/documents", icon: FileText },
  { name: "결제", href: "/dashboard/billing", icon: CreditCard },
];

const secondaryNavigation = [
  { name: "설정", href: "/dashboard/settings", icon: Settings },
  { name: "도움말", href: "/dashboard/help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[280px] flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-[72px] items-center gap-2.5 border-b border-gray-200 px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
          <Layers className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-semibold text-gray-900">Untitled</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-4 py-5">
        <div className="flex flex-1 flex-col gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-gray-50 text-brand-700"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5",
                    isActive ? "text-brand-600" : "text-gray-500"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Secondary Navigation */}
        <div className="flex flex-col gap-1 border-t border-gray-200 pt-4">
          {secondaryNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-gray-50 text-brand-700"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5",
                    isActive ? "text-brand-600" : "text-gray-500"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User section */}
      <div className="flex items-center gap-3 border-t border-gray-200 px-6 py-5">
        <Avatar className="h-10 w-10">
          <AvatarImage src="" alt="User avatar" />
          <AvatarFallback>JY</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-semibold text-gray-700">Jay Yeul</span>
          <span className="text-sm text-gray-600">jay@example.com</span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
