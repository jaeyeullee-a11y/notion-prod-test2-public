import { FileText } from "lucide-react";
import { ComingSoon } from "@/components/features/coming-soon";

export default function DocumentsPage() {
  return (
    <ComingSoon
      title="문서"
      description="팀의 모든 문서를 한곳에서 작성하고 공유하세요."
      icon={FileText}
    />
  );
}
