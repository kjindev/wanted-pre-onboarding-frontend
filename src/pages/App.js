import {
  Navigate,
  Route,
  Routes,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Todo from "../todo/Todo";
import NotFound from "./NotFound";
import { useLayoutEffect, useState } from "react";

function App() {
  const token = localStorage.token;
  const location = useLocation();
  const navigator = useNavigate();
  const [path, setPath] = useState([]);

  useLayoutEffect(() => {
    const currentPath = location.pathname;
    path.push(currentPath);

    if (token) {
      if (currentPath === "/signup") {
        if (path[0] === "/") {
          navigator("/todo");
        } else if (path[0] === "/todo") {
          navigator("/");
        } else if (path[0] === "/signup") {
          window.location.replace("/todo");
        }
        setPath([]);
      } else if (currentPath === "/signin") {
        if (path[0] === "/") {
          navigator("/todo");
        } else if (path[0] === "/todo") {
          navigator("/");
        } else if (path[0] === "/signin") {
          window.location.replace("/todo");
        }
        setPath([]);
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
