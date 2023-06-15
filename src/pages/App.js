import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Todo from "../todo/Todo";
import NotFound from "./NotFound";

function App() {
  const token = localStorage.token;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signup"
        element={token ? <Navigate to="/todo"></Navigate> : <SignUp />}
      />
      <Route
        path="/signin"
        element={token ? <Navigate to="/todo"></Navigate> : <SignIn />}
      />
      <Route
        path="/todo"
        element={token ? <Todo /> : <Navigate to="/signin"></Navigate>}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
