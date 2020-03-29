import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#67a592",
      secondary: "#df9190"
      //#c97064 - red/pink
      //#a6b07e -olive green
      //#bca371 - beige
      //#F8FAF9 - white
    },
    text: {
      primary: "#0B0C0C",
      secondary: "#67a592",
      fontSize: "1rem"
    },
    background: {
      default: "#F8FAF9"
    }
  },
  typography: {
    fontFamily: 'Montserrat',

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

