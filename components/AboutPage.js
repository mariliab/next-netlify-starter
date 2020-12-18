import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div``;

const AboutPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Marilia Bognandi</title>
      </Head>
      <Container>AboutPage</Container>
    </>
  );
};

export default AboutPage;
