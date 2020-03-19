import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/Nav";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Menu from "./components/Menu";
import useApplicationData from "./hooks/useApplicationData"
import MasonryLayout from "./components/Masonry"



function App() {

  const { state } = useApplicationData();

  const links = [
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
      component: <MasonryLayout resources={state.pages.resources} />
    },
    {
      name: "About",
      path: "/about",
      component: <About />
    }
  ];

  const routes = links.map((link, index) => {
    return (
      <Route key={index} path={link.path}>
        {link.component}
      </Route>
    );
  });

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Nav />
        <Switch>{routes}</Switch>
      </Router>
    </div>
  );
}

export default App;
