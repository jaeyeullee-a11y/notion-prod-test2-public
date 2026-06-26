import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { StatsCard } from "@/components/features/stats-card";
import { RecentActivity } from "@/components/features/recent-activity";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, BarChart3, TrendingUp, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "대시보드",
};

export default function DashboardPage() {
  return (
    <>
      <Header
        title="대시보드"
        description="프로젝트와 팀의 전체 현황을 확인하세요."
        actions={
          <Button size="md">
            <Plus className="h-5 w-5" />
            새 프로젝트
          </Button>
        }
      />

      <div className="flex flex-col gap-6 p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="총 매출"
            value="₩45,231,000"
            change="20.1%"
            trend="up"
            icon={DollarSign}
          />
          <StatsCard
            title="활성 사용자"
            value="2,350"
            change="12.5%"
            trend="up"
            icon={Users}
          />
          <StatsCard
            title="전환율"
            value="3.24%"
            change="1.2%"
            trend="down"
            icon={BarChart3}
          />
          <StatsCard
            title="성장률"
            value="15.3%"
            change="4.1%"
            trend="up"
            icon={TrendingUp}
          />
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </>
  );
}
