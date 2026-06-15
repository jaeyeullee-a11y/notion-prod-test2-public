import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Shield, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description: "최적화된 인프라로 빠르고 안정적인 서비스를 제공합니다.",
  },
  {
    icon: Shield,
    title: "엔터프라이즈 보안",
    description: "SOC 2 인증과 엔드투엔드 암호화로 데이터를 안전하게 보호합니다.",
  },
  {
    icon: BarChart3,
    title: "실시간 분석",
    description: "직관적인 대시보드로 비즈니스 인사이트를 실시간으로 확인하세요.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
            <Layers className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">Untitled</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <Button variant="secondary-gray" size="md">로그인</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="md">무료로 시작하기</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Zap className="h-4 w-4" />
            새로운 기능이 추가되었습니다
          </div>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-gray-900 lg:text-6xl">
            팀의 생산성을
            <br />
            <span className="text-brand-600">한 단계 높이세요</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600">
            Untitled는 팀의 프로젝트 관리, 데이터 분석, 협업을 하나의 플랫폼에서 통합하는 B2B SaaS 솔루션입니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="xl">
                무료로 시작하기
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="secondary-gray" size="xl">데모 요청</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-200 bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-brand-600">주요 기능</p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900">
              비즈니스 성장에 필요한 모든 것
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              강력한 기능으로 팀의 효율성을 극대화하고, 데이터 기반의 의사결정을 지원합니다.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-xs">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Untitled</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Untitled. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
