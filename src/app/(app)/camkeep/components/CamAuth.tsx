"use client";
import Image from "next/image";

export default function CamAuth() {
  return (
    <section>
      auth
      <article>
        <div>회원가입</div>{" "}
        <Image
          src="/images/camkeep/keepsignup.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>로그인</div>
        <Image
          src="/images/camkeep/keepsignin.png"
          alt="main"
          width={200}
          height={200}
          priority
        />
      </article>
      <article>
        <div>소셜</div>
        이미지없음
      </article>
    </section>
  );
}
