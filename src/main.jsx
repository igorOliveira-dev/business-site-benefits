import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    body {
        background-color: #111;
        font-family: Arial, Helvetica, sans-serif;
        overflow-x: hidden;
    }
    h1, h2, p {
      color: #fdfdfd;
    }
    &::-webkit-scrollbar {
    width: 5px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00b2ff;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
