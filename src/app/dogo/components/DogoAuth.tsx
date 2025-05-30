import Image from "next/image";

export default function DogoAuth() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
          로그인 페이지 (SignInPage)
        </h1>
        <Image
          src="/images/dogo/dogoSignin.png"
          alt="dogoSignin"
          width={800}
          height={500}
          style={{ height: "auto" }}
          layout="responsive"
          className="rounded-2xl w-full max-w-[800px]"
        />
        <p className="sm:text-base text-sm ">
          사용자 편의성을 높이기 위해
          <strong>user 테이블의 role 컬럼</strong>을 기준으로 일반 사용자와
          비즈니스 사용자를 구분하였습니다. 일반 사용자의 경우 소셜 로그인
          기능을 제공하여 로그인 절차를 간소화했습니다.
          <br /> 로그인 후, 헤더가 로그인 상태에 따라 동적으로 렌더링되어야
          했으나 SSR 방식으로는 즉각적인 상태 반영이 어려웠습니다. 이를 해결하기
          위해 CSR 방식으로 전환하고,
          <strong>Server Action</strong>을 활용하여 클라이언트와 서버 간의
          원활한 통신을 구현하였습니다.
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
          회원가입 페이지 (SignUpPage)
        </h1>
        <Image
          src="/images/dogo/dogoSignup.png"
          alt="dogoSignup"
          width={800}
          height={500}
          style={{ height: "auto" }}
          layout="responsive"
          className="rounded-2xl w-full max-w-[800px]"
        />
        <p className="sm:text-base text-sm mb-4">
          RBAC를 적용하여 일반회원은 소셜 가입 가능, 사업자는 일반가입만
          가능하도록 차별화했고, 엄격한 실시간 유효성 검사로 가입 절차의
          신뢰성을 높였습니다.
        </p>
        <Image
          src="/images/dogo/dogoSignUpErrMess.png"
          alt="dogoSignUpErrMess"
          width={800}
          height={500}
          style={{ height: "auto" }}
          layout="responsive"
          className="rounded-2xl w-full max-w-[800px]"
        />
        <p className="sm:text-base text-sm">
          이메일 형식과 비밀번호 정책을 엄격히 검증하여 정확한 회원가입
          보장하였습니다.
          <br />
        </p>
        <p className="sm:text-sm text-xs ">
          (모든 input은 실시간유효성 검사가 적용되어 있습니다.)
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
          소셜 로그인 (KakaoSignInPage)
        </h1>
        <Image
          src="/images/dogo/dogoKakaoSignin.png"
          alt="dogoKakaoSignin"
          width={900}
          height={800}
          layout="fixed"
          style={{ height: "auto" }}
          className="rounded-2xl w-full max-w-[900px]"
        />
        <p className="sm:text-base text-sm">
          {" "}
          개발 과정 중 가장 어려웠던 부분은 소셜 로그인 구현이었습니다.
          <br /> 기존에는 유저 정보를 역할에 따라 별도의 DB가 아니라{" "}
          <strong>role 컬럼 하나로만 구분하여 관리</strong>하고 있었기 때문에,
          역할별 소셜 로그인 구분이 제대로 이루어지지 않았습니다.
          <br /> 이를 해결하기 위해 <strong>Supabase 트리거 기능</strong>을
          활용했습니다. 소셜 로그인 후 카카오에서 기본적으로 제공하는 메타데이터
          외에 추가 정보를 사용자가 마이페이지에서 입력하면, 해당 데이터를 DB에
          저장하도록 구조를 설계하여 문제를 성공적으로 해결했습니다.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
            아이디 찾기 (FindIdModal)
          </h1>
          <p className="sm:text-base text-sm">
            사용자가 이름과 전화번호를 입력하면 Supabase의 유저 정보와 대조하여
            일치하는 이메일을 반환하도록 해주었습니다.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/dogo/dogoFindId.png"
            alt="dogoFindId"
            width={800}
            height={500}
            style={{ height: "auto" }}
            layout="responsive"
            className="rounded-2xl w-full max-w-[800px]"
          />
          <Image
            src="/images/dogo/dogoFindId2.png"
            alt="dogoFindId2"
            width={400}
            height={100}
            style={{ height: "auto" }}
            layout="fixed"
            className="rounded-2xl w-full max-w-[400px]"
          />
          <p className="sm:text-base text-sm mb-4">
            입력된 사용자 정보가 데이터베이스와 일치하면 해당 이메일(아이디)을
            사용자에게 보여줍니다. <br />
            데이터베이스에서 일치하는 정보가 없으면 에러 메시지가 표시되어
            사용자가 정확한 안내를 받을 수 있도록 하였습니다.
          </p>
          <Image
            src="/images/dogo/dogoFindIdFinal.png"
            alt="dogoFindIdFinal"
            width={400}
            height={100}
            style={{ height: "auto" }}
            layout="fixed"
            className="rounded-2xl w-full max-w-[400px]"
          />
          <p className="sm:text-base text-sm mb-4">
            데이터베이스의 유저정보를 대조하여 일치하면 이메일(아이디)를
            알려줍니다.
          </p>
          <Image
            src="/images/dogo/dogoFindIdErr.png"
            alt="dogoFindIdErr"
            width={400}
            height={100}
            style={{ height: "auto" }}
            layout="fixed"
            className="rounded-2xl w-full max-w-[400px]"
          />
          <p className="sm:text-base text-sm mb-4">
            데이터베이스에서 일치하는 정보가 없으면 에러 모달을 표시하여
            사용자가 정확한 안내를 받을 수 있도록 하였습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold sm:text-3xl py-24  text-xl w-full flex justify-center">
          비밀번호 재설정 (NewPasswordModal)
        </h1>
        <p className="sm:text-base text-sm mb-4">
          처음 기획에서는 단순히 비밀번호 찾기 기능을 고려하였습니다. 그러나
          인증(Auth) 시스템 특성상 비밀번호는 데이터베이스 내에서도 암호화되어
          저장되기 때문에 직접 조회하는 방식은 보안상 적합하지 않았습니다.
          <br />
          이를 고려하여 사용자가 비밀번호를 분실했을 경우, 기존 비밀번호를
          알려주는 방식이 아닌, OTP(일회성 비밀번호) 인증을 통해 새로운
          비밀번호를 안전하게 설정할 수 있도록 기능을 재설계하여 구현하였습니다.
          이로써 사용자의 계정 보안을 한층 강화하고 신뢰성을 확보했습니다.
        </p>

        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/dogo/dogoFindPassword.png"
            alt="dogoFindPassword"
            width={800}
            height={500}
            style={{ height: "auto" }}
            layout="responsive"
            className="rounded-2xl w-full max-w-[800px]"
          />
          <Image
            src="/images/dogo/dogoNewPassword.png"
            alt="dogoNewPassword"
            width={400}
            height={100}
            style={{ height: "auto" }}
            layout="fixed"
            className="rounded-2xl w-full max-w-[400px]"
          />
          <p className="sm:text-base text-sm mb-4">
            비밀번호가 일치하면 버튼이 처리중...으로 바뀌어 사용자 편의를
            신경쓰도록 노력하였습니다.
          </p>
          <Image
            src="/images/dogo/dogoFindPasswordOtp.png"
            alt="dogoFindPasswordOtp"
            width={400}
            height={100}
            style={{ height: "auto" }}
            layout="fixed"
            className="rounded-2xl w-full max-w-[400px]"
          />
          <p className="sm:text-base text-sm">
            실시간 유효성 검사를 넣어주었습니다.
          </p>
          <p className="sm:text-sm text-xs mb-4">
            (모든 input은 실시간유효성 검사가 적용되어 있습니다.)
          </p>
          <Image
            src="/images/dogo/dogoFindPasswordFinal.png"
            alt="dogoFindPasswordFinal"
            width={400}
            height={100}
            style={{ height: "auto" }}
            layout="fixed"
            className="rounded-2xl w-full max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
