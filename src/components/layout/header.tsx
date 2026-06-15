"use client";

import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function Header({ title, description, actions }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="검색..."
            className="pl-11"
          />
        </div>
        <button className="relative rounded-lg border border-gray-300 p-2.5 text-gray-500 shadow-xs hover:bg-gray-50">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-error-500 text-[10px] font-medium text-white">
            3
          </span>
        </button>
        {actions}
      </div>
    </header>
  );
}
