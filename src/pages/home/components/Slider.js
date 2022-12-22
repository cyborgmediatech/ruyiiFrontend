import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Button from "../../../components/button";
import img1 from "../../../assets/slider/1-min.jpg";
import img2 from "../../../assets/slider/2-min.jpg";
import img3 from "../../../assets/slider/3-min.jpg";
import img4 from "../../../assets/slider/4-min.jpg";
import img5 from "../../../assets/slider/5-min.jpg";
import Header from "./header";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: gray;
  position: relative;
`;
const Slide = styled.div`
  position: absolute;
  background: url(${(props) => props.banner});
  transition: background 300ms ease-in 200ms;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
  height: ${(props) => (props.active ? "100%" : "0")};
  width: ${(props) => (props.active ? "100%" : "0")};
  opacity: ${(props) => (props.active ? "100%" : "10%")};
  visibility: ${(props) => (props.active ? "unset" : "hidden")};
  transition: opacity 333ms ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderChange = styled.div`
  position: absolute;
  right: 1.5%;
  top: 30%;
`;
const SliderNumbers = styled.p`
  color: white;
  font-size: 20px;
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  position: relative;
  span {
    color: green;
    background: red;
  }
  &::after {
    content: "";
    display: block;
    color: red;
    border: ${(props) => (props.active ? "1px" : "0px")} solid #a5cd39;
    height: ${(props) => (props.active ? "100px" : "0px")};
    transition: height 300ms ease-in-out;
    width: 0px;
    position: relative;
    right: -5px;
  }
`;
const Animated = styled.div`
  color: white;
  margin-bottom: 1rem;
  &:first-child {
    height: 65px;
    overflow: hidden;
  }
  &:nth-child(2) {
    height: 75px;
    overflow: hidden;
  }
  &:nth-child(3) {
    height: 65px;
    overflow: hidden;
  }
`;
const H1 = styled.h1`
  margin: 0;
  position: relative;
  bottom: ${(props) => (props.active ? "0" : "-40px")};
  transition: bottom 400ms ease-in-out;
  font-family: Exo, sans-serif;
  font-weight: 300;
  font-size: 43px;
  line-height: 65px;
`;
const P = styled.p`
  margin: 0;
  position: relative;
  bottom: ${(props) => (props.active ? "0" : "-80px")};
  transition: bottom 400ms ease-in-out;
  font-weight: 200;
  font-size: 22px;
  line-height: 22px;
`;
const Div = styled.div`
  position: relative;
  bottom: ${(props) => (props.active ? "0" : "-40px")};
  transition: bottom 400ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
`;
const Slider = (props) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    active > 4 && setActive(0);
  }, [active]);
  return (
    <Container {...props}>
      {[img1, img2, img3, img4, img5].map((el, i) => (
        <Slide key={i} active={active === i} banner={el}>
          <div>
            <Animated>
              <H1 active={active === i}>Global Sourcing</H1>
            </Animated>
            <Animated>
              <P active={active === i}>
                Offer smart sourcing tools to find <br /> Products,
                Manufacturers & Suppliers in Asia
              </P>
            </Animated>
            <Animated>
              <Div active={active === i}>
                <Button text="Learn More" />
                <Button text="Get Started" color="#666666" />
              </Div>
            </Animated>
          </div>
        </Slide>
      ))}
      <SliderChange>
        {[...Array(5)].map((el, i) => (
          <SliderNumbers
            active={active === i}
            onClick={() => {
              setActive(i);
            }}
          >
            {i + 1}{" "}
            {active === i && (
              <HorizontalRuleIcon
                style={{
                  color: "#a5cd39",
                  position: "relative",
                  left: "-5px",
                  top: "5px",
                }}
              />
            )}
            {i === 4 && active == 4 && (
              <HorizontalRuleIcon
                style={{
                  display: "block",
                  position: "absolute",
                  bottom: "-22px",
                  color: "white",
                  left: "-5px",
                }}
              />
            )}
          </SliderNumbers>
        ))}
      </SliderChange>
      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Header forSlider={true} />
      </div>
    </Container>
  );
};

export default Slider;
