# Untitled — B2B SaaS Platform

Untitled UI 디자인 시스템을 기반으로 구축된 B2B SaaS 플랫폼입니다.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Untitled UI Design Tokens
- **UI Components**: Radix UI + CVA (Class Variance Authority)
- **Icons**: Lucide React

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인하세요.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/          # 대시보드 (인증 후)
│   │   ├── analytics/      # 분석
│   │   ├── billing/        # 결제
│   │   ├── documents/      # 문서
│   │   ├── projects/       # 프로젝트
│   │   ├── settings/       # 설정
│   │   ├── team/           # 팀
│   │   ├── layout.tsx      # 대시보드 레이아웃 (사이드바)
│   │   └── page.tsx        # 대시보드 메인
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 랜딩 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── ui/                 # 재사용 UI 컴포넌트
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   └── features/           # 기능별 컴포넌트
│       ├── recent-activity.tsx
│       └── stats-card.tsx
├── lib/                    # 유틸리티
│   └── utils.ts
├── styles/
│   └── untitled-ui-tokens.css  # Untitled UI 디자인 토큰
├── hooks/                  # 커스텀 훅
└── types/                  # TypeScript 타입
```

## Design System

Untitled UI 디자인 시스템의 토큰을 CSS 변수로 정의하여 사용합니다:

- **Colors**: Gray, Brand, Error, Warning, Success
- **Typography**: Inter 폰트 기반
- **Shadows**: xs ~ 3xl 단계
- **Spacing**: 0 ~ 32 단계
- **Border Radius**: none ~ full
