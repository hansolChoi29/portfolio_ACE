import { DogoAuthSections } from "@/mocks/dogo";
import Image from "next/image";

export default function DogoAuth() {
  return (
    <div className="flex flex-col gap-24 py-24">
      {DogoAuthSections.map((section) => (
        <section key={section.title} className="flex flex-col gap-8">
          <h1 className="font-bold sm:text-3xl text-xl w-full text-center">
            {section.title}
          </h1>

          {/* 이미지 그룹 */}
          {section.images?.map((img) => (
            <div
              key={img.src}
              className="relative w-full max-w-[800px] mx-auto aspect-video"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          ))}

          {/* 텍스트 단락들 */}
          {section.texts.map((text, i) => (
            <p
              key={i}
              className={`sm:text-base text-sm leading-relaxed ${
                i < section.texts.length - 1 ? "mb-4" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
