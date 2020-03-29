import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pin from "./Pin";
import {
  MainDiv,
  IntroDiv,
  Text,
  StyledTypography,
  StyledCard,
  StyledCardContent,
  StyledGrid,
  StyledLink
} from "../styles/menu";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const axios = require("axios").default;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function Menu(props) {
  const classes = useStyles();
  const history = useHistory();
  const [resources, setResources] = useState([]);

  //add a call to get number of boards one day, combine state - if boards is zero then intro message present
  useEffect(() => {
    axios
      .request({
        url: "http://localhost:5000/resources",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        params: {
          userId: props.id
        },
        withCredentials: false
      })
      .then(response => {
        setResources(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.id]);

  return (
    <MainDiv>
      <IntroDiv>
        <Text>
          To get started pin a resource you like to save it to a board, or click
          a resource to explore it more! <br /> You can also search for a
          resource or topic by name!
        </Text>
      </IntroDiv>

      <StyledGrid container spacing={2}>
        {resources.map(resource => (
          
          <Grid item xs={12} sm={3} key={resource.id}>
            <StyledCard className={classes.root} elevation={8}>
              
                <StyledCardContent>
                <StyledLink to={"/resources/" + resource.id}>
                <StyledTypography gutterBottom>
                    {resource.title}
                  </StyledTypography>
                </StyledLink>
                  <Button>
                    <Pin />
                  </Button>
                </StyledCardContent>
                <CardActionArea onClick={() => history.push("/resources/" + resource.id)}>
                <CardMedia
                  component="img"
                  alt={resource.title}
                  height="250"
                  image={resource.img_url}
                  title={resource.title}
                />
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </StyledGrid>
    </MainDiv>
  );
}
