import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
/*
 * Import { useAuth } from "../../context/authContext";
 * import { useNavigate } from "react-router-dom";
 */

export const Register = (): JSX.Element => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  /*
   * Const { signUp } = useAuth();
   * const navigate = useNavigate();
   * const [isError, setIsError] = useState();
   */

  function handleChange({
    target: { name, value },
  }: React.ChangeEvent<{ name: string; value: string }>): void {
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    // SignUp(user.email, user.password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id={"register-email"}
          label={"Email"}
          name={"email"}
          onChange={handleChange}
          type={"email"}
          variant={"outlined"}
        />
        <TextField
          id={"register-password"}
          label={"Password"}
          name={"password"}
          onChange={handleChange}
          type={"password"}
          variant={"outlined"}
        />

        <Button
          endIcon={<SendIcon />}
          size={"large"}
          type={"submit"}
          variant={"outlined"}
        >
          {"Register"}
        </Button>
      </form>
    </div>
  );
};
