import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";


export const ContainerLogin = styled(Container)`
  padding: 3%;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PaperLogin = styled(Paper)`
  background-color: #c2dbd3;
  margin-top: 5em;
  padding: 1em;
  @media (max-width: 768px) {
    width 90%;
    margin-top: 2em;
  }
`;

export const LoginTextField = styled(TextField)`
& > * {
  color: black;
  & > fieldset {
    border-color: black;
  }
`;

export const TypographyLogin = styled(Typography)`
font-size: x-large;
font-weight: 600;
color: black;
`;

export const StyledLink = styled(Link)`
color: black;
`