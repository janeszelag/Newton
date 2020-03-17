import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import { links } from "./Links"
import Nav from "./components/Nav"

function App() {

  // const [users,setUsers] = useState([])

  // useEffect(() => {
  //   axios.request({
  //     url: "http://localhost:5000/users",
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Credentials": true
  //     },
  //     withCredentials: false
  //   })
  //   .then(response => {
  //     console.log(response.data)
  //     setUsers(response.data)
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   }); 
  // }, [])

  // const userList = users.map((user, index) => {
  //   return (
  //     <p key={index}>email: {user.email}</p>
  //   );
  // });

  const routes = links.map((link, index) => {
    return ( <Route key={index} path={link.path}>
          {link.component}
        </Route>
      );
  });

  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Nav/>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
