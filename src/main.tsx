import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  breakpoints: {
    xs: '320px',
    sm: '512px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1408px'
  },
  colors: {
    gray: {
      "200": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },

    yellow: {
      "900": "#FFBA08",
      "700": "rgba(255, 186, 8, 0.5)",
      "500": "#1C1401",

    },

    blue: {
      "500": "#47585B"
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'blue.500'
      }
    }
  }
})


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
