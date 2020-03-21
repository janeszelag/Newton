import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export const MainDiv = styled.div`
  width: 100%;
  margin-top: 2em;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledGridList = styled(GridList)`
width: 80%;
height 100%;
`
export const StyledGridListTile = styled(GridListTile)`
border-radius: 30px;
`
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
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
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