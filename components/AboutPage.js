import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 1rem;
  margin: 0 auto;
  font-size: 24px;
  @media (min-width: 992px) {
    padding: 5rem 0;
    max-width: 800px;
  }
`;

const Background = styled.div`
  background: #ddcdc1;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 1.2;
  margin: 0 0 2rem 0;
`;

const Text = styled.div``;

const AboutPage = ({ data }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Marilia Bognandi - About me</title>
      </Head>
      <Background>
        <Container>
          <Title>About me</Title>
          <Text>
            My name is Marilia Bognandi and im a frontend developer /
            ux-designer going fullstack developer. I love working with new ideas
            and to think outside the box.<br></br>
            <br></br> I love learning new things, whether it's frontend, ux, ui,
            graphic design, photography, marketing, handling clients, business
            strategy, I want to know it all!<br></br>
            <br></br> Because my dream is to build a user friendly and scalable
            startup, and I'm on a mission to gather any knowledge that will get
            me there.
          </Text>
        </Container>
      </Background>
    </>
  );
};

export default AboutPage;
