import { Home } from "./scenes/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

const App = () => (
  <div className="bg-slate-300 h-screen text-white flex">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
);

export default App;
