import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/Nav";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Topics from "./components/Topics";
import useApplicationData from "./hooks/useApplicationData"



function App() {

  const { state, setUserCookie, cookies, setUser } = useApplicationData();

  
  const links = [
    {
      name: "Signup",
      path: "/signup",
      component: <Signup setUserCookie={setUserCookie} setUser={setUser} />
    },
    {
      name: "Login",
      path: "/login",
      component: <Login />
    },
    {
      name: "Menu",
      path: "/menu",
      component: <Menu resources={state.pages.resources} />
    },
    {
      name: "About",
      path: "/about",
      component: <About />
    },
    {
      name: "Topics",
      path: "/topics",
      component: <Topics />
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
        <Nav cookies={cookies} />
        <Switch>{routes}</Switch>
      </Router>
    </div>
  );
}

export default App;
