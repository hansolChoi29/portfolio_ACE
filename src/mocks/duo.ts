import { DuodingcoSection } from "@/lib/types/duo";

export const DuodingcoSections: DuodingcoSection[] = [
  {
    title: "학습 리스트 페이지 (LearnListPage)",
    description: `사용자가 학습 카드 리스트에서 단어 목록, 작성자 정보, 단어 개수를 확인하고, Supabase Auth와 Zustand를 활용하여 로그인 후 세션을 관리하며, 동적 라우팅을 통해 상세 페이지로 이동할 수 있도록 구현하였습니다. 북마크 기능을 통해 사용자가 즐겨찾기를 추가하거나 삭제하여 개인 학습 관리 API를 통한 데이터 패칭 및 JSON 파싱과 함께, 로딩 및 에러 상태를 관리하여 사용자 경험을 극대화하였습니다.`,
    images: [
      {
        src: "/images/duodingco/duodingcoLearning.png",
        alt: "duodingcoLearning",
        width: 800,
        height: 500,
        layout: "responsive",
      },
    ],
  },
  {
    title: "상세 페이지 (LearnDetailPage)",
    description: `북마크 기능과 작성자 정보를 활용하여 상세 정보 및 사용자 프로필을 연동했습니다. 리액트 훅을 활용하여 효율적으로 상태를 관리해 UI의 반응성을 강화했습니다. 학습 카드는 단어와 뜻이 3D 플립 카드 애니메이션으로 전환되도록 설계하여 학습자의 집중력과 흥미를 높였습니다. 키보드 이벤트를 통한 카드 탐색 및 뒤집기 기능도 개발하였으며, 이 기능은 곧 적용될 예정입니다. 동적 세그먼트를 적용해 URL을 기반으로 상세 페이지로 이동할 수 있도록 구현하고, 비동기 데이터 패칭 및 에러 핸들링을 통해 애플리케이션의 안정성을 높였습니다. 학습이 완료되면 뒤로가기 버튼이 완료하기 버튼으로 변경되어, 사용자가 더 직관적으로 흐름을 이해할 수 있도록 UX에 신경썼습니다.`,
    images: [
      {
        src: "/images/duodingco/duodingcoLearningDetail.png",
        alt: "duodingcoLearningDetail",
        width: 800,
        height: 500,
        layout: "responsive",
      },
      {
        src: "/images/duodingco/duodingcoLearningDeatailMove.png",
        alt: "duodingcoLearningDeatailMove",
        width: 800,
        height: 500,
        layout: "responsive",
      },
      {
        src: "/images/duodingco/duodingcoLearningEnd.png",
        alt: "duodingcoLearningEnd",
        width: 800,
        height: 500,
        layout: "responsive",
      },
      {
        src: "/images/duodingco/duodingcoLearningAlert.png",
        alt: "duodingcoLearningAlert",
        width: 800,
        height: 500,
        layout: "responsive",
      },
    ],
  },
  {
    title: "핫러닝 페이지 (HotLearningPage)",
    description: `최신 단어 집합을 실시간으로 업데이트하여 사용자가 최신 등록된 단어를 한눈에 확인할 수 있도록 하며, 카드형 UI를 통해 작성자 정보, 단어 개수, 북마크 상태 등 다양한 정보를 직관적으로 표시했습니다. Supabase를 활용하여 실시간으로 북마크 및 사용자 정보를 동기화하고, 사용자 맞춤형 컨텐츠 제공을 통해 동기부여를 유도했습니다. 반응형 디자인을 적용하여 다양한 디바이스에서 지원하며, API 호출 후 상태 업데이트를 통해 데이터 동기화 처리를 안정적으로 수행했습니다.`,
    images: [
      {
        src: "/images/duodingco/duodingcoHot.png",
        alt: "duodingcoHot",
        width: 800,
        height: 500,
        layout: "responsive",
      },
    ],
  },
];
