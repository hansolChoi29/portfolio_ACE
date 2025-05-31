import { DogoAuthSections } from "@/mocks/dogo";
import Image from "next/image";

export default function DogoAuth() {
  return (
    <div className="flex flex-col gap-24 py-24">
      {DogoAuthSections.map((section) => (
        <section key={section.title} className="flex flex-col gap-8">
          <h1 className="font-bold text-3xl w-full text-center">
            {section.title}
          </h1>

          {/* 이미지 그룹 */}
          {section.images?.map((img, index) => (
            <div key={index} className="relative w-full mx-auto">
              <Image
                src={img.src}
                alt={img.alt}
                layout="fixed" // 고정 크기 적용
                width={img.width} // 정확한 width 적용
                height={img.height} // 정확한 height 적용
                priority
                className="rounded-2xl overflow-hidden"
              />
            </div>
          ))}

          {/* 텍스트 단락들 */}
          {section.texts.map((text, i) => (
            <p
              key={i}
              className={`text-base  leading-relaxed ${
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
