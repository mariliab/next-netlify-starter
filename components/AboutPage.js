import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  padding: 3rem 1rem 5rem;
  margin: 0 auto;
  font-size: 24px;
  @media (min-width: 992px) {
    padding: 5rem 1rem;
    max-width: 1200px;
  }
`;

const Background = styled.div`
  background: #f8f5f2;
`;

const Title = styled.h1`
  line-height: 1.2;
  margin: 0 0 2rem 0;
`;

const Text = styled.div`
  font-weight: 300;
  padding-bottom: 1rem;
  @media (min-width: 992px) {
    padding-bottom: 0;
    padding-right: 1rem;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;
const ProfilePicture = styled.img`
  max-height: 500px;
  max-width: 100%;
  border-radius: 9999px;
`;

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
          <Content>
            <div>
              <Title>About me</Title>
              <Text>
                My name is Marilia Bognandi and im a frontend developer /
                ux-designer going fullstack developer. I love working with new
                ideas and to think outside the box.<br></br>
                <br></br> I love learning new things, whether it's frontend, ux,
                ui, graphic design, photography, marketing, handling clients,
                business strategy, I want to know it all!<br></br>
                <br></br> Because my dream is to build a user friendly and
                scalable startup, and I'm on a mission to gather any knowledge
                that will get me there.
              </Text>
            </div>
            <ProfilePicture src="/assets/foto_Marilia-Bognandi.jpg" />
          </Content>
        </Container>
      </Background>
    </>
  );
};

export default AboutPage;
