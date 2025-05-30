"use client";
import Image from "next/image";

export default function Greetings() {
  return (
    <div>
      <div className="flex flex-col  gap-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-2 p-1">
            <p>안녕하세요! 프론트엔드 개발자 최한솔입니다.</p>
            <p>보건행정학과 재학 중 EMR(전자의무기록) 프로그램을 배우며,</p>
            <p>
              환자 정보를 신환 여부에 따라 분류하고 관리하는 흐름에 흥미를 느껴
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
        <div className="flex items-center justify-center">
          <Image
            src="/images/home/tigerhansol.png"
            alt="emr"
            width={300}
            height={200}
            className="rounded"
          />
          <div className="flex flex-col gap-2 p-1">
            <p>
              그러나 독학에는 한계를 느껴 부트캠프에 참여하게 되었고, 그곳에서
              여러 차례 프로젝트를 통해
            </p>
            <p>팀원 간의 소통과 협업의 중요성을 깊이 체감했습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
