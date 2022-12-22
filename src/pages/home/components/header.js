import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../../../assets/main-logo.png";
import Logo2 from "../../../assets/main-logo2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  ${(props) =>
    props.forSlider
      ? ``
      : ` transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset,
    rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  backdrop-filter: saturate(200%) blur(1.875rem);
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 12;`}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 2rem;
`;
const Img = styled.img`
  max-width: 60px;
  height: 60px;
`;
const Link = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  cursor: pointer;
  position: relative;
  &:hover:after {
    width: 88%;
    border: 2px solid #a5cd39;
  }
  &::after {
    content: " ";
    border: ${(props) => props.active && "2px solid #a5cd39"};
    width: ${(props) => (props.active ? "88%" : "0")};
    transition: width 444ms ease-in;
    position: absolute;
    left: 3%;
    bottom: -6px;
    border-radius: 4px;
  }
`;
const A = styled.a`
  text-decoration: none;
  color: ${(props) => (props.forSlider ? "#fff" : "#000")};
  &:hover {
    color: ${(props) =>
      props.for === 0
        ? "#1771E6"
        : props.for === 1
        ? "#1C93E4"
        : props.for === 2
        ? "#0961B8"
        : props.for === 3 && "#C6258C"};
  }
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 1rem;
  align-items: center;
`;
const Header = ({ forSlider }) => {
  return (
    <Container forSlider={forSlider}>
      <Img
        src={forSlider ? Logo2 : Logo}
        alt="main logo"
        style={{
          maxWidth: forSlider ? "90px" : "60px",
          height: forSlider ? "90px" : "60px",
        }}
      />
      <Wrapper>
        {["Home", "Products", "About Us", "Contact Us"].map((el, i) => (
          <Link
            key={i}
            active={i === 0}
            style={{ color: forSlider ? "#fff" : "#000" }}
          >
            {el}
          </Link>
        ))}
        <Socials>
          {[
            {
              icon: FaFacebookF,
              link: "https://www.facebook.com/profile.php?id=100088530332793",
            },
            { icon: FaTwitter, link: "https://twitter.com/RuyiiG" },
            {
              icon: FaLinkedinIn,
              link: "https://www.linkedin.com/company/87468892/admin/",
            },
            {
              icon: FaInstagram,
              link: "https://www.instagram.com/ruyiigroup/",
            },
          ].map((el, i) => (
            <A
              href={el.link}
              target="_blank"
              key={i}
              for={i}
              forSlider={forSlider}
            >
              <el.icon />
            </A>
          ))}
        </Socials>
      </Wrapper>
    </Container>
  );
};

export default Header;
