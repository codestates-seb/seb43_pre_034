import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import theme from "./style/theme";
// import { Provider } from "react-redux";
// import store from "./redux/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    {/* </Provider> */}
  </>,
);
