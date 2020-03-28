import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

//Main sign up styles

export const ContainerSignup = styled(Container)`
  padding: 3%;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PaperSignup = styled(Paper)`
  background-color: #c2dbd3;
  margin-top: 5em;
  padding: 1em;
  @media (max-width: 768px) {
    width 90%;
    margin-top: 2em;
  }
`;
export const TextFieldSignup = styled(TextField)`
  & > * {
    color: black;
    & > fieldset {
      border-color: black;
    }
  }
`;
export const TypographySignup = styled(Typography)`
  font-size: x-large;
  font-weight: 600;
  color: black;
`;

export const StyledLink = styled(Link)`
color: black;
`

//Topic choice styles

export const MainDivTopics = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2em;
`;

export const IntroDiv = styled.div`
  height: 40%;
  width: 100%;
  background-color: #d98e7f;
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

export const Text = styled.p`
  color: #ffffff;
  font-size: 2em;

  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.25em;
    margin-left: 1em;
  }
`;

export const ChoiceDiv = styled.div`
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