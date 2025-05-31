"use client";

import Image from "next/image";

export default function CamPing() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="font-bold text-3xl w-full text-center">캠핑장</h1>
          <p className="text-sm ">
            지역 기반 캠핑장 목록을 실시간으로 조회하고 지도에 표시합니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keeplocal.png"
          alt="main"
          width={300}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="font-bold text-3xl  w-full text-center">캠핑용품</h1>
          <p className="text-sm ">
            카테고리별 캠핑용품을 검색·필터링하여 원하는 장비를 확인할 수
            있습니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepequi.png"
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
