import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const buttonRef = useRef();
  const navigator = useNavigate();

  const checkInput = () => {
    if (!currentEmail.includes("@") || currentPassword.length < 8) {
      buttonRef.current.disabled = true;
    } else {
      buttonRef.current.disabled = false;
    }
  };

  useEffect(() => {
    checkInput();
  }, [currentEmail, currentPassword]);

  const requestSignIn = async (event) => {
    event.preventDefault();
    try {
      const { status, data } = await axios({
        url: "https://www.pre-onboarding-selection-task.shop/auth/signin",
        method: "post",
        data: {
          email: currentEmail,
          password: currentPassword,
        },
      });
      if (status === 200) {
        localStorage.setItem("token", data.access_token);
        navigator("/todo");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
              onClick={requestSignIn}
              data-testid="signup-button"
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
