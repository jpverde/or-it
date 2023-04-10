import { Home } from "./scenes/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import { DashBoard } from "./scenes/DashBoard";

const App = () => (
  <div className="bg-disks bg-cover bg-center h-screen text-white">
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </AuthProvider>
  </div>
);

export default App;
