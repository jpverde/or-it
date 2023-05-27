import { Home } from "./scenes/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { DashBoard } from "./scenes/DashBoard";

const App = () => (
  <div className="bg-disks bg-cover bg-center h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
  </div>
);

export default App;
