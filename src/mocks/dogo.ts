import { AuthSection } from "@/lib/types/dogo";

export const DogoRole = [
  {
    title: "로그인 / 회원가입 (Zustand를 통한 유저 상태 관리)",
    desc: "Supabase로 로그인 및 회원가입을 구축하고, Server Action을 통해 클라이언트와 서버 간의 요청을 효율적으로 관리했습니다.",
  },
  {
    title: "아이디 찾기 / 비밀번호 재설정 (OTP 인증 활용)",
    desc: "사용자의 편의를 고려해 OTP 인증을 통해 계정 찾기 및 비밀번호 재설정 기능을 구현했습니다.",
  },
  {
    title: "모달 기능 구현",
    desc: "객실 예약 과정에서 필요한 정보를 즉각적으로 제공할 수 있도록 모달 UI를 구현했습니다.",
  },
  {
    title: "문의하기 기능 구현",
    desc: "사용자가 문의를 남기면 데이터베이스에 저장되고, 관리자가 확인 후 답변할 수 있도록 구축하여 효율적인 커뮤니케이션을 지원했습니다.",
  },
];

export const DogoAuthSections: AuthSection[] = [
  {
    title: "로그인 페이지 (SignInPage)",
    images: [
      {
        src: "/images/dogo/dogoSignin.png",
        alt: "dogoSignin",
        width: 800,
        height: 500,
        layout: "responsive",
      },
    ],
    texts: [
      `사용자 편의성을 높이기 위해 <strong>user 테이블의 role 컬럼</strong>을 기준으로 일반 사용자와 비즈니스 사용자를 구분하였습니다. 일반 사용자의 경우 소셜 로그인 기능을 제공하여 로그인 절차를 간소화했습니다.<br/>로그인 후, 헤더가 로그인 상태에 따라 동적으로 렌더링되어야 했으나 SSR 방식으로는 즉각적인 상태 반영이 어려웠습니다. 이를 해결하기 위해 CSR 방식으로 전환하고, <strong>Server Action</strong>을 활용하여 클라이언트와 서버 간의 원활한 통신을 구현하였습니다.`,
    ],
  },
  {
    title: "회원가입 페이지 (SignUpPage)",
    images: [
      {
        src: "/images/dogo/dogoSignup.png",
        alt: "dogoSignup",
        width: 800,
        height: 500,
        layout: "responsive",
      },
      {
        src: "/images/dogo/dogoSignUpErrMess.png",
        alt: "dogoSignUpErrMess",
        width: 800,
        height: 500,
        layout: "responsive",
      },
    ],
    texts: [
      `RBAC를 적용하여 일반회원은 소셜 가입 가능, 사업자는 일반가입만 가능하도록 차별화했고, 엄격한 실시간 유효성 검사로 가입 절차의 신뢰성을 높였습니다.`,
      `이메일 형식과 비밀번호 정책을 엄격히 검증하여 정확한 회원가입 보장하였습니다.<br/>(모든 input은 실시간유효성 검사가 적용되어 있습니다.)`,
    ],
  },
  {
    title: "소셜 로그인 (KakaoSignInPage)",
    images: [
      {
        src: "/images/dogo/dogoKakaoSignin.png",
        alt: "dogoKakaoSignin",
        width: 900,
        height: 800,
        layout: "fixed",
      },
    ],
    texts: [
      `개발 과정 중 가장 어려웠던 부분은 소셜 로그인 구현이었습니다.<br/>기존에는 유저 정보를 역할에 따라 별도의 DB가 아니라 <strong>role 컬럼 하나로만 구분하여 관리</strong>하고 있었기 때문에, 역할별 소셜 로그인 구분이 제대로 이루어지지 않았습니다.<br/>이를 해결하기 위해 <strong>Supabase 트리거 기능</strong>을 활용했습니다. 소셜 로그인 후 카카오에서 기본적으로 제공하는 메타데이터 외에 추가 정보를 사용자가 마이페이지에서 입력하면, 해당 데이터를 DB에 저장하도록 구조를 설계하여 문제를 성공적으로 해결했습니다.`,
    ],
  },
  {
    title: "아이디 찾기 (FindIdModal)",
    images: [
      {
        src: "/images/dogo/dogoFindId.png",
        alt: "dogoFindId",
        width: 900,
        height: 800,
        layout: "responsive",
      },
      {
        src: "/images/dogo/dogoFindId2.png",
        alt: "dogoFindId2",
        width: 400,
        height: 200,
        layout: "fixed",
      },
      {
        src: "/images/dogo/dogoFindIdFinal.png",
        alt: "dogoFindIdFinal",
        width: 400,
        height: 200,
        layout: "fixed",
      },
      {
        src: "/images/dogo/dogoFindIdErr.png",
        alt: "dogoFindIdErr",
        width: 400,
        height: 200,
        layout: "fixed",
      },
    ],
    texts: [
      `사용자가 이름과 전화번호를 입력하면 Supabase의 유저 정보와 대조하여 일치하는 이메일을 반환하도록 해주었습니다. 데이터베이스에서 일치하는 정보가 없으면 에러 메시지가 표시되어 사용자가 정확한 안내를 받을 수 있도록 하였습니다.`,
      `일치 시 이메일(아이디)를 안내, 불일치 시 에러 모달로 피드백을 제공합니다.`,
    ],
  },
  {
    title: "비밀번호 재설정 (NewPasswordModal)",
    images: [
      {
        src: "/images/dogo/dogoFindPassword.png",
        alt: "dogoFindPassword",
        width: 900,
        height: 800,
        layout: "responsive",
      },
      {
        src: "/images/dogo/dogoNewPassword.png",
        alt: "dogoNewPassword",
        width: 400,
        height: 800,
        layout: "fixed",
      },
      {
        src: "/images/dogo/dogoFindPasswordOtp.png",
        alt: "dogoFindPasswordOtp",
        width: 400,
        height: 100,
        layout: "fixed",
      },
      {
        src: "/images/dogo/dogoFindPasswordFinal.png",
        alt: "dogoFindPasswordFinal",
        width: 400,
        height: 100,
        layout: "fixed",
      },
    ],
    texts: [
      `처음에는 단순 비밀번호 찾기만 고려했으나, OTP 인증 기반 비밀번호 재설정으로 보안을 강화했습니다.`,
      `비밀번호 일치 시 처리중 상태 표시, 실시간 유효성 검사 적용.`,
    ],
  },
];
