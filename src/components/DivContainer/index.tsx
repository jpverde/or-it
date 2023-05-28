import { LoginForm } from "../LoginForm";

export const DivContainer = ({ style }: { style: string }) => {
  return (
    <div className={`${style} DivBox`}>
      <LoginForm />
    </div>
  );
};
