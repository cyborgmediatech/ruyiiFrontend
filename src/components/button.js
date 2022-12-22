import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.p`
  padding: 0.7rem 1.7rem;
  background-color: ${(props) => props.bg};
  color: white;
  margin: 0;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 2px;
  &::after {
    content: " ";
    position: absolute;
    width: ${(props) => (props.isHover ? "calc(100% - 3.5px)" : "0")};
    transition: width 333ms ease-in;
    background: rgba(255, 255, 255, 0.3);
    right: 2px;
    top: 2px;
    bottom: 2px;
  }
`;
const Button = ({ text = "error", color = "#A5CD39", width = "100%" }) => {
  const [style, setStyle] = useState(false);
  return (
    <Container
      onMouseEnter={() => setStyle(true)}
      onMouseLeave={() => setStyle(false)}
      isHover={style}
      bg={color}
      style={{ width: width }}
    >
      {text}
    </Container>
  );
};

export default Button;
