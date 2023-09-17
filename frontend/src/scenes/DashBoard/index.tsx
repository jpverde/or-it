import { Finances } from "components/Finances";
import { NavBar } from "components/NavBar";

export const DashBoard = (): JSX.Element => {
  return (
    <div className={"flex bg-background bg-cover bg-center"}>
      <div className={"h-screen text-white"}>
        <NavBar />
      </div>
      <div className={"DivBox ml-28 mr-8 my-12 w-full overflow-visible"}>
        <Finances />
      </div>
    </div>
  );
};
