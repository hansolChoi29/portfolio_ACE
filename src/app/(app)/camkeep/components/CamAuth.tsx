"use client";
import Image from "next/image";

export default function CamAuth() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article>
        <div>
          회원가입
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
      <article>
        <div>
          로그인
          <p className="text-sm text-gray-600">
            서버 액션을 사용해 세션 정보를 안전하게 관리합니다.
          </p>
        </div>{" "}
        <Image
          src="/images/camkeep/keepauthpc.png"
          alt="main"
          width={800}
          height={300}
          priority
        />
        <p className="text-sm text-gray-600">pc에서는 이런화면</p>
        <Image
          src="/images/camkeep/keepsignin.png"
          alt="main"
          width={300}
          height={300}
          priority
        />
      </article>
      <article>
        <div>
          소셜
          <p className="text-sm text-gray-600">
            Google, Kakao OAuth 로그인 후 DB에 사용자 정보를 직접 upsert합니다.
          </p>
        </div>
        이미지없음
      </article>
    </section>
  );
}
