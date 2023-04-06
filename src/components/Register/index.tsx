import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isError, setIsError] = useState("");

  const validateEmail = (value: string): boolean => {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  };
  const validatePassword = (value: string): boolean => {
    return !/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
  };

  const isValidInput = (name: string, value: string): void => {
    if (name === "email") {
      setEmailError(validateEmail(value));
    } else {
      setPasswordError(validatePassword(value));
    }
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<{ name: string; value: string }>): void => {
    isValidInput(name, value);
  };

  console.log(passwordError);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ email: user.email, password: user.password });
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error: unknown) {
      error instanceof Error ? setIsError(error.message) : "Unknown Error";
    }
  };
  return (
    <div>
      {isError && <p>{isError}</p>}
      <form onSubmit={handleSubmit}>
        <TextField
          error={emailError}
          id={"register-email"}
          name={"email"}
          type={"email"}
          variant={"outlined"}
          label={"Email"}
          onChange={handleChange}
          helperText={emailError ? "Invalid email" : ""}
        ></TextField>
        <TextField
          error={passwordError}
          id={"register-password"}
          name={"password"}
          type={"password"}
          variant={"outlined"}
          label={"Password"}
          onChange={handleChange}
          helperText={
            passwordError
              ? "password should contain at least one number and one special character"
              : ""
          }
        ></TextField>

        <Button
          variant={"outlined"}
          size={"large"}
          endIcon={<SendIcon />}
          type={"submit"}
        >
          {"Register"}
        </Button>
      </form>
    </div>
  );
};
