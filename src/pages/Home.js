import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="text-2xl h-[5%]">/* Wanted-Pre-Onboarding 과제 */</div>
      <div className="h-[35%] text-center">
        <div className="text-sm p-5">아직 회원이 아니신가요?</div>
        <Link
          to="/signup"
          className="px-12 py-3 bg-sky-100 hover:bg-sky-200 hover:cursor-pointer"
        >
          회원가입
        </Link>
        <div className="text-sm p-5">이미 계정이 있으신가요?</div>
        <Link
          to="/signin"
          className="px-12 py-3 bg-sky-100 hover:bg-sky-200 hover:cursor-pointer"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
