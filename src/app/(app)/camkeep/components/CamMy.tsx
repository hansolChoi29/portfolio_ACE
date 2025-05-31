"use client";

import Image from "next/image";

export default function CamMy() {
  return (
    <section className="py-24">
      <article className="flex flex-col justify-center items-center ">
        <div className="gap-4 flex flex-col justify-center">
          <h1 className="font-bold text-3xl w-full flex text-center justify-center  mb-8">
            mypage
          </h1>
          <Image
            src="/images/camkeep/keepmypc.png"
            alt="main"
            width={800}
            height={300}
            priority
            className="rounded-2xl overflow-hidden"
          />
          <p className="text-sm ">
            로그인한 유저의 게시글, 쿠폰 정보를 통합 조회할 수 있습니다.
          </p>
          <p className="text-sm pb-8 ">
            취준 목적이라 쿠폰은 개성있게 넣어본 모습입니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepmypage.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center pt-24 mb-8">
            수정
          </h1>
        </div>
        <Image
          src="/images/camkeep/keepcommuupdate.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
        <p className="text-sm  pt-1">
          작성한 게시글을 조건에 맞게 수정 및 삭제할 수 있습니다.
        </p>
      </article>
    </section>
  );
}
