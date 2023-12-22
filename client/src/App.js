/** @format */
import { Routes, Route } from "react-router-dom";
import ChatUI from "./pages/ChatUI";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<ChatUI />}></Route>
     
    </Routes>
  );
};

export default App;
