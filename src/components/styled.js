import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 63px;
  text-align: ${(props) => (props.center ? "center" : "left")};
  letter-spacing: 2px;
  background: -webkit-linear-gradient(#7a974c, #a5cd39);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 576px) {
    font-size: 40px;
    line-height: 53px;
  }
`;
