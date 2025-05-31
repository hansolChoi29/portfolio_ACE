import Image from "next/image";

export default function DogoInquiry() {
  return (
    <div className="py-24">
      <h1 className="font-bold text-3xl py-24   w-full flex justify-center">
        문의하기(InquiryModal)
      </h1>
      <div className="text-base  mb-4">
        사용자들이 호텔 시설, 예약, 결제 등 특정 카테고리의 문의사항을 간편하게
        등록할 수 있도록 모달 형태의 문의 시스템을 구현하였습니다. 이 시스템은
        사용자만이 문의를 작성할 수 있도록 권한을 제한하고, 관리자와 사업자가
        이를 확인한 뒤 직접 답변할 수 있는 구조로 개발되었습니다.
        <br />
        특히, 접근성을 높이기 위해 <strong>문의하기</strong> 버튼을 전역 상태로
        관리하여 인증(auth) 페이지를 제외한 모든 페이지에서 항상 노출되도록
        하였습니다. 사용자는 페이지 어디서나 즉시 문의사항을 등록할 수 있습니다.
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/dogo/dogoInquiry.png"
          alt="dogoInquiry"
          width={800}
          height={500}
          layout="responsive"
          style={{ height: "auto" }}
          className="rounded-2xl w-full max-w-[800px]"
        />

        <Image
          src="/images/dogo/dogoInquiryDropdown.png"
          alt="dogoInquiryDropdown"
          width={400}
          height={800}
          layout="fixed"
          style={{ height: "auto" }}
          className="rounded-2xl w-full max-w-[400px]"
        />
        <p className="mb-4">
          문의 유형을 선택할 수 있도록 드롭다운 메뉴로 설계하였습니다. 추후 더
          나은 사용자 경험을 제공하기 위해 shadcn/ui를 활용하여 디자인과 기능을
          더욱 개선하는 방안도 고려하고 있습니다.
        </p>
        <Image
          src="/images/dogo/dogoInquirySuccess.png"
          alt="dogoInquirySuccess"
          width={400}
          height={900}
          style={{ height: "auto" }}
          layout="fixed"
          className="rounded-2xl w-full max-w-[400px]"
        />
        <Image
          src="/images/dogo/dogoInquiryNoSignin.png"
          alt="dogoInquiryNoSignin"
          width={400}
          height={900}
          style={{ height: "auto" }}
          layout="fixed"
          className="rounded-2xl w-full max-w-[400px]"
        />
        <p>
          로그인하지 않은 사용자는 문의를 작성할 수 없으며, 모든 문의 내역은
          사용자의 마이페이지에서 일괄 관리하여 보안성과 접근성을 동시에
          만족시켰습니다.
        </p>
      </div>
    </div>
  );
}
