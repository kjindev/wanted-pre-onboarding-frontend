import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="p-3 font-bold text-lg">페이지를 찾을 수 없습니다.</div>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}
