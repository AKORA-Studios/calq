import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export * from './database';

const colors = {
  styles: {
    global: {
      body: {
        bg: '#303030'
      }
    }
  },
  colors: {
    brand: {
      900: "#1D4044",
      800: "#234E52",
      700: "#285E61",
      600: "#2C7A7B",
      500: "#319795",
      400: "#38B2AC",
      300: "#4FD1C5",
      200: "#81E6D9",
      100: "#B2F5EA",
      50: "#E6FFFA"
    }
  }
}
const theme = extendTheme(colors)



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
