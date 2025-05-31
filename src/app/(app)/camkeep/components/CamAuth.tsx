"use client";
import Image from "next/image";

export default function CamAuth() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl w-full text-center">auth</h1>
          <Image
            src="/images/camkeep/keepauthpc.png"
            alt="main"
            width={800}
            height={300}
            priority
          />

          <p className="text-sm text-gray-600">
            Supabase Admin 권한으로 회원 정보와 프로필을 동시에 등록합니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepsignup.png"
          alt="main"
          width={300}
          height={300}
          priority
        />
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center">로그인</h1>
          <p className="text-base  leading-relaxed">
            서버 액션을 사용해 세션 정보를 안전하게 관리합니다.
          </p>
        </div>{" "}
        <Image
          src="/images/camkeep/keepsignin.png"
          alt="main"
          width={300}
          height={300}
          priority
        />{" "}
        <p className="text-base leading-relaxed">
          Google, Kakao OAuth 로그인 후 DB에 사용자 정보를 직접 upsert합니다.
        </p>
      </article>
    </section>
  );
}
