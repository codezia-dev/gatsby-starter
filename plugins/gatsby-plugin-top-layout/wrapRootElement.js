import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"

let theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontSize: '4rem'
      },
      h2: {
        fontSize: '3rem'
      },
      h3: {
        fontSize: '2.5rem'
      }
    },
    // palette: {
    //     primary: {
    //         main: "#001560"
    //     },
    //     secondary: {
    //         main: "#DA4167"
    //     }
    // },
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 700,
    //         md: 900,
    //         lg: 1200,
    //         xl: 1536,
    //     }
    // }
  });

  theme = responsiveFontSizes(theme)

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      {element}
    </>
  </ThemeProvider>;
};