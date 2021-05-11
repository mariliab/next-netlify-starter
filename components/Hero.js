import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Background = styled.div`
  min-height: 66vh;
  background-image: linear-gradient(to bottom right, #ddcdc1, #ac8266);
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContent = styled.div`
  text-align: center;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const ShortText = styled.p`
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`;

const Title = styled.h1`
  margin-top: 0;
  color: #ddcdc1;
  font-size: 400%;
  line-height: 1.2;
`;

const SubTitle = styled.h3`
  color: white;
  font-size: 200%;
  font-weight: 300;
  line-height: 1.4;
  @media (min-width: 768px) {
    font-size: 300%;
  }
`;

const Hero = ({ data }) => {
  return (
    <Background>
      <Container>
        <TextContent>
          <ShortText>{data?.shortText}</ShortText>
          <Title>{data?.title} </Title>
          <SubTitle>{data?.subtitle}</SubTitle>
        </TextContent>
      </Container>
    </Background>
  );
};

export default Hero;
