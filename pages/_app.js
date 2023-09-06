import { DataProvider } from "../data/providers";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import useClient from "../data/client";

const darkPallete = {
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
    main: "#F7D53B",
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
};

const lightPalette = {
  mode: "light",
  primary: {
    main: "#F7D53B",
    paper: "#493E7F",
  },
  lavendar: {
    main: "#8167FF",
    light: "#B3A8FF",
  },
  secondary: {
    main: "#8338ec",
  },
  background: {
    default: "#FDFEFF",
    paper: "#FEFFFF",
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
};

const theme = (dark) =>
  createTheme({
    typography: {
      fontFamily: "Golos Text",
    },
    palette: dark ? darkPallete : lightPalette,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            //borderRadius: 10,
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
  const client = useClient();

  return (
    <ApolloProvider client={client}>
      <DataProvider>
        <ThemeProvider theme={theme(true)}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </DataProvider>
    </ApolloProvider>
  );
}

export default MyApp;
