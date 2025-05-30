"use client";
import { motion } from "framer-motion";

export default function DuoRole() {
  return (
    <motion.div>
      <h1 className="my-24 font-bold sm:text-3xl text-xl w-full flex justify-center">
        주요 역할
      </h1>
      <div className="border-b border-black py-4">
        <p className="font-bold sm:text-xl text-base">단어 학습 기능 제공</p>
        <p className="sm:text-base text-sm">
          사용자가 단어를 학습할 수 있는 기능을 카드 형식으로 제공
        </p>
      </div>
      <div className="border-b border-black py-4">
        <p className="font-bold sm:text-xl text-base">북마크 관리</p>
        <p className="sm:text-base text-sm">
          사용자가 게시글을 북마크하여 나중에 다시 학습할 수 있도록 하고, 북마크
          상태를 실시간으로 업데이트
        </p>
      </div>
      <div className="py-4">
        <p className="font-bold sm:text-xl text-base">
          뜨끈하게 올라온 학습리스트
        </p>
        <p className="sm:text-base text-sm">
          Supabase의 시간순 정렬 로직을 활용해 최신 학습 내역을 한눈에 확인할 수
          있도록 구현한 페이지입니다.
        </p>
      </div>
    </motion.div>
  );
}
