import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useSign() {
  const navigator = useNavigate();

  const requestSign = async (event, type, inputEmail, inputPassword) => {
    event.preventDefault();
    try {
      const { status, data } = await axios({
        url: `https://www.pre-onboarding-selection-task.shop/auth/${type}`,
        method: "post",
        data: {
          email: inputEmail,
          password: inputPassword,
        },
      });
      if (type === "signin" && status === 200) {
        localStorage.setItem("token", data.access_token);
        navigator("/todo");
      } else if (type === "signup" && status === 201) {
        navigator("/signin");
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return { requestSign };
}
