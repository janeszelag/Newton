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
