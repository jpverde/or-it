import { Button, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import WindowIcon from "@mui/icons-material/Window";

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
      <div className="flex justify-around flex-col gap-4">
        <div className="mb-6">
          <h3 className="text-5xl font-bold roboto">Login</h3>
        </div>
        <p className="text-lg">Welcome to Or-it a simple tool to organize your life</p>
        <Button variant="outlined" startIcon={<GoogleIcon />}>
          Continue with Google
        </Button>
        <Button variant="outlined" startIcon={<WindowIcon />}>
          Continue with Microsoft
        </Button>

        <p>You don't have an account? <Link href="#">Sign up</Link></p>

      </div>
    </ThemeProvider>
  );
};
