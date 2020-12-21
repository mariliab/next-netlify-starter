import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Background = styled.div`
  min-height: 90vh;
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  background-attachment: fixed;
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 992px) {
    background-position: center;
  }
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

const Title = styled.h1`
  color: white;
  font-size: 400%;
  line-height: 1.2;
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 200%;
  line-height: 1.4;
  @media (min-width: 768px) {
    font-size: 300%;
  }
`;

const Hero = ({ data }) => {
  return (
    <Background backgroundImage={data.backgroundImage?.fields?.file?.url}>
      <Container>
        <TextContent>
          <Title>{data?.title} </Title>
          <SubTitle>{data?.subtitle}</SubTitle>
        </TextContent>
      </Container>
    </Background>
  );
};

export default Hero;
