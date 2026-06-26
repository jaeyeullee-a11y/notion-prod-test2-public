import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, MoreHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "프로젝트",
};

const projects = [
  {
    id: 1,
    name: "마케팅 캠페인 2026",
    description: "Q3 마케팅 캠페인 기획 및 실행",
    status: "진행 중",
    statusVariant: "brand" as const,
    members: 5,
    progress: 65,
  },
  {
    id: 2,
    name: "모바일 앱 v2.0",
    description: "모바일 앱 메이저 업데이트",
    status: "검토 중",
    statusVariant: "warning" as const,
    members: 8,
    progress: 40,
  },
  {
    id: 3,
    name: "고객 온보딩 자동화",
    description: "신규 고객 온보딩 프로세스 자동화",
    status: "완료",
    statusVariant: "success" as const,
    members: 3,
    progress: 100,
  },
  {
    id: 4,
    name: "보안 감사",
    description: "연례 보안 감사 및 SOC 2 인증 준비",
    status: "시작 전",
    statusVariant: "gray" as const,
    members: 4,
    progress: 0,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header
        title="프로젝트"
        description="모든 프로젝트를 관리하고 추적하세요."
        actions={
          <Button size="md">
            <Plus className="h-5 w-5" />
            새 프로젝트
          </Button>
        }
      />

      <div className="p-8">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  프로젝트명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  팀원
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                  진행률
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-600">
                  
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {project.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={project.statusVariant}>{project.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {project.members}명
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-brand-600"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
