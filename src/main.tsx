import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: '320px',
  sm: '512px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1408px'

}

const theme = extendTheme({ breakpoints})


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
