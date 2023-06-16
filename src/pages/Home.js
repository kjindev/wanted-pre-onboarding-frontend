import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold h-[5%]">TODO</div>
      <div className="pb-7">Wanted-Pre-Onboarding</div>
      <div className="w-[80vw] md:w-[30vw] h-[35%] text-center">
        <div className="text-sm p-2">아직 회원이 아니신가요?</div>
        <Link to="/signup">
          <div className="py-3 mb-5 bg-sky-200 hover:bg-sky-300 hover:cursor-pointer">
            회원가입
          </div>
        </Link>
        <div className="text-sm p-2">이미 계정이 있으신가요?</div>
        <Link to="/signin">
          <div className="py-3 bg-sky-200 hover:bg-sky-300 hover:cursor-pointer">
            로그인
          </div>
        </Link>
      </div>
    </div>
  );
}
