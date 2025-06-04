import { ArticleItem, SkillBadgeData } from "@/lib/types/sectionType";

export const Sections = [
  {
    label: "DuoDingCo",
    img: "/images/cards/duodingcoproject.png",
    href: "/duodingco",
    desc: "낱말카드 플랫폼",
    colorClass: "bg-[#14142D]",
  },
  {
    label: "Dogo",
    img: "/images/cards/dogoproject.png",
    href: "/dogo",
    desc: "호텔예약 관리 반응형 웹 사이트",
    colorClass: "bg-[#EEC18D]",
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
    colorBadges: "hover:bg-[#C2E2FB]",
  },
  {
    label: "Next.js",
    src: "https://cdn.simpleicons.org/nextdotjs/000000",
    colorBadges: "hover:bg-[#E6E6E6]",
  },
  {
    label: "TypeScript",
    src: "https://cdn.simpleicons.org/typescript/3178C6",
    colorBadges: "hover:bg-[#B5D7FB]",
  },
  {
    label: "Tailwind CSS",
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    colorBadges: "hover:bg-[#CAE3FE]",
  },
  {
    label: "shadcn/ui",
    src: "https://cdn.simpleicons.org/shadcnui/000000",
    colorBadges: "hover:bg-[#E6E6E6]",
  },

  // Back-End
  {
    label: "TanStack Query",
    src: "https://cdn.simpleicons.org/reactquery/FF4154",
    colorBadges: "hover:bg-[#FFC9CE]",
  },
  {
    label: "Serverless",
    src: "https://cdn.simpleicons.org/serverless/FD5750",
    colorBadges: "hover:bg-[#FFC9CE]",
  },
  {
    label: "Zustand",
    src: "https://cdn.simpleicons.org/redux/764ABC",
    colorBadges: "hover:bg-[#D8C0FF]",
  },
];
export const Articles: ArticleItem[] = [
  {
    direction: "left",
    img: "/images/home/emr.png",
    alt: "emr",
    paragraphs: [
      "안녕하세요! 프론트엔드 개발자 최한솔입니다.",
      "보건행정학과 재학 중 EMR(전자의무기록) 프로그램을 배우며,",
      "환자 정보를 신환 여부에 따라 분류하고 관리하는 흐름에 흥미를 느꼈습니다.",
      "아직까지 병원체계에서는 직원들이 사용하는 프로그램이",
      "그다지 예쁘지는 않고 투박합니다. 어쩌면 ...",
      "언젠간 관련회사에 들어가게 된다면, 적어도 이보단 잘 만들겠다 싶어서",
      "프론트엔드 개발자로서 더 직관적인 인터페이스를 구현하고, 사용자 경험을 기술로 실현하는 개발자가 되고 싶다는 꿈이 생겼습니다.",
    ],
  },
  {
    direction: "right",
    img: "/images/home/tigersol.png",
    alt: "tigersol",
    paragraphs: [
      "그러나 독학에는 한계를 느껴 부트캠프(팀스파르타)에 참여하게 되었고,",
      "그곳에서 여러 차례 프로젝트를 통해 팀원 간의 소통과 협업의",
      "중요성을 깊이 체감했습니다.",
      "지금 되돌아보면, 기억에 남은 질문 하나가 있습니다.",
      '"개발하면 어때요? 재미있어요?"',
      "네, 정말 짜릿하고 재미있어요 (하하하..)",
      "매일 새벽마다 아주 울었던 적도 있으며 거의 일주일 간격으로",
      "포기하고 싶었던 적도 있습니다.",
    ],
  },
  {
    direction: "left",
    img: "/images/home/winnersol.png",
    alt: "winnersol",
    paragraphs: [
      "그럼에도 놓을 수 없는 이유는, 매 순간",
      "힘든 순간을 함께 이겨낸 동기들이 있고",
      "도움이 필요하면 마다하지 않고 최선을 다해주신 튜터님이 계시기 때문이며",
      "무엇보다 개발하다가 에러 날 때, 디버깅을 통해 데이터 흐름을 추적하고,",
      "문제를 해결할 때 느끼는 짜릿함이 가장 큰 원동력이 되었습니다.",
      "앞으로도 새로운 기술과 문제를 마주하더라도, 기회로 삼아 배우고 성장하는 개발자가 되겠습니다.",
    ],
  },
];
