import { BarChart3 } from "lucide-react";
import { ComingSoon } from "@/components/features/coming-soon";

export default function AnalyticsPage() {
  return (
    <ComingSoon
      title="분석"
      description="프로젝트와 팀의 핵심 지표를 한눈에 살펴보세요."
      icon={BarChart3}
    />
  );
}
