import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/main-logo.png";
import Button from "../../../components/button";
import { H1 } from "../../../components/styled";
const Container = styled.div`
  padding: 2% 6%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // flex-wrap: wrap;
`;
const Text = styled.p`
margin:0
font-size:16px;
line-height:22px;
max-width:600px;
`;
const Img = styled.img`
  max-width: 300px;
  height: 300px;
`;
const About = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <H1>About us</H1>
          <Text>
            RUYI GROUP has developed as a dynamic service partner to its
            customers. Our independent professionals are the extension of your
            technical service and work closely with your technical staff. We are
            flexible and can be widely used for technical issues with your
            machines or the entire production line. Whether it is a maintenance
            engineer or a tailor-made component in our workshop, RUYI Service
            and Engineering provides a suitable solution at all times. And with
            all the knowledge and skills we provide 24 hours a day, 7 days a
            week for customization, answers, and professionals that fit your
            company and the situation.
          </Text>
          <Button text="Learn More" width="35%" />
        </div>
        <div>
          <Img src={Logo} alt="alt" width={"100%"} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default About;
