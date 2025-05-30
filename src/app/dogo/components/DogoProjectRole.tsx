"use client";
import { DogoRole } from "@/mocks/dogo";
import { motion } from "framer-motion";
export default function ProjectRole() {
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
        className="my-24 font-bold sm:text-3xl text-xl  w-full flex justify-center"
        variants={blockVariants}
      >
        주요 역할
      </motion.h1>
      {DogoRole.map(({ title, desc }, i) => (
        <motion.div
          key={i}
          variants={blockVariants}
          className={`border-b border-black py-4 ${i === 3 ? "" : ""}`}
        >
          <p className="font-bold sm:text-xl text-base">{title}</p>
          <p className="sm:text-base text-sm">{desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
