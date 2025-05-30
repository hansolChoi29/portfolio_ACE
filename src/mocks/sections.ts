import { SkillBadgeData } from "@/lib/types/section";

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
  { label: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { label: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { label: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6" },
  {
    label: "Tailwind CSS",
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { label: "shadcn/ui", src: "https://cdn.simpleicons.org/shadcnui/000000" },

  // Back-End
  {
    label: "TanStack Query",
    src: "https://cdn.simpleicons.org/tanstackquery/092E20",
  },
  { label: "Serverless", src: "https://cdn.simpleicons.org/serverless/222222" },
  { label: "Zustand", src: "https://cdn.simpleicons.org/zustand/00C8A1" },
];
