import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

const MainDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;



export default function TopicCheckBoxes(props) {
  const classes = useStyles();
  const [allTopics, setTopics] = useState({});

  const handleChange = event => {
    setTopics({ ...allTopics, [event.target.name]: event.target.checked });
  };

  // const faketop = [{name:"math", id:1}, {name:"chem", id:2}]

  const choices = props.topics.map(topic => {
    return (
      <FormControlLabel
        key={topic.id}
        control={
          <Checkbox
            checked={allTopics[topic.id]}
            onChange={handleChange}
            name="{topic.id}"
          />
        }
        label={topic.name}
      />
    );
  });

  return (
    <form onSubmit={"nothing yet"}>
    <MainDiv>
      
        <FormControl
          required
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">Pick at least three</FormLabel>
          <FormGroup row>{choices}</FormGroup>
          
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          </MainDiv>
      </form>
   
  );
}
