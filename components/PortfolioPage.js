import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import FeaturedImage from "components/FeaturedImage";
import TechnologyBlock from "components/TechnologyBlock";

const Container = styled.div`
  min-height: 90vh;
  background: white;
  padding: 0 1rem;

  @media (min-width: 992px) {
    padding: 0;
  }
`;

const ContentBlock = styled.div`
  margin: 0 auto;
  @media (min-width: 992px) {
    padding: 0 1rem;
    max-width: 50%;
    transform: translateY(-25%);
  }
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
const Date = styled.h4``;

const Text = styled.p`
  font-size: 150%;
  line-height: 1.4;
  text-align: justify;
`;

const PortfolioPage = ({ portfolioItem }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Marilia Bognandi</title>
      </Head>
      <FeaturedImage data={{ ...portfolioItem?.featuredImage }} />
      <Container>
        <TitleBlock>
          <Title>{portfolioItem?.title}</Title>
          <Category>{portfolioItem?.category}</Category>
          <Date>{portfolioItem?.date}</Date>
        </TitleBlock>
        <ContentBlock>
          {portfolioItem?.description?.content.map((item, index) => {
            if (item.nodeType == "paragraph") {
              return <Text key={index}>{item.content[0].value}</Text>;
            }
          })}
          <TechnologyBlock data={{ ...portfolioItem?.technologyBlock }} />
        </ContentBlock>
      </Container>
    </>
  );
};

export default PortfolioPage;
