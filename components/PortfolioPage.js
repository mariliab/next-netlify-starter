import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import FeaturedImage from "components/FeaturedImage";
import TechnologyBlock from "components/TechnologyBlock";

const Container = styled.div`
  min-height: 90vh;
  background: white;
`;

const TitleBlock = styled.div`
  background: white;
  padding: 1rem;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 992px) {
    transform: translateY(-50%);
    max-width: 50%;
  }
`;

const Title = styled.h1``;
const Category = styled.h3``;

const PortfolioPage = ({ portfolioItem }) => {
  const router = useRouter();
  const { slug } = router.query;

  //console.log("portfolioItem: " + JSON.stringify(portfolioItem, null, 2));

  return (
    <>
      <Head>
        <title>Marilia Bognandi</title>
      </Head>
      <FeaturedImage data={{ ...portfolioItem?.fields?.featuredImage }} />
      <Container>
        <TitleBlock>
          <Title>{portfolioItem?.fields.title}</Title>
          <Category>{portfolioItem?.fields.category}</Category>
        </TitleBlock>
        <TechnologyBlock data={{ ...portfolioItem?.fields?.technologyBlock }} />
      </Container>
    </>
  );
};

export default PortfolioPage;
