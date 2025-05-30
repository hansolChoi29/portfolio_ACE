"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function LinkPage() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col text-sm sm:text-base  text-gray-700 w-full max-w-[800px]">
        {/* 간단 소개박스 */}
        <motion.div className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2">
          <div className="flex flex-col border-b border-black pb-2">
            <p>Frontend : React, Next.js, TypeScript, Tailwind CSS</p>
            <p>Data Fetching : React Query</p>
            <p>Database : Supabase</p>
          </div>

          <div className="flex flex-col border-b border-black pb-2">
            <Link
              href="https://do-go-project.vercel.app/"
              className="font-bold text-[#757575] hover:text-[#ff5d5d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>do-go-project 사이트 바로가기</p>
            </Link>
            <Link
              href="https://github.com/Noonsae/DoGo_project"
              className="text-[#757575] hover:text-[#ff5d5d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>do-go-project gitHub 바로가기</p>
            </Link>
            <Link
              href="https://www.notion.so/5-19161b5e89bb80a8b3d4debfff2f783f"
              className="text-[#757575] hover:text-[#ff5d5d]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>5분 기록(개발기록) 바로가기</p>
            </Link>
          </div>

          <Link
            href="https://winwin0219.tistory.com/171"
            className="text-[#757575] hover:text-[#ff5d5d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>트러블 슈팅 - Redirect URL와 OAuth 토큰 유출</p>
          </Link>
          <Link
            href="https://winwin0219.tistory.com/182"
            className="text-[#757575] hover:text-[#ff5d5d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>트러블 슈팅 - 미디어 쿼리</p>
          </Link>
          <Link
            href="https://winwin0219.tistory.com/183"
            className="text-[#757575] hover:text-[#ff5d5d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>트러블 슈팅 - 로그인 및 상태 관리 문제 해결</p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
