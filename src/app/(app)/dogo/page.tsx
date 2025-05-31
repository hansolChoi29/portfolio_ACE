"use client";
import { motion } from "framer-motion";
import LinkPage from "./components/DogoLinkPage";
import ProjectRole from "./components/DogoProjectRole";
import DogoAuth from "./components/DogoAuth";
import DogoModal from "./components/DogoModal";
import DogoInquiry from "./components/DogoInquiry";
import { useRouter } from "next/navigation";
export default function DogoPage() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  return (
    <section className="flex flex-col gap-24 py-24">
      <motion.div
        className="relative z-[9999] p-12  overflow-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex items-center justify-center py-8">
          <h2 className="text-3xl font-bold my-24">dogo-project</h2>
        </div>
        <LinkPage />
        {/* 주요역할 */}
        <ProjectRole />
        {/*     개발 과정 상세 (Auth) 소개 */}
        <DogoAuth />
        {/* Modal 소개 */}
        <DogoModal />
        {/*  문의하기(Inquiry) 소개 */}
        <DogoInquiry />
        <div className="w-full flex justify-center items-center">
          <motion.button
            onClick={handleHome}
            className="fixed bottom-10 right-10 bg-[#EEC18D] hover:text-red-500 hover:bg-white cursor-pointer text-white text-2xl rounded-2xl p-4 shadow-lg"
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
