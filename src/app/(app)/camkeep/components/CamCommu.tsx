"use client";

import Image from "next/image";

export default function CamCommu() {
  return (
    <section className="flex flex-col gap-24 ">
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center mb-8">commu</h1>
        </div>
        <Image
          src="/images/camkeep/keepcommu.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />{" "}
        <p className="text-base leading-relaxed pt-1">
          실시간 게시글 목록을 React Query로 패칭하고, 사진 포함 렌더링합니다.
        </p>
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center mb-8">게시</h1>
        </div>
        <Image
          src="/images/camkeep/keepcommuadd.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />{" "}
        <p className="text-base leading-relaxed pt-1">
          Supabase에 게시글과 이미지 URL을 저장하고 즉시 반영합니다.
        </p>
      </article>
    </section>
  );
}
