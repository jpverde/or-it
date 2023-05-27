import { MainLogo } from "components/MainLogo";
import { DivContainer } from "components/DivContainer";


export const Home = () => {
  return (
    <div
      className={"flex flex-row flex-nowrap h-full justify-center items-center"}
    >
      <MainLogo
        styles={"text-center ml-8"}
        title="Or-it"
        text={"By JPVerde & DessaHell"}
        titleStyles="text-gray-50 font-extrabold text-9xl signika"
        textStyles={"roboto text-gray-200"}
      />
      <div className="w-1/2 justify-center items-center pl-40">
        <DivContainer style="m-auto h-96 w-80 p-7" />
      </div>
    </div>
  );
};
