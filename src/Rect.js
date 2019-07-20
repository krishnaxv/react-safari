import React from "react";
import { animated, useSpring } from "react-spring";

function Rect({ rect: { left, top, width, height } }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.rect
      x={left}
      y={top}
      width={width}
      height={height}
      style={props}
    />
  );
}

export { Rect };
