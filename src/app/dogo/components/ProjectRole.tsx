"use clinet";
import { motion } from "framer-motion";
export default function ProjectRole() {
  return (
    <motion.div>
      <h1 className="my-24 font-bold sm:text-3xl text-xl  w-full flex justify-center">
        주요 역할
      </h1>
      <div className="border-b border-black py-4">
        <p className="font-bold sm:text-xl text-base">
          로그인 / 회원가입 (Zustand를 통한 유저 상태 관리)
        </p>
        <p className="sm:text-base text-sm">
          Supabase로 로그인 및 회원가입을 구축하고, Server Action을 통해
          클라이언트와 서버 간의 요청을 효율적으로 관리했습니다.
        </p>
      </div>
      <div className="border-b border-black py-4">
        <p className="font-bold sm:text-xl text-base">
          아이디 찾기 / 비밀번호 재설정 (OTP 인증 활용)
        </p>
        <p className="sm:text-base text-sm">
          사용자의 편의를 고려해 OTP 인증을 통해 계정 찾기 및 비밀번호 재설정
          기능을 구현했습니다.
        </p>
      </div>
      <div className="border-b border-black py-4">
        <p className="font-bold sm:text-xl text-base">모달 기능 구현</p>
        <p className="sm:text-base text-sm">
          객실 예약 과정에서 필요한 정보를 즉각적으로 제공할 수 있도록 모달 UI를
          구현했습니다.
        </p>
      </div>
      <div className="py-4">
        <p className="font-bold sm:text-xl text-base">문의하기 기능 구현</p>
        <p className="sm:text-base text-sm">
          사용자가 문의를 남기면 데이터베이스에 저장되고, 관리자가 확인 후
          답변할 수 있도록 구축하여 효율적인 커뮤니케이션을 지원했습니다.
        </p>
      </div>
    </motion.div>
  );
}
