import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    pages: {
      resources: []
    }
  });

  useEffect(() => {
    Promise.all([
      axios.request({
        url: "http://localhost:5000/resources",
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
            resources: response[0].data
          }
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return { state };
}
