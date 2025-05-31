"use client";

import Image from "next/image";

export default function CamMy() {
  return (
    <section>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold sm:text-3xl text-xl w-full text-center">
            mypage
          </h1>
          <Image
            src="/images/camkeep/keepmypc.png"
            alt="main"
            width={800}
            height={300}
            priority
          />
          <p className="text-sm text-gray-600">
            로그인한 유저의 게시글, 찜 목록, 쿠폰 정보를 통합 조회할 수
            있습니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepmypage.png"
          alt="main"
          width={300}
          height={300}
          priority
        />
        <p className="text-sm text-gray-600">pc에서는 이런 모습</p>
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold sm:text-3xl text-xl w-full text-center">
            수정
          </h1>
          <p className="text-sm text-gray-600">
            작성한 게시글을 조건에 맞게 수정 및 삭제할 수 있습니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepcommuupdate.png"
          alt="main"
          width={300}
          height={300}
          priority
        />
      </article>
    </section>
  );
}
