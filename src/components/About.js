import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
//   background: #bebebe;
  display : flex;
  flex-flow : column;
  align-items : center;
  padding : 70px 0;
`;

const Heading = styled.div`
    align-self : center;

    h1 {
        font-size : 48px;
    }
`

const Container = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content : space-around;
`;

const ImageContainer = styled.div`
  width: 400px;
  img {
    width: 100%;
    box-shadow: 17px 17px 5px #BFAFB2;
  }
`;

const TextWrapper = styled.div`
  //   background : white;
  padding: 30px;
  max-width: 300px;

  h2 {
    font-size: 42px;
    margin: 0;
  }
  .aboveHeading {
    margin-bottom: 0;
    font-size: 15px;
  }
  .belowHeading {
    line-height: 25px;
  }

  button {
    outline : none;
    border : 2px solid green;
    font-size : 18px;
    padding : 10px 25px;
    background-color : transparent;
    cursor : pointer;
    color : green;
    transition : all .4s ease-in-out;

    &:hover {
        color : white;
        background : green;
    }
  }
`;

function About() {
  return (
    <Wrapper>
      <Heading>
        <h1>Craft out Beyond the Next Trend Horizon</h1>
      </Heading>
      <Container>
        <ImageContainer>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </ImageContainer>
        <TextWrapper>
          <p className="aboveHeading">Our People Come First</p>
          <h2>About Us</h2>
          <p className="belowHeading">
            <b>RUYI GROUP</b> has developed as a dynamic service partner to its
            customers. Our independent professionals are the extension of your
            technical service and work closely with your technical staff. We are
            flexible and can be widely used for technical issues with your
            machines or the entire production line...
          </p>
          <button>Learn More</button>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}

export default About