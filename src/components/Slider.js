import React from "react";
import styled from "styled-components";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  background: url("/images/man operating machine.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const SliderContent = styled.div`
  position: absolute;
  top: 30%;
  right: 33%;
`;

const SliderHeading = styled.h1`
  color: white;
`;

const SliderPara = styled.p`
  color: white;
  text-align: center;
`;
const SliderBtnWrapper = styled.div`
  text-align: center;
`;

const SliderBtns = styled.button`
  outline: none;
  font-size: 18px;
  border: 2px solid
    ${(props) => (props.secondry ? "rgba(255,255,255)" : "rgba(0, 0, 0)")};
  padding: 3% 7%;
  margin: 1% 2%;
  color: ${(props) => (props.secondry ? "rgb(0,0,0)" : "rgb(255,255,255)")};
  background: ${(props) => (props.secondry ? "white" : "black")};
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    border: 2px solid
      ${(props) =>
        props.secondry ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)"};
  }
`;

const SliderChange = styled.div`
  position: absolute;
  right: 2.5%;
  top: 30%;
`;

const SliderMenu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 1%;
`;
const SliderNumbers = styled.p`
  color: white;
  font-size: 20px;
  margin: 10px 0;
  span {
    color: green;
    background: red;
  }
`;

const SliderMenuLogo = styled.div`
  width: 25%;
  text-align: center;
  img {
    width: 70px;
  }
`;

const SliderMenuItems = styled.div`
  width: 53%;
  ul {
    list-style-type: none;
    display: flex;
    flex-flow: row;
  }

  ul li {
    color: white;
    font-size: 18px;
    padding: 2% 5%;
  }

  ul li a  {
    text-decoration : none;
    color : white;
    &:hover {
        color : green;
    }
  }
`;

const SliderMenuSocials = styled.div`
  width: 15%;
  text-align: center;
  svg {
    margin: 1% 2%;
    font-size: 200%;
    cursor: pointer;
    color: white;
    // &:nth-child(1) {
    //   color: #4267b2;
    // }
    // &:nth-child(2) {
    //   color: #1da1f2;
    // }
    // &:nth-child(3) {
    //   color: #0a66c2;
    // }
    // &:nth-child(4) {
    //   color: white;
    //   border-radius: 4px;
    //   font-size: 24px;
    //   padding: 2px;
    //   background: linear-gradient(to right, #d867c8, #ee66bc, #f4b725);
    // }
  }
`;

const SliderHamburgerMenu = styled.div`
  width: 7%;
  text-align: center;

  svg {
    font-size: 250%;
    color: white;
    cursor: pointer;
  }
`;

function Slider() {
  return (
    <Wrapper>
      <SliderContent>
        <SliderHeading>Health Care & Medical Supplies</SliderHeading>
        <SliderPara>Advancing Sciene, Chosen for Excellence</SliderPara>
        <SliderBtnWrapper>
          <SliderBtns>Learn More</SliderBtns>
          <SliderBtns secondry>Get Started</SliderBtns>
        </SliderBtnWrapper>
      </SliderContent>

      <SliderChange>
        <SliderNumbers>
          01 <span>-</span>
        </SliderNumbers>
        <SliderNumbers>02</SliderNumbers>
        <SliderNumbers>03</SliderNumbers>
        <SliderNumbers>04</SliderNumbers>
        <SliderNumbers>05</SliderNumbers>
      </SliderChange>

      <SliderMenu>
        <SliderMenuLogo>
          <img src="/images/ruyii-logo.png" alt="Ruyii Logo" />
        </SliderMenuLogo>

        <SliderMenuItems>
          <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>Services</li>
            <li>Products</li>
            <li>About</li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </SliderMenuItems>

        <SliderMenuSocials>
          <FacebookSharpIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </SliderMenuSocials>

        <SliderHamburgerMenu>
          <MenuIcon />
        </SliderHamburgerMenu>
      </SliderMenu>
    </Wrapper>
  );
}

export default Slider;
