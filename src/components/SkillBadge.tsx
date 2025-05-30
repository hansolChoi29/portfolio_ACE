"use client";

import Image from "next/image";
import { motion } from "framer-motion";
interface SkillBadgeProps {
  src: string;
  label: string;
}

export default function SkillBadge({ src, label }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center  h-16 w-30 p-2 rounded border hover:border-none hover:bg-gray-100 cursor-pointer shadow-sm"
    >
      <Image
        src={src}
        alt={`${label} logo`}
        width={30}
        height={30}
        priority={false}
        unoptimized
      />
      <span className="text-sm logo">{label}</span>
    </motion.div>
  );
}
