import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutComponent from "./components/About/AboutComponent.tsx";
import { NavbarComponent } from "./components/Navbar/NavbarComponent.tsx";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
    ]
  },
  {
    path: "about",
    element: <AboutComponent />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
    <CssBaseline/>
    <NavbarComponent />
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);
