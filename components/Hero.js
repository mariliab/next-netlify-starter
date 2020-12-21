import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Background = styled.div`
  min-height: 90vh;
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
`;

const Title = styled.h1`
  color: white;
  font-size: 400%;
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 300%;
`;

const Hero = ({ data }) => {
  // const words = ["Web apps", "UI's"];
  // const [index, setIndex] = useState(0);
  //const [subIndex, setSubIndex] = useState(0);
  // const [blink, setBlink] = useState(true);
  // const [reverse, setReverse] = useState(false);
  // // typeWriter
  // useEffect(() => {
  //   if (index === words.length) return;

  //   if (
  //     subIndex === words[index].length + 1 &&
  //     index !== words.length - 1 &&
  //     !reverse
  //   ) {
  //     setReverse(true);
  //     return;
  //   }

  //   if (subIndex === 0 && reverse) {
  //     setReverse(false);
  //     setIndex((prev) => prev + 1);
  //     return;
  //   }

  //   const timeout = setTimeout(() => {
  //     setSubIndex((prev) => prev + (reverse ? -1 : 1));
  //   }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

  //   return () => clearTimeout(timeout);
  // }, [subIndex, index, reverse]);

  // // blinker
  // useEffect(() => {
  //   const timeout2 = setTimeout(() => {
  //     setBlink((prev) => !prev);
  //   }, 500);
  //   return () => clearTimeout(timeout2);
  // }, [blink]);

  return (
    <Background backgroundImage={data.backgroundImage?.fields?.file?.url}>
      <Container>
        <TextContent>
          <Title>{data?.title} </Title>
          {/* <SubTitle>
            I build{" "}
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </SubTitle> */}
          <SubTitle>{data?.subtitle}</SubTitle>
        </TextContent>
      </Container>
    </Background>
  );
};

export default Hero;
