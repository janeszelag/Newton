import styled from "styled-components";

export const PinImg = styled.img`

  height: ${props => (props.small ? '20px' : '35px')};
  width: ${props => (props.small ? '20px' : '35px')};
  &:hover {
    transform: translateY(-4px);
  
  }
`;