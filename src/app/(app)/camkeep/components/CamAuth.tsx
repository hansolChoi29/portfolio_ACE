"use client";
import Image from "next/image";

export default function CamAuth() {
  return (
    <section className="flex flex-col gap-24 ">
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <h1 className="font-bold text-3xl w-full text-center">auth</h1>

          <Image
            src="/images/camkeep/keepauthpc.png"
            alt="main"
            width={800}
            height={300}
            priority
            className="rounded-2xl overflow-hidden"
          />

          <p className="text-sm ">
            Supabase Admin 권한으로 회원 정보와 프로필을 동시에 등록합니다.
          </p>
        </div>
        <Image
          src="/images/camkeep/keepsignup.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
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
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />{" "}
        <p className="text-base leading-relaxed">
          Google, Kakao OAuth 로그인 후 DB에 사용자 정보를 직접 upsert합니다.
        </p>
        <p className="text-base leading-relaxed">
          추후에 네이버 로그인을 도입해볼까 합니다.
        </p>
      </article>
    </section>
  );
}
