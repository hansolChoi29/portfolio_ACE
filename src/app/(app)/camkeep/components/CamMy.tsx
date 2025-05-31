"use client";

import Image from "next/image";

export default function CamMy() {
  return (
    <section>
      <article>
        <div>mypage</div>
        <Image
          src="/images/camkeep/keepmypage.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>수정</div>{" "}
        <Image
          src="/images/camkeep/keepcommuupdate.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
    </section>
  );
}
