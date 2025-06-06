import Link from "next/link";
import { motion } from "framer-motion";
export default function DuoLink() {
  return (
    <motion.div className="flex flex-col border rounded-xl border-black px-4 py-4 font-bold gap-2">
      <div className="flex flex-col border-b border-black pb-2">
        <p>Frontend : React, Next.js, TypeScript, Tailwind CSS, Zustand</p>
        <p>Data Fetching : React Query Database : Supabase</p>
        <p>패키지매니저 : npm</p>
      </div>
      <div className="flex flex-col border-b border-black pb-2">
        <Link
          href="https://duo-dingco-beta.vercel.app/"
          className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>duo-dingco 사이트 바로가기</p>
        </Link>
        <Link
          href="https://github.com/reizvoll/Duo_Dingco"
          className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>gitHub 바로가기</p>
        </Link>
      </div>
      <Link
        href="https://winwin0219.tistory.com/entry/React-%EC%8B%AC%ED%99%94-Intro-%EC%8B%A4%EB%AC%B4%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EC%88%98%EC%A4%80%EC%9D%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Trouble-Shooting"
        className="font-bold text-[#757575] ml-1 hover:text-[#ff5d5d]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>트러블슈팅 - 7개</p>
      </Link>
    </motion.div>
  );
}
