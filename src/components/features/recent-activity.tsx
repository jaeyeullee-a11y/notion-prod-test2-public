import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "김수진",
    initials: "KS",
    action: "새 프로젝트를 생성했습니다",
    target: "마케팅 캠페인 2026",
    time: "5분 전",
    badge: { label: "신규", variant: "brand" as const },
  },
  {
    id: 2,
    user: "이준호",
    initials: "LJ",
    action: "문서를 업데이트했습니다",
    target: "API 가이드 v2.1",
    time: "15분 전",
    badge: { label: "업데이트", variant: "warning" as const },
  },
  {
    id: 3,
    user: "박민지",
    initials: "PM",
    action: "작업을 완료했습니다",
    target: "결제 시스템 리팩토링",
    time: "1시간 전",
    badge: { label: "완료", variant: "success" as const },
  },
  {
    id: 4,
    user: "정다영",
    initials: "JD",
    action: "이슈를 보고했습니다",
    target: "로그인 페이지 오류",
    time: "2시간 전",
    badge: { label: "이슈", variant: "error" as const },
  },
  {
    id: 5,
    user: "최우진",
    initials: "CW",
    action: "팀원을 초대했습니다",
    target: "디자인팀 3명 추가",
    time: "3시간 전",
    badge: { label: "팀", variant: "gray" as const },
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-5">
        <h2 className="text-lg font-semibold text-gray-900">최근 활동</h2>
        <p className="mt-1 text-sm text-gray-600">팀원들의 최근 활동 내역입니다.</p>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 px-6 py-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{activity.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-0.5">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">{activity.user}</span>
                {" "}{activity.action}
              </p>
              <p className="text-sm text-gray-600">{activity.target}</p>
            </div>
            <Badge variant={activity.badge.variant} size="sm">
              {activity.badge.label}
            </Badge>
            <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
