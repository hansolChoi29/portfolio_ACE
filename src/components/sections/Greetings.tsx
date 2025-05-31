"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Articles } from "@/mocks/sections";
export default function Greetings() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 m-4 w-[100vh]">
        {Articles.map(({ direction, img, alt, paragraphs }, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`flex items-center justify-between border-t border-b ${
              direction === "right"
                ? "border-r rounded-r"
                : "border-l rounded-l"
            }`}
          >
            {direction === "left" && (
              <Image
                src={img}
                alt={alt}
                width={300}
                height={200}
                className="rounded"
              />
            )}

            <div className="flex flex-col p-3 pr-10 gap-2 w-full">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            {direction === "right" && (
              <Image
                src={img}
                alt={alt}
                width={300}
                height={200}
                className="rounded"
              />
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
