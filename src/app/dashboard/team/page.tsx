import { Users } from "lucide-react";
import { ComingSoon } from "@/components/features/coming-soon";

export default function TeamPage() {
  return (
    <ComingSoon
      title="팀"
      description="팀원을 초대하고 역할과 권한을 관리하세요."
      icon={Users}
    />
  );
}
