import { DuodingcoSections } from "@/mocks/duo";
import Image from "next/image";

export default function DuoDevelop() {
  return (
    <div className="flex flex-col gap-24 py-24">
      {DuodingcoSections.map((section) => (
        <section key={section.title} className="flex flex-col gap-8">
          <h1 className="font-bold sm:text-3xl text-xl w-full text-center">
            {section.title}
          </h1>

          <p className="sm:text-base text-sm mb-4 whitespace-pre-wrap">
            {section.description}
          </p>

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
        </section>
      ))}
    </div>
  );
}
