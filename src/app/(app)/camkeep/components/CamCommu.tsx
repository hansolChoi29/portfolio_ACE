"use client";

import Image from "next/image";

export default function CamCommu() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article>
        <div>
          commu
          <p className="text-sm text-gray-600">
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
      <article>
        <div>
          게시
          <p className="text-sm text-gray-600">
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
