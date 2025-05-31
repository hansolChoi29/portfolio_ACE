"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DuoLink from "./components/DuoLink";
import DuoRole from "./components/DuoRole";
import DuoDevelop from "./components/DuoDevelop";

export default function DuodingcoPage() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  return (
    <section className="flex flex-col gap-24 py-24">
      <div className="flex flex-col items-center">
        <div className=" relative flex items-center justify-center py-8">
          <h2 className="text-3xl font-bold my-24">duodingco</h2>
        </div>
        <div className="flex flex-col text-base  w-full max-w-[800px]">
          {/* 간단 소개 박스 */}
          <DuoLink />
          {/* 주요 역할 */}
          <DuoRole />
        </div>

        <DuoDevelop />
      </div>
      <div className="w-full flex justify-center items-center">
        <motion.button
          onClick={handleHome}
          className="fixed bottom-10 right-10 bg-[#14142D] hover:text-red-500 hover:bg-white cursor-pointer text-white text-2xl rounded-2xl p-4 shadow-lg"
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
    </section>
  );
}
