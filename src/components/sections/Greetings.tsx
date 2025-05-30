"use client";
import Image from "next/image";

export default function Greetings() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 m-4 w-[100vh] ">
        <div className="flex items-center justify-between border-b border-t border-r rounded-r">
          <div className="flex flex-col gap-2 p-1">
            <p>안녕하세요! 프론트엔드 개발자 최한솔입니다.</p>
            <p>보건행정학과 재학 중 EMR(전자의무기록) 프로그램을 배우며,</p>
            <p>
              환자 정보를 신환 여부에 따라 분류하고 관리하는 흐름에 흥미를
              느꼈으며
            </p>
            <p>아직까지 병원체계에서는 직원들이 사용하고 있는 프로그램이</p>
            <p>그다지 예쁘지는 않고 투박합니다. 어쩌면 ... </p>
            <p>
              언젠간 관련회사에 들어가게 된다면, 적어도 이보단 잘 만들겠다싶어서
            </p>
            <p>프론트엔드 개발자의 길을 꿈꾸게 되었습니다.</p>
          </div>
          <Image
            src="/images/home/emr.png"
            alt="emr"
            width={300}
            height={200}
            className="rounded"
          />
        </div>
        <div className="flex items-center justify-between border-b border-t border-l rounded-l">
          <Image
            src="/images/home/tigersol.png"
            alt="tigersol"
            width={300}
            height={200}
            className="rounded"
          />
          <div className="flex flex-col p-1 pr-10 gap-1">
            <p>
              그러나 독학에는 한계를 느껴 부트캠프(팀스파르타)에 참여하게
              되었고,
            </p>
            <p> 그곳에서 여러 차례 프로젝트를 통해 팀원 간의 소통과 협업의</p>
            <p className="pb-2"> 중요성을 깊이 체감했습니다.</p>
            <p>지금 되돌아보면, 기억에 남은 질문 하나가 있습니다.</p>
            <p>
              {'"'}개발하면 어때요? 재미있어요?{'"'}
            </p>
            <p className="pt-2">네, 정말 짜릿하고 재미있어요 (하하하..)</p>
            <p className="pt-2">
              매일 새벽마다 아주 울었던 적도 있으며 거의 일주일 간격으로
            </p>
            <p>포기하고 싶었던 적도 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
