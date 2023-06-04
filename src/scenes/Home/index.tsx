import { ReactComponent as Logo } from "assets/logo.svg";
import { DivContainer } from "components/DivContainer";
import { LoginForm } from "components/LoginForm";

export const Home = (): JSX.Element => {
  return (
    <div className={"flex h-full justify-center items-center bg-color-white"}>
      <div className={"bg-color-white w-2/4 h-screen flex justify-center"}>
        <div className={"m-auto flex flex-col gap-8 w-96"}>
          <div id={"logo"}>
            <h1
              className={
                "m-0 text-4xl font-extrabold signika text-black text-left"
              }
            >
              <Logo className={"inline mb-2 mr-3"} title={"Main logo"} />
              {"Or-it"}
            </h1>
          </div>
          <div className={"mb-6"}>
            <h3 className={"text-3xl font-bold roboto text-black text-left"}>
              {"Join our network"}
            </h3>
            <p className={"text-base text-slate-700"}>
              {"Welcome to Or-it a simple tool to organize your life"}
            </p>
          </div>
          <DivContainer>
            <LoginForm />
          </DivContainer>
        </div>
      </div>
      <div className={"bg-discs bg-cover w-7/12 my-2 height-95 rounded-l-xl"} />
    </div>
  );
};
