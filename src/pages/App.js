import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Todo from "../todo/Todo";
import NotFound from "./NotFound";

function App() {
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
