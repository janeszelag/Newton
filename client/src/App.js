import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/Nav";
import About from "./components/About";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Resource from "./components/Resource";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const {
    state,
    setUserCookie,
    setUser,
    removeUserCookie,
    authenticatetUser
  } = useApplicationData();

  const links = [
    {
      name: "Signup",
      path: "/signup",
      requiresAuthentication: false,
      component: (
        <Signup
          name={state.user.firstName}
          userId={state.user.id}
          setUserCookie={setUserCookie}
          setUser={setUser}
          topics={state.pages.topics}
        />
      )
    },
    {
      name: "Login",
      path: "/login",
      requiresAuthentication: false,
      component: <Login setUserCookie={setUserCookie} setUser={setUser} />
    },
    {
      name: "Menu",
      path: "/menu",
      requiresAuthentication: true,
      component: <Menu id={state.user.id} />
    },
    {
      name: "About",
      path: "/about",
      requiresAuthentication: false,
      component: <About />
    }
  ];

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticatetUser() ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );

  const routes = links.map((link, index) => {
    return link.requiresAuthentication ? (
      <PrivateRoute
        key={index}
        path={link.path}
        component={() => link.component}
      />
    ) : (
        <Route key={index} path={link.path}>
          {link.component}
        </Route>
      );
  });

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Nav
          userName={state.user.firstName}
          removeUserCookie={removeUserCookie}
          setUser={setUser}
        />
        <Switch>
        <Route exact path="/">
            {authenticatetUser() ? (
              <Redirect to="/menu" id={state.user.id} />
            ) : (
              <Login setUserCookie={setUserCookie} setUser={setUser} />
              )}
          </Route>
          <Route path="/resources/:id">
            {" "}
            <Resource />
          </Route>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
