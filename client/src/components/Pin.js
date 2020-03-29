import React from "react";
import styled from "styled-components";

const PinImg = styled.img`
  height: 20px;
  width: 20px;
  &:hover {
    transform: translateY(-4px);
  
  }
`;

export default function Pin() {
  return (
    <PinImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1584477112/push-pin_flvjco.svg" alt="pin"/>
  );
}