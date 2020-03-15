import React from "react";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Menu from "./components/Menu";

export const links = [
  {
    name: "Signup",
    path: "/signup",
    component: <Signup />
  },
  {
    name: "Login",
    path: "/login",
    component: <Login />
  },
  {
    name: "Menu",
    path: "/menu",
    component: <Menu />
  },
  {
    name: "About",
    path: "/about",
    component: <About />
  }
];
