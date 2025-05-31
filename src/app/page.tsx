"use client";

import Footer from "@/components/footer/page";
import HoverSections from "@/components/sections/HoverSection";
import SkillSection from "@/components/sections/SkillSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Greetings from "@/components/sections/Greetings";
//TODO: 글자색과 각 여백
// TODO: 각 카드 내부가 메인보다 너무 초라함 개선필요
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
              <Greetings />
              {/* 인사 */}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
