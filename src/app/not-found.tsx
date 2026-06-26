import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center lg:px-8">
      <div className="mx-auto max-w-xl">
        {/* Brand logo */}
        <div className="mb-8 flex items-center justify-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">Untitled</span>
        </div>

        {/* Message */}
        <p className="text-base font-semibold text-brand-600">404 오류</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-gray-900 lg:text-6xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-gray-600">
          요청하신 페이지가 존재하지 않거나, 이동되었거나 주소가 변경되었을 수
          있습니다. 입력하신 주소를 다시 확인해 주세요.
        </p>

        {/* Action */}
        <div className="mt-10 flex items-center justify-center">
          <Link href="/dashboard">
            <Button size="xl">
              <ArrowLeft className="h-5 w-5" />
              대시보드로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
