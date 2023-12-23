/** @format */
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Chat />}></Route>
     
    </Routes>
  );
};

export default App;
