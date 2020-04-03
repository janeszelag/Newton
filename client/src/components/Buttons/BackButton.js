import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  height: 5vh;
  width: 5vh;
  margin-left: 3em;
  margin-top: 1em;
 
  

  @media (max-width: 768px) {
    height: 4vh;
  width: 4vh;
  margin-left: 0em;
  margin-top: 0em;
  }
  &:hover {
    transform: translateY(-2px);
  }
`;
const BackImg = styled.img`
  height: 4vh;
  width: 4vh;
 


  @media (max-width: 768px) {
    height: 4vh;
  width: 4vh;
  }
  &:hover {
    transform: translateY(-4px);
  }
  
`;


export default function BackButton(props) {
  return (
    
    <StyledButton onClick={props.onClick}>
    <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1585942430/back_2_duysqh.svg" />
    </StyledButton>
    
  
  )
}