import React, { useState } from "react";
import TopicCheckBoxes from "./TopicsChoice";
import { useHistory } from "react-router-dom";
import { MainDivTopics, IntroDiv, Text, ChoiceDiv, ChoicePaper } from "../../styles/signup"
const axios = require("axios").default;




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
    <MainDivTopics>
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
    </MainDivTopics>
  );
}
