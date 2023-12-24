/** @format */
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Speech from "./pages/Speech";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Chat />}></Route>
      <Route path="/speech" element={<Speech />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
     
    </Routes>
  );
};

export default App;
