import { SkillBadgeData } from "@/lib/types/sectionType";

export const Sections = [
  {
    label: "Dogo",
    img: "/images/cards/dogoproject.png",
    href: "/dogo",
    desc: "호텔예약 관리 반응형 웹 사이트",
    colorClass: "bg-[#EEC18D]",
  },
  {
    label: "DuoDingCo",
    img: "/images/cards/duodingcoproject.png",
    href: "/duodingco",
    desc: "낱말카드 플랫폼",
    colorClass: "bg-[#14142D]",
  },
  {
    label: "CamKeep",
    img: "/images/cards/camkeepproject.png",
    href: "/camkeep",
    desc: "캠핑장/용품 반응형 사이트",
    colorClass: "bg-[#578E7E]",
  },
];
export const SkillBadges: SkillBadgeData[] = [
  // Front-End
  {
    label: "React",
    src: "https://cdn.simpleicons.org/react/61DAFB",
    colorBadges: "bg-[#C2E2FB]", // React 공식 색상
  },
  {
    label: "Next.js",
    src: "https://cdn.simpleicons.org/nextdotjs/000000",
    colorBadges: "bg-[#E6E6E6]", // Next.js 다크 모드 상징
  },
  {
    label: "TypeScript",
    src: "https://cdn.simpleicons.org/typescript/3178C6",
    colorBadges: "bg-[#B5D7FB]", // TypeScript 공식 색상
  },
  {
    label: "Tailwind CSS",
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    colorBadges: "bg-[#CAE3FE]", // Tailwind 대표 색상
  },
  {
    label: "shadcn/ui",
    src: "https://cdn.simpleicons.org/shadcnui/000000",
    colorBadges: "bg-[#E6E6E6]", // shadcn은 어두운 미니멀 느낌
  },

  // Back-End
  {
    label: "TanStack Query",
    src: "https://cdn.simpleicons.org/reactquery/FF4154",
    colorBadges: "bg-[#FFC9CE]", // React Query (TanStack) 공식 색상
  },
  {
    label: "Serverless",
    src: "https://cdn.simpleicons.org/serverless/FD5750",
    colorBadges: "bg-[#FFC9CE]", // Serverless Framework 공식 색상
  },
  {
    label: "Zustand",
    src: "https://cdn.simpleicons.org/redux/764ABC",
    colorBadges: "bg-[#D8C0FF]", // Zustand는 bear지만 redux와 유사한 색 활용 가능
  },
];
