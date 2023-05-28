import { Route, Routes } from "react-router-dom";

import { Login } from "components/Login";
import { Register } from "components/Register";
import { DashBoard } from "scenes/DashBoard";
import { Home } from "scenes/Home";

const App = () => (
  <div className={"bg-disks bg-cover bg-center h-screen text-white"}>
    <Routes>
      <Route element={<Home />} path={"/"} />
      <Route element={<Login />} path={"/login"} />
      <Route element={<Register />} path={"/register"} />
      <Route element={<DashBoard />} path={"/dashboard"} />
    </Routes>
  </div>
);

export default App;
