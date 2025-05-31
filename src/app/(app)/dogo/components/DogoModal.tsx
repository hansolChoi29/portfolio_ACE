import Image from "next/image";

export default function DogoModal() {
  return (
    <div>
      <h1 className="font-bold text-3xl w-full pb-8 flex justify-center">
        RoomDetailModal
      </h1>
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/dogo/dogoModal.png"
          alt="dogoModal"
          width={800}
          height={500}
          style={{ height: "auto" }}
          layout="responsive"
          className="rounded-2xl w-full max-w-[800px]"
        />
        <p className="text-base  mb-4">
          사용자가 객실 이미지를 더 쉽고 직관적으로 확인할 수 있도록 객실 상세
          이미지 모달과 <strong>자세히 보기</strong>
          모달을 개발했습니다. 특히 이미지 좌우에 슬라이드 버튼을 추가하여 여러
          장의 사진을 간편하게 넘겨볼 수 있도록 UX를 개선하였습니다.
        </p>
        <Image
          src="/images/dogo/dogoDetailModal.png"
          alt="dogoDetailModal"
          width={800}
          height={500}
          layout="responsive"
          style={{ height: "auto" }}
          className="rounded-2xl w-full max-w-[800px]"
        />
        <p className="text-base mb-4">
          객실의 세부 정보를 더욱 명확하게 전달하고 예약 전 사용자가 필요한 모든
          정보를 한눈에 파악할 수 있도록 상세 모달을 추가로 구현했습니다. 이
          모달 내에 <strong>예약하기</strong> 버튼을 배치하여 모달에서 얻은
          정보를 기반으로 즉시 예약 페이지로 연결될 수 있도록 편의성을
          높였습니다.
        </p>
        <Image
          src="/images/dogo/dogoDetailModal2.png"
          alt="dogoDetailModal2"
          width={400}
          height={300}
          style={{ height: "auto" }}
          layout="fixed"
          className="rounded-2xl w-full max-w-[400px]"
        />
        <p className="text-base  mb-4">
          또한, 모달 내부에 탭 형태의 네비게이션을 추가하여 사용자가 원하는
          정보를 쉽게 찾아볼 수 있도록 하였습니다. 이를 통해 상세 정보, 후기,
          이용약관 등의 내용을 간편하게 전환하며 확인할 수 있는 직관적인 사용자
          경험을 제공했습니다.
        </p>
      </div>
    </div>
  );
}
