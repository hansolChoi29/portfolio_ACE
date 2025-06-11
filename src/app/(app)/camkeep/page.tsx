"use client";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import CamLink from "./components/CamLink";
import CamRole from "./components/CamRole";
import CamMain from "./components/CamMain";
import CamAuth from "./components/CamAuth";
import CamPing from "./components/CamPing";
import CamCommu from "./components/CamCommu";
import CamMy from "./components/CamMy";
import CamIntro from "./components/CamIntro";

export default function CamkeepPage() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  return (
    <section className="bg-[#393939] text-white flex flex-col gap-24 px-2 lg:px-80 mx-auto">
      <motion.div
        className="relative z-[9999] overflow-auto flex flex-col justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex items-center justify-center">
          <h2 className="text-3xl font-bold my-24">camkeep</h2>
        </div>
        <CamLink />
        <CamIntro />
        <CamRole />
        <div className="flex flex-col items-center justify-center text-base">
          {/* 메인페이지 */}

          <CamMain />
          {/* auth */}
          <CamAuth />
          {/* 캠핑용품과 캠핑장 같은 맥락페이지 */}
          <CamPing />
          {/* 커뮤니티페이지 */}
          <CamCommu />
          {/* 마이페이지 */}
          <CamMy />
        </div>
        <div className="w-full flex justify-center items-center">
          <motion.button
            onClick={handleHome}
            className="fixed bottom-10 right-10 bg-[#578E7E] hover:text-red-500 hover:bg-white cursor-pointer text-white text-2xl rounded-2xl p-4 shadow-lg"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            홈으로
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
