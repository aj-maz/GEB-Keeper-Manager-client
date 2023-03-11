import { DataProvider } from "../data/providers";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Golos Text",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#6341FF",
      paper: "#493E7F",
    },
    lavendar: {
      main: "#8167FF",
      light: "#B3A8FF",
    },
    secondary: {
      main: "#C7FD04",
    },
    background: {
      default: "#161628",
      paper: "#2E2447",
    },
    error: {
      main: "#FF5E5B",
    },
    pink: {
      main: "#FC1E9A",
    },
    lime: {
      main: "#C7FD04",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "rgb(20 21 33 / 18%) 0px 2px 10px 0px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { borderRadius: "8px !important" },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
}

export default MyApp;
