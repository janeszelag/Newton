import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

export const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledGrid = styled(Grid)`
  width: 95%;
`;

export const StyledTypography = styled(Typography)`
  font-weight: 600;
  color: #faf9f8;
  font-size: 1.35em;
  margin-right: 0em;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledCard = styled(Card)`
  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 6px 2px	#808080;
  }
`;

export const StyledCardContent = styled(CardContent)`
  background-color: #a6b07e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
 
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
  margin-bottom: 2em;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    padding: 0em;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 1.5em;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.25em;
    margin-left: 1em;
  }
`;
