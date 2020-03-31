import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import {
  useParams
} from "react-router-dom";
const axios = require("axios").default;


//will need to grab comments in addition to resource
// needs save pin
// back button 
// link button - could be title
// rounded paper div, or rounded paper like pinterest would be nice

export default function Resource() {
  const [resource, setResource] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .request({
        url: "http://localhost:5000/resources/page",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        params: {
          id: id
        },
        withCredentials: false
      })
      .then(response => {
        console.log(response.data)
        setResource(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

 
  return (
    <main>
       <h3>ID: {id}</h3>
       <Paper>
         <h1>{resource.title}</h1>
         <img src={resource.img_url} alt={resource.title}/>
       </Paper>
    </main>
  );
}