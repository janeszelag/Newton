import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/Nav";
import About from "./components/About";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/Login";
import Menu from "./components/Menu";
import useApplicationData from "./hooks/useApplicationData"



function App() {

  const { state, setUserCookie, setUser, removeUserCookie } = useApplicationData();

  
  const links = [
    {
      name: "Signup",
      path: "/signup",
      component: <Signup name={state.user.firstName} userId={state.user.id} setUserCookie={setUserCookie} setUser={setUser} topics={state.pages.topics} />
    },
    {
      name: "Login",
      path: "/login",
      component: <Login setUserCookie={setUserCookie} setUser={setUser} />
    },
    {
      name: "Menu",
      path: "/menu",
      component: <Menu resources={state.pages.resources} id={state.user.id} />
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
        <Nav userName={state.user.firstName} removeUserCookie={removeUserCookie} setUser={setUser} />
        <Switch>{routes}</Switch>
      </Router>
    </div>
  );
}

export default App;
