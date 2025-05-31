"use client";
import Image from "next/image";

export default function CamMain() {
  return (
    <section className="flex flex-col gap-24 py-24">
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold  text-3xl w-full text-center mb-8">
            메인화면
          </h1>
        </div>
        <Image
          src="/images/camkeep/keepmain.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
        <p className="text-sm pt-1">
          캠핑장·용품·체크리스트·커뮤니티를 메인에서 한눈에 보여줍니다.
        </p>
        <p className="text-sm pt-1">
          shadcn의 캐러셀을 이용하여 슬라이스를 만들어주고 5초 간격으로 움직이게
          만들어 주었습니다.
        </p>
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl  w-full text-center mb-8">
            newbie
          </h1>
        </div>
        <Image
          src="/images/camkeep/keepnewbie.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
        <p className="text-sm pt-1">
          캠린이를 위한 가이드 섹션으로 정보 접근성을 높였습니다.
        </p>
        <p className="text-sm pt-1">
          shadcn의 아코디언을 이용하여 부드러운 토글을 연출해 주었습니다.
        </p>
      </article>
      <article className="flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl w-full text-center mb-8">
            checkList
          </h1>
        </div>
        <Image
          src="/images/camkeep/keepcheck.png"
          alt="main"
          width={400}
          height={300}
          priority
          className="rounded-2xl overflow-hidden"
        />
        <p className="text-sm pt-1">
          카테고리별로 체크리스트를 생성·저장하며 개인화된 준비가 가능합니다.
        </p>
        <p className="text-sm pt-1">
          html2canvas을 이용하여 구현하였으나 문제는, 이미지 저장 시 UI가 깨진
          상태로 저장이 된다는 점이었습니다.
        </p>
        <p className="text-sm pt-1">
          MVP개발이 끝난 상태인 점을 고려하여 Supabase Storage을 이용한다면, 이
          문제를 해결할 수 있을 것으로 보입니다.
        </p>
      </article>
    </section>
  );
}
