import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import FeaturedImage from "components/FeaturedImage";
import TechnologyBlock from "components/TechnologyBlock";
import PortfolioPageImages from "components/PortfolioPageImages";

const Background = styled.div`
  background: #ddcdc1;
`;

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
  padding-bottom: 1rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 1.2;
  margin: 0;
  font-size: 42px;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const Category = styled.p`
  text-align: center;
  letter-spacing: 1px;
  margin: 0 0 1rem 0;
`;
const Date = styled.p`
  text-align: center;
  margin: 0 0 3rem 0;
`;
const ShortDescription = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0;
`;
const Line = styled.span`
  border-bottom: 5px solid #ddcdc1;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.4;
  text-align: justify;
  margin: 0;
`;

const Block = styled.div`
  width: 100%;
  padding: 1rem;
  @media (min-width: 992px) {
    width: 50%;
    padding: 3rem;
  }
`;

const Image = styled.img`
  margin: 5rem 0;
  width: 100%;
`;

const PortfolioPage = ({ portfolioItem }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {portfolioItem?.metaTags && (
          <>
            <title>
              {portfolioItem.metaTags.fields.title
                ? portfolioItem.metaTags.fields.title
                : "Marilia Bognandi portfolio - Frontend developer in Stockholm."}
            </title>
            <meta
              property="og:title"
              content={
                portfolioItem.metaTags.fields.ogTitle
                  ? portfolioItem.metaTags.fields.ogTitle
                  : "Marilia Bognandi portfolio - Frontend developer in Stockholm."
              }
            ></meta>
            <meta
              name="description"
              content={
                portfolioItem.metaTags.fields.description
                  ? portfolioItem.metaTags.fields.description
                  : "Portfolio of Marilia Bognandi - Web developer (with a focus on frontend), ux-/ui-designer and photographer in Stockholm."
              }
            ></meta>
            <meta
              property="og:description"
              content={
                portfolioItem.metaTags.fields.ogDescription
                  ? portfolioItem.metaTags.fields.ogDescription
                  : "Portfolio of Marilia Bognandi - Web developer (with a focus on frontend), ux-/ui-designer and photographer in Stockholm."
              }
            ></meta>
            <meta
              name="keywords"
              content={
                portfolioItem.metaTags.fields.keywords
                  ? portfolioItem.metaTags.fields.keywords
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
        <FeaturedImage data={{ ...portfolioItem?.featuredImage }} />
        <Block>
          <TitleBlock>
            <Title>{portfolioItem?.title}</Title>
            <Category>{portfolioItem?.category}</Category>
            <Date>{portfolioItem?.date}</Date>
            <ShortDescription>
              <Line>{portfolioItem?.shortDescription}</Line>
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
      {portfolioItem?.projectImages && (
        <Background>
          {/* <Image src={portfolioItem?.featuredImage.fields?.file?.url} /> */}
          {}
          <PortfolioPageImages data={{ ...portfolioItem?.projectImages }} />
        </Background>
      )}
    </>
  );
};

export default PortfolioPage;
