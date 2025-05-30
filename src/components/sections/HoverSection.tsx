"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState } from "react";
import { Sections } from "@/mocks/sections";

export default function HoverSections() {
  const router = useRouter();
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // 각 카드마다 독립된 animation controls 생성
  const controls0 = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controlsArr = [controls0, controls1, controls2];

  const handleClick =
    (idx: number, href: string) => async (e: React.MouseEvent) => {
      e.preventDefault();
      setHovered(idx);
      setActiveIdx(idx);

      const controls = controlsArr[idx];
      await controls.start({
        position: "fixed",
        top: "5vh",
        left: 0,
        width: "100vw",
        height: "80vh",
        x: 0,
        y: 0,
        borderRadius: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      router.push(href);
    };

  return (
    <div className="flex h-[70vh] overflow-hidden">
      <AnimatePresence>
        {Sections.map((section, idx) => {
          const controls = controlsArr[idx];
          const isActive = activeIdx === idx;
          const isHovered = hovered === idx;

          return (
            <motion.div
              key={idx}
              layout
              initial={false}
              animate={controls}
              whileHover={!activeIdx ? { scale: 1.02 } : {}}
              onMouseEnter={() => {
                if (activeIdx === null) setHovered(idx);
              }}
              onMouseLeave={() => {
                if (activeIdx === null) setHovered(null);
              }}
              onClick={handleClick(idx, section.href)}
              className={` relative flex items-center justify-center overflow-hidden
    transition-all duration-500 ease-in-out cursor-pointer
    ${
      activeIdx !== null
        ? isActive
          ? "basis-full"
          : "basis-0"
        : hovered === null
        ? "basis-1/3"
        : isHovered
        ? "basis-full"
        : "basis-0"
    }
     ${isHovered ? section.colorClass : "bg-black"}
              }`}
            >
              <Image
                src={section.img}
                alt={section.label}
                width={1600}
                height={900}
                className="w-full h-full object-contain"
                priority
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
                  isActive || isHovered ? "opacity-0" : "opacity-50"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative p-2 w-50 h-50 flex justify-center items-center">
                  <div
                    className={`absolute inset-0 ${
                      section.colorClass
                    } rounded-lg origin-center transition-transform duration-500 ease-out ${
                      isHovered ? "scale-300 opacity-0" : "scale-100"
                    }`}
                  />
                  <span className="relative z-10 px-6 py-3 text-white text-2xl font-bold rounded-lg">
                    {section.label}
                  </span>
                </div>
              </div>
              <span
                className={`absolute bottom-16 left-10 text-white text-3xl transition-opacity duration-800 ease-in-out delay-200 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {section.desc}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
