import { CreditCard } from "lucide-react";
import { ComingSoon } from "@/components/features/coming-soon";

export default function BillingPage() {
  return (
    <ComingSoon
      title="결제"
      description="구독 플랜과 결제 수단, 청구 내역을 관리하세요."
      icon={CreditCard}
    />
  );
}
