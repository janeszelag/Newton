import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    margin-top: 2em;
    justify-content: center;
   

  }
`;

export const StyledGrid = styled(Grid)`
  width: 80%;
  height: 75%;
  margin-left: 4em;
  background-color: #fff;
  flex: grow;
  flex-wrap: wrap;
  border-color: #808080;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    width: 90%;
    height: 120%;
    margin-left: 0em;
    margin-top: 2em;
  }
`;

export const GridItem = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 900px) {
    width: 90%;
    height: 50%;
  }
`;

export const TitleDiv = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  border-radius: 10px 0px 0px 0px;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  font-weight: 600;
  color: #0b0c0c;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
export const StyledHref = styled.a`
  text-align: center;
  width: 80%;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #0b0c0c;
  }
`;
export const PinDiv = styled.div`
  width: 10%;
`;

export const StyledImg = styled.img`
  height: 100%;
  width: 100%;

  border-radius: 0px 0px 0px 10px;
`;

export const ImgDiv = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
`;

export const CommentsPaper = styled(Paper)`
  width: 90%;
`;