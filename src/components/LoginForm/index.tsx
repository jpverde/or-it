import {
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#e2e8f0",
      darker: "#e2e8f0",
    },
  },
});

export const LoginForm = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h3 className="text-4xl font-bold roboto">Login</h3>
      </div>
      <TextField
        fullWidth
        id="username"
        label="User name"
        placeholder="User name"
        variant="standard"
        color="primary"
        margin="normal"
      />
      <TextField
        fullWidth
        id="standard-password-input"
        label="Password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        variant="standard"
        margin="normal"
      />
      <div className="flex justify-between w-full">
        <p className="roboto text-sm">
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: "0.875rem" } }} />
          {"Remember me"}
        </p>
        <Link
          href="#"
          underline="always"
          sx={{
            fontFamily: "Roboto",
            fontSize: "0.75rem",
            margin: "0.4rem",
          }}
        >
          {"I forgot my password"}
        </Link>
      </div>
      <Button sx={{ marginTop: "3rem" }} variant="outlined">
        Login
      </Button>
    </ThemeProvider>
  );
};
