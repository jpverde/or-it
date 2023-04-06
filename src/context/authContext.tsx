import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext({ signUp: { email: "", password: "" } });

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const user = {
    login: true,
  };

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("there is no Auth provider");
  return context;
};

export { authContext, useAuth, AuthProvider };
