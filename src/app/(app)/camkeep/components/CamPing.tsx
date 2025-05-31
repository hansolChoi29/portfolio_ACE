"use client";

import Image from "next/image";

export default function CamPing() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="font-bold text-3xl w-full text-center mb-8">캠핑장</h1>
        </div>
        <Image
          src="/images/camkeep/keeplocal.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
        <p className="text-sm pt-1">
          지역 기반 캠핑장 목록을 실시간으로 조회 할 수 있습니다.
        </p>
        <p className="text-sm pt-1">
          추후, 동적세그먼트에 캠핑장의 위치를 나타내는 지도api를 반영 할
          예정입니다.
        </p>
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="font-bold text-3xl  w-full text-center mb-8">
            캠핑용품
          </h1>
        </div>
        <Image
          src="/images/camkeep/keepequi.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
        <p className="text-sm pt-1">
          카테고리별 캠핑용품을 검색·필터링하여 원하는 장비를 확인할 수
          있습니다.
        </p>
        <p className="text-sm pt-1">
          물론, 검색기능은 실시간으로 결과를 나타내 줍니다.
        </p>
      </article>
    </section>
  );
}
