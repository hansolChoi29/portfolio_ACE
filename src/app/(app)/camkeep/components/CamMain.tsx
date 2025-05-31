"use client";
import Image from "next/image";

export default function CamMain() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold  text-3xl w-full text-center">메인화면</h1>
          <p className="text-sm text-gray-600">
            캠핑장·용품·체크리스트·커뮤니티를 메인에서 한눈에 보여줍니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepmain.png"
          alt="main"
          width={300}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center">newbie</h1>
          <p className="text-sm text-gray-600">
            캠린이를 위한 가이드 섹션으로 정보 접근성을 높였습니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepnewbie.png"
          alt="main"
          width={300}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl w-full text-center">checkList</h1>
          <p className="text-sm text-gray-600">
            카테고리별로 체크리스트를 생성·저장하며 개인화된 준비가 가능합니다.
          </p>
        </div>

        <Image
          src="/images/camkeep/keepcheck.png"
          alt="main"
          width={300}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
      </article>
    </section>
  );
}
