import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

//components
import Hero from "@components/Hero";
import PortfolioBlock from "@components/PortfolioBlock";

const Container = styled.div``;

const StartPage = ({ entries }) => {
  return (
    <>
      <Head>
        <title>Marilia Bognandi</title>
      </Head>
      <Container>
        {entries.map((item, index) => {
          switch (item.id) {
            case "hero":
              return (
                <Hero key={index} data={{ ...item.content }}>
                  Hero
                </Hero>
              );
            case "portfolioBlock":
              return <PortfolioBlock key={index} data={{ ...item.content }} />;
          }
        })}
      </Container>
    </>
  );
};

export default StartPage;
