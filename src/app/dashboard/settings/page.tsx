import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <>
      <Header
        title="설정"
        description="계정 및 조직 설정을 관리하세요."
      />

      <div className="p-8">
        <div className="max-w-2xl">
          {/* Profile Section */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-5">
              <h2 className="text-lg font-semibold text-gray-900">프로필</h2>
              <p className="mt-1 text-sm text-gray-600">
                개인 정보와 프로필 설정을 업데이트하세요.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-6">
              <div className="grid grid-cols-2 gap-4">
                <Input label="이름" placeholder="이름을 입력하세요" />
                <Input label="성" placeholder="성을 입력하세요" />
              </div>
              <Input
                label="이메일"
                type="email"
                placeholder="email@example.com"
              />
              <Input
                label="회사명"
                placeholder="회사명을 입력하세요"
              />
            </div>
            <div className="flex justify-end border-t border-gray-200 px-6 py-4">
              <div className="flex gap-3">
                <Button variant="secondary-gray">취소</Button>
                <Button>저장</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
