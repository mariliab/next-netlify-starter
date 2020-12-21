import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import FeaturedImage from "components/FeaturedImage";
import TechnologyBlock from "components/TechnologyBlock";

const Container = styled.div`
  min-height: 90vh;
  background: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    padding: 0;
    flex-direction: row;
  }
`;

const ContentBlock = styled.div`
  margin: 0 auto;
`;

const TitleBlock = styled.div`
  background: white;
  padding-bottom: 1rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 1.2;
  margin: 0 0 2rem 0;
`;
const Category = styled.p`
  text-align: center;
  margin: 0 0 1rem 0;
`;
const Date = styled.p`
  text-align: center;
  margin: 0 0 2rem 0;
  text-decoration: underline;
`;
const ShortDescription = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
  text-align: justify;
  margin: 0;
`;

const Block = styled.div`
  width: 100%;
  padding: 1rem;
  @media (min-width: 992px) {
    width: 33.3333333%;
    padding: 3rem;
  }
`;

const PortfolioPage = ({ portfolioItem }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Marilia Bognandi</title>
      </Head>
      <Container>
        <FeaturedImage data={{ ...portfolioItem?.featuredImage }} />
        <Block>
          <TitleBlock>
            <Title>{portfolioItem?.title}</Title>
            <Category>{portfolioItem?.category}</Category>
            <Date>{portfolioItem?.date}</Date>
            <ShortDescription>
              {portfolioItem?.shortDescription}
            </ShortDescription>
          </TitleBlock>
          <ContentBlock>
            {portfolioItem?.description?.content.map((item, index) => {
              if (item.nodeType == "paragraph") {
                return <Text key={index}>{item.content[0].value}</Text>;
              }
            })}
            <TechnologyBlock data={{ ...portfolioItem?.technologyBlock }} />
          </ContentBlock>
        </Block>
      </Container>
    </>
  );
};

export default PortfolioPage;
