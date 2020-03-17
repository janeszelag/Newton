import React from "react";
import styled from "styled-components";

const PinImg = styled.img`
  height: 25px;
  width: 25px;
`;

export default function Pin() {
  return (
    <PinImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1584477112/push-pin_flvjco.svg" alt="pin"/>
  );
}