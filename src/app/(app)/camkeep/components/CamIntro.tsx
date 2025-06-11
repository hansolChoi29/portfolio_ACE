"use client";

import Image from "next/image";

export default function CamIntro() {
  return (
    <div className="flex flex-col  justify-center items-center mt-20">
      <div className="flex justify-center items-center mb-2">
        <Image
          src="/images/camkeep/gif/mainPage.gif"
          alt="checklist"
          width={800}
          height={100}
          unoptimized
          className="border-4 border-[#5757EB] rounded-2xl ml-10"
        />
        {/*위아래 border 이어지는 선 추가*/}{" "}
        <hr className="border-t-4 border-[#5757EB] w-44" />
        <p className="border-4  border-[#5757EB]  flex items-center  h-auto p-4 text-xl mr-20">
          mainPage에는 네이버 쇼핑과 고캠핑의 api를 요청하여 불러왔으며 shadcn의
          캐러셀을 이용하여 렌더링해주었습니다.
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <p className="ml-40 border-4 border-[#5757EB]  flex items-center w-auto h-auto p-4 text-xl">
          캠린이를 고려하여 캠핑관련 용어집과 다양한 꿀팁을 넣어주었는데,
          shadcn의 아코디언을 활용해 주었습니다.
        </p>
        <hr className="border-t-4 border-[#5757EB] w-full" />

        <Image
          src="/images/camkeep/gif/newbiePage.gif"
          alt="checklist"
          width={400}
          height={100}
          unoptimized
          className="border-4 border-[#5757EB] rounded-2xl  mr-20"
        />
      </div>

      <div className="flex justify-center items-center ">
        <Image
          src="/images/camkeep/gif/equipmentPage.gif"
          alt="checklist"
          width={400}
          height={100}
          unoptimized
          className="border-4 border-[#5757EB] rounded-2xl ml-40"
        />
        <hr className="border-t-4 border-[#5757EB] w-full" />
        <p className="border-4 border-[#5757EB]  flex items-center w-auto h-auto p-4 text-xl mr-40">
          캠핑용품/캠핑장 리스트 페이지에서는 동적페이지로 이동될 수 있도록
          구현해 주었으며 트래픽 초과가 되지 않도록 ISR방식을 채택하여
          캐싱해주도록 설정해 주었습니다.
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex flex-col ml-30">
          <p className="border-4 border-[#5757EB]  flex items-center w-auto h-auto p-4 text-xl ">
            캠린이를 위한 체크리스트에는 이미지 저장기능을 이용하여 소장할 수
            있도록 해주었고 이때 사용한 라이브러리로는 html2canvas입니다
          </p>
          <div className="w-px h-24 border-3 border-[#5757EB] mx-4 flex ml-45"></div>
          <p className="border-4 border-[#5757EB]  flex items-center w-auto h-auto p-4 text-xl ">
            html2canvas는 containerRef가 가리키는 DOM을 캔버스로 그려 이미지
            데이터를 만든 뒤, 가상의 a 태그를 클릭해 사용자가 바로 PNG 파일을
            다운로드하도록 해줍니다.
          </p>
        </div>
        <hr className="border-t-4 border-[#5757EB] w-full mb-70" />
        <Image
          src="/images/camkeep/gif/checklistPage.gif"
          alt="checklist"
          className="border-4 border-[#5757EB] rounded-2xl mr-40"
          width={400}
          height={100}
          unoptimized
        />
      </div>

      <div className="flex justify-center items-center ">
        <Image
          src="/images/camkeep/gif/communityPage.gif"
          alt="checklist"
          width={400}
          height={100}
          unoptimized
          className="border-4 border-[#5757EB] rounded-2xl ml-40"
        />
        <hr className="border-t-4 border-[#5757EB] w-full mb-90" />
        <div className="flex flex-col mr-50">
          <p className="border-4 border-[#5757EB]  flex items-center w-auto h-auto p-4 text-xl ">
            mypage에서는 DB에서 가져온 정보를 렌더링해 주었고 게시한 글과 보유한
            쿠폰을 확인할 수 있게 해주었습니다.
          </p>{" "}
          <div className="w-px h-24 border-3 border-[#5757EB] mx-4 flex ml-45"></div>
          <p className="border-4 border-[#5757EB]  flex items-center w-auto h-auto p-4 text-xl ">
            내 게시물만 수정·삭제할 수 있는 이유는 내가 로그인된 사용자라는 것을
            확인하고, 게시물의 작성자 ID와 내 ID가 일치할 때만 권한을 주기
            때문입니다. 프론트엔드에서 두 ID가 같으면 버튼을 보여주고,
            서버에서도 요청자 ID와 작성자 ID를 다시 비교해 일치할 때만 실제
            수정·삭제를 허용합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
