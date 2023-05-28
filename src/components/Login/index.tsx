// Import { useState } from "react";

export const Login = () => {
  /*
   * TODO: login component
   * const [user, setUser] = useState({
   *   email: "",
   *   password: "",
   * });
   */

  return (
    <div>
      <form action={""}>
        <input id={"email"} name={"email"} type={"email"} />
        <input id={"password"} name={"password"} type={"password"} />
      </form>
    </div>
  );
};
