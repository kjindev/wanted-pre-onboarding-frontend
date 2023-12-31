import React, { useRef, useState } from "react";
import useSign from "../hooks/useSign";

export default function SignIn() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const buttonRef = useRef();
  const { requestSign } = useSign();

  if (localStorage.token) {
    <div></div>;
  } else {
    return (
      <div className="bg-sky-100 w-[100%]">
        <div className="p-5 fixed"></div>
        <div className="h-[100vh] flex flex-col justify-center items-center pb-12">
          <div className="h-[10%] text-xl">로그인</div>
          <div className="flex flex-col justify-center items-center bg-white p-9 rounded-2xl w-[320px]">
            <form className="flex flex-col items-center text-sm w-[100%]">
              <input
                type="text"
                placeholder="이메일"
                value={currentEmail || ""}
                onChange={(event) => setCurrentEmail(event.target.value)}
                required
                data-testid="email-input"
                className="p-2 px-3 my-2 border w-[100%] border-white border-b-gray-500"
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={currentPassword || ""}
                onChange={(event) => setCurrentPassword(event.target.value)}
                required
                data-testid="password-input"
                className="p-2 px-3 my-2 border w-[100%] border-white border-b-gray-500
              "
              />
              <button
                onClick={(event) =>
                  requestSign(event, "signin", currentEmail, currentPassword)
                }
                data-testid="signin-button"
                ref={buttonRef}
                className="bg-sky-500 w-[100%] rounded-full p-2 text-sm m-2 mt-5"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
