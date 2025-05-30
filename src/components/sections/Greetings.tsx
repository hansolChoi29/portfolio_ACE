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
            <p>
              프론트엔드 개발자로서{" "}
              <strong>더 직관적인 인터페이스를 구현하고,</strong>
              <br /> <strong>사용자 경험을 기술로 실현하는 개발자</strong>가
              되고 싶다는 꿈이 생겼습니다.
            </p>
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
        <div className="flex items-center justify-between border-b border-t border-r rounded-l">
          <div className="flex flex-col p-1 pr-10 gap-2">
            <p>그럼에도 놓을 수 없는 이유는, 매순간</p>
            <p>힘든 순간을 함께 이겨낸 동기들이 있고</p>
            <p>
              도움이 필요하면 마다하지않고 최선을 다해주신 튜터님이 계시기
              때문에
            </p>
            <p>
              무엇보다 개발하다 막히면 이제는 디버깅을 통해 데이터 흐름을
              추적하고,
            </p>
            <p>문제를 해결할 때 느끼는 짜릿함이 가장 큰 원동력이 되었습니다.</p>

            <p>
              앞으로도 새로운 기술과 문제를 마주하더라도,
              <strong>기회로 삼아 배우고 성장하는 개발자</strong>가 되겠습니다.
            </p>
          </div>
          <Image
            src="/images/home/winnersol.png"
            alt="winnersol"
            width={300}
            height={100}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
