import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  to {
    box-shadow: 0 0 0 24px rgba(232, 76, 61, 0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 16px;
  width: 8px;
  height: 8px;
  border: none;
  box-shadow: 0 0 0 0 rgba(33, 149, 242, 0.7);
  border-radius: 50%;
  background-color: rgb(30, 136, 229);
  animation: ${pulse} 3s infinite cubic-bezier(0.66, 0, 0, 1);
`;

const Pulse = props => <Wrapper {...props} />;

export { Pulse };
