"use client";
import { motion } from "framer-motion";
export default function CamRole() {
  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="px-4"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h1
        variants={blockVariants}
        className="my-24 font-bold text-3xl w-full flex justify-center"
      >
        주요 역할
      </motion.h1>
      <motion.div
        variants={blockVariants}
        className="border-b border-black py-4"
      >
        <p className="font-bold text-xl ">기획</p>
        <p className="text-base ">
          캠핑장, 용품, 체크리스트, 커뮤니티 기능으로 구성된 정보 통합
          웹서비스를 직접 기획하였고, 사용자 관점에서 필요한 정보 흐름과 페이지
          구조를 설계했습니다.
        </p>
      </motion.div>
      <motion.div
        variants={blockVariants}
        className="border-b border-black py-4"
      >
        <p className="font-bold text-xl">디자인</p>
        <p className="text-base ">
          연한 초록 계열을 메인 컬러로 설정해 통일감 있게 UI를 구성했고, 카드형
          레이아웃과 인터랙션 중심의 사용자 친화적 화면을 직접 구현했습니다.
        </p>
      </motion.div>
      <motion.div variants={blockVariants} className="py-4">
        <p className="font-bold text-xl ">개발</p>
        <p className="text-base">
          RSC 기반 App Router에서 동기/비동기 API 분리 구조로 설계하고, Supabase
          OAuth, RLS, Zustand, React Query 등 핵심 기능을 직접 구현했습니다.
        </p>
      </motion.div>
    </motion.div>
  );
}
