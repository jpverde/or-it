import React from "react";
import { NavBar } from "@/components/Alert/NavBar";

export const DashBoard = () => {
  return (
    <div className="flex bg-background bg-cover bg-center">
      <div className="h-screen text-white">
        <NavBar></NavBar>
      </div>
      <div className="DivBox ml-28 mr-8 my-12 w-full overflow-visible">
        <p>Hola</p>
      </div>
    </div>
  );
};
