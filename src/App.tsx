import React from "react";
import { Route, Routes } from "react-router-dom";

import { Register } from "components/Register";
import { DashBoard } from "scenes/DashBoard";
import { Home } from "scenes/Home";

const App = (): JSX.Element => (
  <React.StrictMode>
    <div className={"h-screen"}>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Register />} path={"/register"} />
        <Route element={<DashBoard />} path={"/dashboard"} />
      </Routes>
    </div>
  </React.StrictMode>
);

export default App;
