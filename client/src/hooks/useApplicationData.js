import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function useApplicationData() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [state, setState] = useState({
    pages: {
      topics: []
    },
    user: {
      firstName: "",
      id: ""
    }
  });

  //sets user
  const setUser = user => {
    setState(prev => ({
      ...prev,
      user
    }));
  };

  //set user cookie
  const setUserCookie = (firstName, id) => {
    setCookie("user", { firstName: firstName, id: id }, { path: "/" });
  };

  //remove user cookie
  const removeUserCookie = () => {
    removeCookie("user");
  };

  const authenticatetUser = () => {
    if (state.user.firstName) {
      return true;
    } else {
      return false;
    }
  };

  if (!state.user.firstName && cookies.user) {
    setUser({ firstName: cookies.user.firstName, id: cookies.user.id });
  }

  useEffect(() => {
    Promise.all([
      axios.request({
        url: "http://localhost:5000/topics",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: false
      })
    ])
      .then(response => {
        setState(prev => ({
          ...prev,
          pages: {
            ...prev.pages,
            topics: response[0].data
          }
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return { state, cookies, setUserCookie, setUser, removeUserCookie, authenticatetUser };
}
