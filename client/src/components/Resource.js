import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { PinImg } from "../styles/pin";

const axios = require("axios").default;

//will need to grab comments in addition to resource
// needs save pin
// back button
// link button - could be title
// rounded paper div, or rounded paper like pinterest would be nice
// change SQL query so that it joins the user ID and sends the name over instead
// avatar, created by "" at ""
//  could click this and be taken to that profile

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledGrid = styled(Grid)`
  width: 80%;
  height: 75%;
  background-color: #fff;
  
  border-color: #808080;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
 
`;

const TitleDiv = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  border-radius: 10px 0px 0px 0px;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  font-weight: 600;
 color: #0B0C0C;
`;
const StyledHref = styled.a`
  text-align: center;
  width: 80%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #f8faf9;
  }
`;
const PinDiv = styled.div`
  width: 10%;
`;

const StyledImg = styled.img`
  height: 80%;
  width: 100%;

  border-radius: 0px 0px 0px 10px;
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
  }, [id]);

  return (
    <main>
      <MainDiv>
        <StyledGrid container spacing={0}>
          <GridItem item xs={12} sm={12} lg={6}>
            <TitleDiv>
             
              <StyledHref
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Title> {resource.title}</Title>
              </StyledHref>
              <PinDiv>
                <PinImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1585705546/push-pin_2_l9erlo.svg"
                  alt="pin"
                />
              </PinDiv>
       
             
            </TitleDiv>

            <StyledImg src={resource.img_url} alt={resource.title} />
          </GridItem>
          <GridItem item xs={12} sm={6}>
            <CommentsPaper>
              <p>description, comments will go here</p>
            </CommentsPaper>
          </GridItem>
        </StyledGrid>
      </MainDiv>
    </main>
  );
}
