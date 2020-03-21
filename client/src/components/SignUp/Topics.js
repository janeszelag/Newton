import React, { useState } from "react";
import TopicCheckBoxes from "./TopicsChoice";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

import { useHistory } from "react-router-dom";
const axios = require("axios").default;


const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2em;
`;

const IntroDiv = styled.div`
  height: 40%;
  width: 100%;
  background-color: #e5a7a6;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  @media (max-width: 768px) {
    padding: 0em;
  }
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 2em;

  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.25em;
    margin-left: 1em;
  }
`;

const ChoiceDiv = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ChoicePaper = styled(Paper)`
  background-color: #F8FAF9;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 2em;
  @media (max-width: 768px) {
    width 90%;
    margin-top: 1em;
   
  }
`;

export default function Topics(props) {
  const history = useHistory();
 
  const [allTopics, setTopics] = useState({});

  const handleSubmit = event => {

    const topicsArray = Object.keys(allTopics)
    
    event.preventDefault();

    const body = {
      topics: topicsArray,
      userId: props.userId
    };
   

    return axios({
      method: "post",
      url: "/topics",
      data: body
    })
      .then(response => {
        console.log(response)

        history.push("/menu");
        localStorage.removeItem("mode");
      })
      .catch(err => {
        console.log(err);
      });
  };
    
  return (
    <MainDiv>
      <IntroDiv>
        <Text>
          Welcome to newton {props.name}!
          What kinds of topics are you interested in? <br /> Help us show you
          great resources by choosing at least 2 subjects:
        </Text>
      </IntroDiv>
      <ChoiceDiv>
        <ChoicePaper elevation={8}>
        <TopicCheckBoxes topics={props.topics} handleSubmit={handleSubmit} allTopics={allTopics} setTopics={setTopics} />
        </ChoicePaper>
      </ChoiceDiv>
    </MainDiv>
  );
}
