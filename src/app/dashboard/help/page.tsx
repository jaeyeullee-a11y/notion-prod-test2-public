import { HelpCircle } from "lucide-react";
import { ComingSoon } from "@/components/features/coming-soon";

export default function HelpPage() {
  return (
    <ComingSoon
      title="도움말"
      description="자주 묻는 질문과 가이드, 고객 지원을 확인하세요."
      icon={HelpCircle}
    />
  );
}
