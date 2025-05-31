"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function CamLink() {
  return (
    <motion.div className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2">
      <div className="flex flex-col border-b border-black pb-2">
        <p>
          Frontend : React, Next.js, TypeScript, Tailwind CSS, ShadCN, Zustand
        </p>
        <p>Data Fetching : React Query</p>
        <p>Authentication : Supabase OAuth (Google, Kakao), Server Actions</p>
        <p>Database : Supabase (RLS 적용)</p>
        <p>Rendering : CSR 기반 Hybrid Routing </p>
        <p>패키지매니저 : npm</p>
      </div>
      <div className="flex flex-col border-b border-black pb-2">
        <Link
          href="https://camkeep.vercel.app/"
          className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>camkeep 사이트 바로가기</p>
        </Link>
        <Link
          href="https://github.com/hansolChoi29/camkeep"
          className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>gitHub 바로가기</p>
        </Link>
      </div>
      <Link
        href="https://winwin0219.tistory.com/entry/CAMKEEP%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88-%EB%A1%9C%EA%B7%B8%EC%9D%B8%C2%B7%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%ED%86%A0%ED%81%B0-%EC%BF%A0%ED%82%A4-%EC%B2%98%EB%A6%AC-with-RSC"
        className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>트러블슈팅 </p>
      </Link>
    </motion.div>
  );
}
