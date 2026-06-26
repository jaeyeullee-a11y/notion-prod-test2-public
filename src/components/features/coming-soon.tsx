import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";

interface ComingSoonProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ComingSoon({ title, description, icon: Icon }: ComingSoonProps) {
  return (
    <>
      <Header title={title} description={description} />

      <div className="flex flex-1 items-center justify-center p-8">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-50 shadow-xs">
            <Icon className="h-7 w-7 text-brand-600" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-gray-900">
            준비 중입니다
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {title} 기능은 현재 개발 중이에요. 곧 만나보실 수 있도록 열심히
            준비하고 있습니다.
          </p>
          <Badge variant="brand" size="md" className="mt-6">
            곧 제공 예정
          </Badge>
        </div>
      </div>
    </>
  );
}
