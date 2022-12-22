import React, { useState } from "react";
import styled from "styled-components";
import { H1 } from "../../../components/styled";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const Container = styled.div`
  padding: 2% 6%;
`;
const Card = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  border-radius: 0.7rem;
  z-index: 10;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.16);
`;
const Icon = styled.p`
  text-align: center;
  background-color: ${(props) => props.variant};
  width: 70px;
  height: 70px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transform: rotate(${(props) => (props.active ? -45 : 45)}deg);
  transition: transform 333ms ease-in;
  // &:hover {
  //   -webkit-transform: rotate(360deg);
  //   -webkit-transition-duration: 1s;
  //   -webkit-transition-delay: now;
  //   -webkit-animation-timing-function: linear;
  //   -webkit-animation-iteration-count: infinite;
  // }
  // &:hover svg {
  //   -webkit-transform: rotate(-360deg);
  //   -webkit-transition-duration: 1s;
  //   -webkit-transition-delay: now;
  //   -webkit-animation-timing-function: linear;
  //   -webkit-animation-iteration-count: infinite;
  // }
  svg {
    font-size: 35px;
    transform: rotate(${(props) => (props.active ? 45 : -45)}deg);
    transition: transform 333ms ease-in;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(273px, 1fr));
  grid-gap: 2rem;
`;
const Services = () => {
  const [active, setActive] = useState(null);
  const data = [
    {
      title: "Enquire",
      text: ` The Ruyii Group is a full-service marketing communications agency that
          specializes in helping technology companies grow their businesses. We
          offer a wide range of services.`,
      icon: PsychologyAltIcon,
      a: "rgba(76, 175, 80,.3)",
      b: "rgba(76, 175, 80,1)",
    },
    {
      title: "Balance Payment",
      text: `Ruyii Group is a professional trade company which is specialized in international trade, logistics and financing, and provides integrated services for global customers.`,
      icon: VerifiedUserIcon,
      a: "rgba(0, 180, 216,.3)",
      b: "rgba(0, 180, 216,1)",
    },
    {
      title: "Shipping & Storage",
      text: "The Ruyii Group offers shipment and storage services for your convenience. We have a variety of options to choose from, so you can find the perfect solution for your needs.",
      icon: LocalShippingIcon,
      a: "rgba(63, 55, 201, .3)",
      b: "rgba(63, 55, 201, 1)",
    },
    {
      title: "Quality Control",
      text: `We are a group of quality control experts dedicated to ensuring that products meet the highest quality standards.`,
      icon: LibraryAddCheckIcon,
      a: "rgba(251, 133, 0, .3)",
      b: "rgba(251, 133, 0, 1)",
    },
    {
      title: "Confirm Order",
      text: `The Ruyii Group has confirmed your order and it is being processed. Thank you for your business!`,
      icon: ThumbUpAltIcon,
      a: "rgba(46, 196, 182, .3)",
      b: "rgba(46, 196, 182, 1)",
    },
    {
      title: "Production",
      text: `Ruyii Group Production is a leading manufacturer of high-quality products.`,
      icon: SettingsSuggestIcon,
      a: "rgba(255, 195, 0, .3)",
      b: "rgba(255, 195, 0, 1)",
    },
    {
      title: "Payment",
      text: "The Ruyii Group payment gateway is a simple and convenient way to process online payments. We offer a variety of payment options to suit your needs.",
      icon: MonetizationOnIcon,
      a: "rgba(82, 183, 136, .3)",
      b: "rgba(82, 183, 136, 1)",
    },
    {
      title: "Quote",
      text: `The Ruyii Group is a team of experienced professionals who are dedicated to helping you get the most out of your life.`,
      icon: FormatQuoteIcon,
      a: "rgba(220, 47, 2,.3)",
      b: "rgba(220, 47, 2,1)",
    },
  ];
  return (
    <Container>
      <H1 center>Services</H1>
      <Wrapper>
        {data.map((el, i) => (
          <Card
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <Icon active={active === i} variant={el.a}>
              <el.icon style={{ color: el?.b }} />
            </Icon>
            <h2>{el.title}</h2>
            <p>{el.text}</p>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Services;
