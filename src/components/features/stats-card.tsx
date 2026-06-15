import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, type LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 shadow-xs">
          <Icon className="h-5 w-5 text-gray-700" />
        </div>
      </div>
      <div className="mt-4 flex items-end gap-4">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <div
          className={cn(
            "mb-1 flex items-center gap-1 text-sm font-medium",
            trend === "up" ? "text-success-700" : "text-error-700"
          )}
        >
          {trend === "up" ? (
            <ArrowUp className="h-4 w-4" />
          ) : (
            <ArrowDown className="h-4 w-4" />
          )}
          {change}
        </div>
      </div>
    </div>
  );
}
