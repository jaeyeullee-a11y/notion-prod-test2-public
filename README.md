# Untitled — B2B SaaS Platform

Untitled UI 디자인 시스템을 기반으로 구축된 B2B SaaS 플랫폼입니다.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
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
│   ├── dashboard/          # 대시보드 (인증 후 영역)
│   │   ├── projects/       # 프로젝트 페이지
│   │   │   └── page.tsx
│   │   ├── settings/       # 설정 페이지
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # 대시보드 레이아웃 (사이드바)
│   │   └── page.tsx        # 대시보드 메인
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 랜딩 페이지
│   ├── globals.css         # 글로벌 스타일
│   └── favicon.ico
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
└── styles/
    └── untitled-ui-tokens.css  # Untitled UI 디자인 토큰
```

> 참고: `hooks/`, `types/` 디렉터리는 아직 존재하지 않습니다. 커스텀 훅이나 공용 타입이 필요해지면 그때 추가할 예정입니다.

## Pages / Routes

현재 구현된 페이지와 아직 구현되지 않은(예정) 페이지를 구분합니다.

| 라우트 | 설명 | 상태 |
| --- | --- | --- |
| `/` | 랜딩 페이지 | ✅ 구현됨 |
| `/dashboard` | 대시보드 메인 (통계 카드, 최근 활동) | ✅ 구현됨 |
| `/dashboard/projects` | 프로젝트 목록 | ✅ 구현됨 |
| `/dashboard/settings` | 설정 (프로필 등) | ✅ 구현됨 |
| `/dashboard/analytics` | 분석 | 🚧 예정 |
| `/dashboard/team` | 팀 | 🚧 예정 |
| `/dashboard/documents` | 문서 | 🚧 예정 |
| `/dashboard/billing` | 결제 | 🚧 예정 |
| `/dashboard/help` | 도움말 | 🚧 예정 |

> 참고: 사이드바(`src/components/layout/sidebar.tsx`)에는 위 "예정" 라우트로 향하는 링크가 이미 포함되어 있습니다. 해당 페이지가 구현되기 전까지 이 링크들은 404로 연결되며, 사이드바 링크 정리는 별도 작업으로 다룹니다.

## Design System

Untitled UI 디자인 시스템의 토큰을 CSS 변수로 정의하여 사용합니다:

- **Colors**: Gray, Brand, Error, Warning, Success
- **Typography**: Inter 폰트 기반
- **Shadows**: xs ~ 3xl 단계
- **Spacing**: 0 ~ 32 단계
- **Border Radius**: none ~ full
