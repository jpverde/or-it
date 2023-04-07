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
  const [isError, setIsError] = useState();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<{ name: string; value: string }>): void => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(user.email, user.password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id={"register-email"}
          name={"email"}
          type={"email"}
          variant={"outlined"}
          label={"Email"}
          onChange={handleChange}
        ></TextField>
        <TextField
          id={"register-password"}
          name={"password"}
          type={"password"}
          variant={"outlined"}
          label={"Password"}
          onChange={handleChange}
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
