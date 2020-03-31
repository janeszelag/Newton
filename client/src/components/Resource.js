import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
const axios = require("axios").default;

//will need to grab comments in addition to resource
// needs save pin
// back button
// link button - could be title
// rounded paper div, or rounded paper like pinterest would be nice

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  height: 100%;
`;

const ContentDiv = styled.div`
  width: 80%;
  height: 75%;
  
  
  border-color: #808080;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;
const GridItem = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 10px 0px 0px 10px;
`;

const CommentsPaper = styled(Paper)`
width: 90%;
`;

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
        console.log(response.data);
        setResource(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <MainDiv>
        <ContentDiv>
          <StyledGrid container spacing={0}>
            <GridItem item xs={12} sm={12} lg={6}>
              <StyledImg src={resource.img_url} alt={resource.title} />
            </GridItem>
            <Grid item xs={12} sm={6}>
              <GridItem>
                <CommentsPaper>
                  <h1>{resource.title}</h1>
                </CommentsPaper>
              </GridItem>
            </Grid>
          </StyledGrid>
        </ContentDiv>
      </MainDiv>
    </main>
  );
}
