/* eslint-disable @typescript-eslint/naming-convention */
import GoogleIcon from "@mui/icons-material/Google";
import WindowIcon from "@mui/icons-material/Window";
import { Button, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  palette: {
    primary: {
      darker: "#e2e8f0",
      main: "#020617",
    },
  },
  status: {
    danger: "#e53e3e",
  },
});

export const LoginForm = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div className={"flex justify-around flex-col gap-4 w-96 m-auto"}>
        <Button startIcon={<GoogleIcon />} variant={"outlined"}>
          {"Continue with Google"}
        </Button>
        <Button startIcon={<WindowIcon />} variant={"outlined"}>
          {"Continue with Microsoft"}
        </Button>

        <p className={"mt-24 text-slate-700"}>
          {"Signing up for Or-it account means you agree to the "}
          <Link href={"#"}>
            {"Privacy Policy, Terms of Service and Affiliate Terms"}
          </Link>
        </p>
      </div>
    </ThemeProvider>
  );
};
