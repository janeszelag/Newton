import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import { MainDiv } from "../../styles/signup";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function TopicCheckBoxes(props) {
  const classes = useStyles();

  const handleChange = event => {
    props.setTopics({
      ...props.allTopics,
      [event.target.name]: event.target.checked
    });
  };

  const choices = props.topics.map(topic => {
    return (
      <FormControlLabel
        key={topic.id}
        control={
          <Checkbox
            checked={props.allTopics[topic.id]}
            onChange={handleChange}
            name={topic.id}
          />
        }
        label={topic.name}
      />
    );
  });

  return (
    <form onSubmit={props.handleSubmit}>
      <MainDiv>
        <FormControl
          required
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">Pick at least two</FormLabel>
          <FormGroup row>{choices}</FormGroup>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </MainDiv>
    </form>
  );
}
