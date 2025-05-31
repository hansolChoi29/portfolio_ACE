"use client";

import Image from "next/image";

export default function CamCommu() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center">commu</h1>
          <p className="text-base leading-relaxed">
            실시간 게시글 목록을 React Query로 패칭하고, 사진 포함 렌더링합니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepcommu.png"
          alt="main"
          width={300}
          height={300}
          priority
        />
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center">게시</h1>
          <p className="text-base leading-relaxed">
            Supabase에 게시글과 이미지 URL을 저장하고 즉시 반영합니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepcommuadd.png"
          alt="main"
          width={300}
          height={300}
          priority
        />
      </article>
    </section>
  );
}
