"use client";

import Footer from "@/components/footer/page";
import HoverSections from "@/components/sections/HoverSection";
import SkillSection from "@/components/sections/SkillSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        <div className="-mx-4 md:-mx-8 lg:-mx-16">
          <HoverSections />
        </div>
        <div className="flex justify-center my-6">
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex flex-col items-center  h-10 w-30 p-2 rounded border-gray-100 hover:border-none hover:bg-gray-100 cursor-pointer shadow-sm"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "close" : "More"}
          </motion.button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, overflow: "hidden" }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <SkillSection />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 인사? */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col gap-2">
            <p>안녕하세요! 프론트엔드 개발자 최한솔입니다.</p>
            <p>보건행정학과 재학 중 EMR 프로그램을 배우며,</p>
            <p>
              환자 정보를 신환 여부에 따라 분류하고 관리하는 흐름에 흥미를 느껴
            </p>
            <p>프론트엔드 개발자의 길을 꿈꾸게 되었습니다.</p>
          </div>
          <Image
            src="/images/home/emr.png"
            alt="emr"
            width={300}
            height={200}
            className="rounded"
          />
        </div>
        <p>
          그러나 독학에는 한계를 느껴 부트캠프에 참여했고, 그곳에서 프로젝트
          리더를 여러 차례 맡으며 팀원 간의 소통과 협업의 중요성을 깊이
          체감했습니다.
        </p>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
