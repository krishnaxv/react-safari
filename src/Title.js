import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Pulse } from "./Pulse";

const StyledPulse = styled(Pulse)`
  flex-shrink: 0;
`;

function Title({ item, onClick }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      style={{
        position: "absolute",
        top: item.rect.top - 40,
        left: item.rect.left,
        zIndex: 999,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        outline: "none",
        ...props
      }}
      onClick={() => onClick(item.rect, item.tour.id)}
    >
      <StyledPulse />
      <div>{item.tour.text}</div>
    </animated.div>
  );
}

export { Title };
