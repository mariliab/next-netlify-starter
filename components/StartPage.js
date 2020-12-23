import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

//components
import Hero from "@components/Hero";
import PortfolioBlock from "@components/PortfolioBlock";

const Container = styled.div``;

const StartPage = ({ startPageData }) => {
  return startPageData ? (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {startPageData[0].id === "metaTags" && (
          <>
            <title>
              {startPageData[0].content.title
                ? startPageData[0].content.title
                : "Marilia Bognandi portfolio - Frontend developer in Stockholm."}
            </title>
            <meta
              property="og:title"
              content={
                startPageData[0].content.ogTitle
                  ? startPageData[0].content.ogTitle
                  : "Marilia Bognandi portfolio - Frontend developer in Stockholm."
              }
            ></meta>
            <meta
              name="description"
              content={
                startPageData[0].content.description
                  ? startPageData[0].content.description
                  : "Portfolio of Marilia Bognandi - Web developer (with a focus on frontend), ux-/ui-designer and photographer in Stockholm."
              }
            ></meta>
            <meta
              property="og:description"
              content={
                startPageData[0].content.ogDescription
                  ? startPageData[0].content.ogDescription
                  : "Portfolio of Marilia Bognandi - Web developer (with a focus on frontend), ux-/ui-designer and photographer in Stockholm."
              }
            ></meta>
            <meta
              name="keywords"
              content={
                startPageData[0].content.keywords
                  ? startPageData[0].content.keywords
                  : "Web developer, frontend developer, front end developer, fullstack developer, fullstack, frontend, ux designer, ui designer, photographer."
              }
            ></meta>
          </>
        )}
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
      </Head>
      <Container>
        {startPageData.map((item, index) => {
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
  ) : (
    "No data"
  );
};

export default StartPage;
