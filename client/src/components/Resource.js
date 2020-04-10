import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { PinImg } from "../styles/pin";
import BackButton from "./Buttons/BackButton";
import {
  MainDiv,
  StyledGrid,
  GridItem,
  TitleDiv,
  Title,
  StyledHref,
  PinDiv,
  StyledImg,
  ImgDiv,
  CommentsPaper
} from "../styles/resource";

const axios = require("axios").default;

//will need to grab comments in addition to resource
// needs save pin

// link button - could be title
// rounded paper div, or rounded paper like pinterest would be nice
// to show creator: change SQL query so that it joins the user ID and sends the name over instead
// avatar, created by "" at "" could click this and be taken to that profile

export default function Resource() {
  const history = useHistory();
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
        <BackButton
          onClick={() => {
            history.push("/menu");
          }}
        />
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
            <ImgDiv>
              <StyledImg src={resource.img_url} alt={resource.title} />
            </ImgDiv>
          </GridItem>
          <GridItem item xs={12} sm={12} lg={6}>
           
          </GridItem>
        </StyledGrid>
      </MainDiv>
    </main>
  );
}
